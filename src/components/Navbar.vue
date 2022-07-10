<script setup>
import { useUIStore } from "../stores/uiStore";

const uiStore = useUIStore();

function toggleDarkMode() {
  document.getElementsByTagName("html")[0].classList.toggle("dark");
  uiStore.darkMode = !uiStore.darkMode;
}
</script>

<template>
  <nav class="flex items-center justify-between max-w-4xl p-4 mx-auto">
    <a
      class="
        inline-flex
        items-center
        justify-center
        min-w-10
        max-h-10
        p-2
        font-medium
        rounded-lg
      "
      href="/"
    >
      🎨 PaintDex
    </a>

    <ul class="flex items-center space-x-2 text-sm font-medium">
      <li>
        <Transition name="fade">
          <a
            class="inline-flex px-3 py-2 rounded-lg"
            href="#"
            @click="toggleDarkMode()"
          >
            <!-- TODO: FIX SWITCHIGN BETWEEN THESE WITH IF STATMENTS AND STATE MANAGMENT -->
            <span class="flex items-center" v-if="uiStore.darkMode">
              <vue-feather class="ml-1.5 w-4 h-4" type="moon"></vue-feather
            ></span>
            <span class="flex items-center" v-else-if="!uiStore.darkMode">
              <vue-feather class="ml-1.5 w-4 h-4" type="sun"></vue-feather
            ></span>
          </a>
        </Transition>
      </li>
      <li>
        <a
          class="inline-flex items-center px-3 py-2 rounded-lg"
          href="https://omarusman.me"
          target="_blank"
        >
          <vue-feather class="ml-1.5 w-4 h-4" type="globe"></vue-feather>
        </a>
      </li>
      <li>
        <a
          class="inline-flex items-center px-3 py-2 rounded-lg"
          href=""
          target="_blank"
        >
          <vue-feather class="ml-1.5 w-4 h-4" type="github"></vue-feather>
        </a>
      </li>
    </ul>
  </nav>
</template>

