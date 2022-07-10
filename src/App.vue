<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Card from "./components/Card.vue";
import ToTop from "./components/ToTop.vue";
import Announcement from "./components/Announcement.vue";

import colorCodes from "./assets/ral.json";

import { useUIStore } from "./stores/uiStore";

const uiStore = useUIStore();

function getColors(filters = null, index = 0, amount = 12) {
  return colorCodes.slice(index, index + amount);
}

window.onscroll = () => {
  let bottomOfWindow =
    document.documentElement.scrollTop + window.innerHeight ===
    document.documentElement.offsetHeight;

  if (bottomOfWindow) {
    uiStore.index += uiStore.amount;
    getColors(uiStore.filters, uiStore.index, uiStore.amount).forEach(
      (color) => {
        uiStore.colors.push(color);
      }
    );
  }
};

uiStore.colors = getColors(uiStore.filters, uiStore.index, uiStore.amount);
</script>

<template>
    <Announcement textLink="Support my work on github" link="https://github.com/OmarUsman" />
    <Navbar />
    <div
      class="
        flex
        items-center
        justify-between
        max-w-5xl
        py-4
        mx-auto
        grid grid-cols-1
        sm:grid-cols-3
        gap-4
      "
    >
      <!-- TODO FIX FILTERS -->
      <!-- <Filters class="col-span-3" /> -->
      <Card
        v-for="color in uiStore.colors"
        :key="color.label"
        :color="color.hex"
        :name="color.name"
      />
    </div>
    <ToTop />
    <Footer />
</template>
