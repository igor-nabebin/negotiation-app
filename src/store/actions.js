export default {
  resetSalaries({ commit }) {
    commit("setMinSalary", null);
    commit("setMaxSalary", null);
  }
};
