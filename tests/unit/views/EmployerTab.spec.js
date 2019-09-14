import { shallowMount } from "@vue/test-utils";
import EmployerTab from "@/views/EmployerTab";

const mocks = {
  $store: {
    state: {
      maxSalary: 42
    },
    commit: jest.fn()
  }
};

const factory = () =>
  shallowMount(EmployerTab, {
    mocks
  });

const findElByTestId = (wrapper, testId) =>
  wrapper.find(`[data-testid="${testId}"]`);

describe("EmployerTab.vue", () => {
  beforeEach(() => {
    mocks.$store.commit.mockReset();
  });
  it("renders state.maxSalary", () => {
    const wrapper = factory();
    const inputComponentStub = findElByTestId(wrapper, "input-component");
    expect(inputComponentStub.props().value).toBe(42);
  });
  it("emits state mutation on handler change", () => {
    const wrapper = factory();
    const inputComponentStub = findElByTestId(wrapper, "input-component");
    inputComponentStub.vm.$emit("input", 14);
    expect(mocks.$store.commit).toHaveBeenCalledTimes(1);
    expect(mocks.$store.commit).toHaveBeenCalledWith("setMaxSalary", 14);
  });
});
