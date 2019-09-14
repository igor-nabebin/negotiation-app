<template>
  <div class="modal">
    <h2 class="title">{{ modalTitle }}</h2>
    <div class="max-info" data-testid="max-info">
      Maximum offer was: {{ maxSalary }}
    </div>
    <div class="min-info" data-testid="min-info">
      Minimum expected salary was: {{ minSalary }}
    </div>
    <div class="weather" data-testid="weather" v-if="temperature !== null">
      Current London temperature is {{ temperature }}°C
    </div>
    <button
      @click="resetSalaries"
      data-testid="reset-button"
      class="start-again"
    >
      Start again
    </button>
  </div>
</template>

<script>
export default {
  name: "ComparisonResultModal",
  props: {
    minSalary: {
      required: true,
      validator: prop => typeof prop === "number" || prop === null
    },
    maxSalary: {
      required: true,
      validator: prop => typeof prop === "number" || prop === null
    },
    temperature: {
      required: true,
      validator: prop => typeof prop === "number" || prop === null
    }
  },
  computed: {
    modalTitle() {
      return this.minSalary <= this.maxSalary ? "Success!" : "Failure!";
    }
  },
  methods: {
    resetSalaries() {
      this.$emit("resetSalaries");
    }
  }
};
</script>

<style lang="scss" scoped>
.modal {
  padding: 40px;
  border: 2px solid #000;
  background-color: #fff;
}
.start-again {
  margin-top: 20px;
  font-size: 21px;
  padding: 5px 20px;
}
</style>
