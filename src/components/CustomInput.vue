<template>
  <label class="input-wrapper">
    <span v-if="label" data-testid="label" class="label-text">{{ label }}</span>
    <input
      class="input"
      data-testid="input"
      type="number"
      min="0"
      v-model.lazy="inputHandler"
    />
  </label>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    value: {
      required: true,
      validator: prop => typeof prop === "number" || prop === null
    },
    label: {
      type: String
    }
  },
  computed: {
    inputHandler: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", Number(value));
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.input {
  height: 40px;
  font-size: 21px;
  padding: 0 10px;
  border-radius: 6px;
  box-shadow: none;
  outline: none;
  border: 1px solid #bbb;
}
.label-text {
  display: block;
  margin-bottom: 5px;
}
</style>
