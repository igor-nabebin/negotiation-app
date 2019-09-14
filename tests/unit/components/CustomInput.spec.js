import { shallowMount } from "@vue/test-utils";
import CustomInput from "@/components/CustomInput";

const factory = ({ value, label }) =>
  shallowMount(CustomInput, {
    propsData: {
      value,
      label
    }
  });

const findElByTestId = (wrapper, testId) =>
  wrapper.find(`[data-testid="${testId}"]`);

describe("CustomInput.vue", () => {
  it("renders props.value", () => {
    const wrapper = factory({
      value: 42
    });
    expect(findElByTestId(wrapper, "input").element.value).toBe("42");
  });
  it("renders props.label if exists", () => {
    const wrapper = factory({
      value: 42,
      label: "testLabel"
    });
    expect(findElByTestId(wrapper, "label").text()).toBe("testLabel");
  });
  it("emits value on change event", () => {
    const wrapper = factory({
      value: null
    });
    const input = findElByTestId(wrapper, "input");
    input.setValue(42);
    input.trigger("change");
    expect(wrapper.emitted().input).toBeTruthy();
    expect(wrapper.emitted().input).toHaveLength(1);
    expect(wrapper.emitted().input[0]).toEqual([42]);
  });
  it("does not emit anything on input event", () => {
    const wrapper = factory({
      value: null
    });
    const input = findElByTestId(wrapper, "input");
    input.setValue(42);
    input.trigger("input");
    expect(wrapper.emitted().input).toBeFalsy();
  });
});
