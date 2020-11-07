<template>
  <div class="navbar">
    <div class="nav-left">
      <slot name="left"></slot>
    </div>
    <div class="nav-center">
      <slot name="center"></slot>
    </div>
    <div class="nav-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
.navbar{
  display: flex;
  align-items: center;
  height: 7vh;
  justify-content:space-around;
}
</style>