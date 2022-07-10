<script setup>
const props = defineProps(["name", "color"]);

function copyColorCode() {
  navigator.clipboard.writeText(props.color);
}
</script>

<template>
  <a
    href="#"
    class="
      relative
      block
      overflow-hidden
      rounded-xl
    "
    @click="copyColorCode()"
  >
    <div
      class="relative p-8 pt-40 text-neutral-100 bg-opacity-40"
      v-bind:style="{ backgroundColor: props.color }"
    >
      <h5 class="text-2xl font-bold">{{ color }}</h5>
      <p class="text-sm">{{ name }}</p>
    </div>
  </a>
</template>
