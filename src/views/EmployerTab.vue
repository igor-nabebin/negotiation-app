<template>
  <div class="employer-tab">
    <CustomInput
      data-testid="input-component"
      v-model="maxSalaryHandler"
      label="Enter your maximum offer (annual, €)"
    />
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput";

export default {
  name: "EmployerTab",
  components: { CustomInput },
  computed: {
    maxSalaryHandler: {
      get() {
        return this.$store.state.maxSalary;
      },
      set(value) {
        this.$store.commit("setMaxSalary", value);
      }
    }
  }
};
</script>
