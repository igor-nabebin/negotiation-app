import { shallowMount } from "@vue/test-utils";
import EmployeeTab from "@/views/EmployeeTab";

const mocks = {
  $store: {
    state: {
      minSalary: 42
    },
    commit: jest.fn()
  }
};

const factory = () =>
  shallowMount(EmployeeTab, {
    mocks
  });

const findElByTestId = (wrapper, testId) =>
  wrapper.find(`[data-testid="${testId}"]`);

describe("EmployeeTab.vue", () => {
  beforeEach(() => {
    mocks.$store.commit.mockReset();
  });
  it("renders state.minSalary", () => {
    const wrapper = factory();
    const inputComponentStub = findElByTestId(wrapper, "input-component");
    expect(inputComponentStub.props().value).toBe(42);
  });
  it("emits state mutation on handler change", () => {
    const wrapper = factory();
    const inputComponentStub = findElByTestId(wrapper, "input-component");
    inputComponentStub.vm.$emit("input", 14);
    expect(mocks.$store.commit).toHaveBeenCalledTimes(1);
    expect(mocks.$store.commit).toHaveBeenCalledWith("setMinSalary", 14);
  });
});
