<script setup>
import VueFeather from "vue-feather";

function toTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
</script>

<template>
  <a
    class="
      inline-flex
      items-center
      px-3
      py-2
      rounded-lg
      fixed
      bottom-12
      right-12
    "
    href="#"
    @click="toTop()"
  >
    <vue-feather type="arrow-up"></vue-feather>
  </a>
</template>