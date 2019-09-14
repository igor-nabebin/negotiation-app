import { shallowMount } from "@vue/test-utils";
import App from "@/App";

import * as weatherAPI from "@/api/weather";

weatherAPI.getWeatherByCityName = jest.fn().mockImplementation(() => ({
  main: {
    temp: 23.6
  }
}));

const mocks = {
  $store: {
    dispatch: jest.fn()
  }
};

const factory = (
  { minSalary, maxSalary } = {
    minSalary: null,
    maxSalary: null
  }
) =>
  shallowMount(App, {
    mocks,
    stubs: ["router-view"],
    computed: {
      minSalary: () => minSalary,
      maxSalary: () => maxSalary
    }
  });

const findElByTestId = (wrapper, testId) =>
  wrapper.find(`[data-testid="${testId}"]`);

describe("App.vue", () => {
  beforeEach(() => {
    mocks.$store.dispatch.mockReset();
    weatherAPI.getWeatherByCityName.mockClear();
  });
  it("renders modal if minSalary and maxSalary are provided", () => {
    const wrapper = factory({ minSalary: 10, maxSalary: 100 });
    const modalComponentStub = findElByTestId(wrapper, "modal-component");
    expect(modalComponentStub.element).toBeTruthy();
    expect(modalComponentStub.props().minSalary).toBe(10);
    expect(modalComponentStub.props().maxSalary).toBe(100);
  });
  it("forwards resetSalaries event from modal to store", () => {
    const wrapper = factory({ minSalary: 10, maxSalary: 100 });
    const modalComponentStub = findElByTestId(wrapper, "modal-component");
    modalComponentStub.vm.$emit("resetSalaries");
    expect(mocks.$store.dispatch).toHaveBeenCalledTimes(1);
    expect(mocks.$store.dispatch).toHaveBeenCalledWith("resetSalaries");
  });
  it("calls weather API before modal render", () => {
    //eslint-disable-next-line
    let wrapper = factory();
    expect(weatherAPI.getWeatherByCityName).toHaveBeenCalledTimes(0);
    wrapper = factory({ minSalary: 10, maxSalary: 100 });
    expect(weatherAPI.getWeatherByCityName).toHaveBeenCalledTimes(1);
    expect(weatherAPI.getWeatherByCityName).toHaveBeenCalledWith("London");
  });
});
