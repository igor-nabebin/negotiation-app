import { shallowMount } from "@vue/test-utils";
import ComparisonResultModal from "@/components/ComparisonResultModal";

const factory = ({ minSalary = null, maxSalary = null, temperature = null }) =>
  shallowMount(ComparisonResultModal, {
    propsData: {
      minSalary,
      maxSalary,
      temperature
    }
  });

const findElByTestId = (wrapper, testId) =>
  wrapper.find(`[data-testid="${testId}"]`);

describe("ComparisonResultModal.vue", () => {
  it("renders props.minSalary", () => {
    const wrapper = factory({ minSalary: 42 });
    const minSalaryEl = findElByTestId(wrapper, "min-info");
    expect(minSalaryEl.text().includes(42)).toBe(true);
  });
  it("renders props.maxSalary", () => {
    const wrapper = factory({ maxSalary: 42 });
    const maxSalaryEl = findElByTestId(wrapper, "max-info");
    expect(maxSalaryEl.text().includes(42)).toBe(true);
  });
  it("renders props.temperature", () => {
    const wrapper = factory({ temperature: 42 });
    const temperatureEl = findElByTestId(wrapper, "weather");
    expect(temperatureEl.text().includes(42)).toBe(true);
  });
  it("emits resetSalaries event on button click", () => {
    const wrapper = factory({ minSalary: 42 });
    const buttonEl = findElByTestId(wrapper, "reset-button");
    buttonEl.trigger("click");
    expect(wrapper.emitted().resetSalaries).toBeTruthy();
    expect(wrapper.emitted().resetSalaries).toHaveLength(1);
  });
});
