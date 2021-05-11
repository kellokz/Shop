<template>
  <nav class="navbar navbar-expandd-lg bg-vue">
    <div class="container">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><a href="" class="nav-link"> Shop </a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
.navbar-nav {
  flex-direction: row;
}
a:hover {
  opacity: 0.3;
  transition: all 0.3s ease;
}
a {
  color: white;
}
</style>