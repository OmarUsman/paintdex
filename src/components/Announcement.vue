<script setup>
const props = defineProps(["text", "textLink", "link"]);
</script>

<template>
  <div class="px-4 py-3 text-white bg-indigo-600">
    <p class="text-sm font-medium text-center">
      {{ props.text }}

      <a class="underline" target="_blank" :href=props.link>
        {{ props.textLink }}  
      </a>
    </p>
  </div>
</template>