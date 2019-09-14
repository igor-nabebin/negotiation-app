<template>
  <nav class="nav-tabs">
    <router-link class="tab" :to="{ name: 'employer' }"
      >Employer tab</router-link
    >
    |
    <router-link class="tab" :to="{ name: 'employee' }"
      >Employee tab</router-link
    >
  </nav>
</template>
<style lang="scss" scoped>
.nav-tabs {
  padding: 30px;
  .tab {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
