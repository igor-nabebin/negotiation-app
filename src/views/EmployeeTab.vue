<template>
  <div class="employee-tab">
    <CustomInput
      data-testid="input-component"
      v-model="minSalaryHandler"
      label="Enter your minimum annual salary expectations (€)"
    />
  </div>
</template>

<script>
import CustomInput from "@/components/CustomInput";

export default {
  name: "EmployeeTab",
  components: { CustomInput },
  computed: {
    minSalaryHandler: {
      get() {
        return this.$store.state.minSalary;
      },
      set(value) {
        this.$store.commit("setMinSalary", value);
      }
    }
  }
};
</script>
