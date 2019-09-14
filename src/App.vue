<template>
  <div id="app">
    <MainNavigation />
    <router-view class="tab-window" />
    <div v-if="isModalVisible" class="modal-container">
      <ComparisonResultModal
        data-testid="modal-component"
        :minSalary="minSalary"
        :maxSalary="maxSalary"
        :temperature="temperature"
        @resetSalaries="resetSalaries"
      />
    </div>
  </div>
</template>

<script>
import ComparisonResultModal from "@/components/ComparisonResultModal";
import MainNavigation from "@/components/MainNavigation";
import { mapState } from "vuex";
import { getWeatherByCityName } from "@/api/weather";

export default {
  name: "NegotiationApp",
  components: { MainNavigation, ComparisonResultModal },
  data: () => ({
    temperature: null
  }),
  watch: {
    isModalVisible: {
      async handler(value) {
        if (value) {
          const weatherObj = await getWeatherByCityName("London");
          this.temperature = weatherObj.main.temp;
        }
      },
      immediate: true
    }
  },
  computed: {
    ...mapState(["minSalary", "maxSalary"]),
    isModalVisible() {
      return this.minSalary !== null && this.maxSalary !== null;
    }
  },
  methods: {
    resetSalaries() {
      this.$store.dispatch("resetSalaries");
    }
  }
};
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.tab-window {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-container {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  & > * {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
