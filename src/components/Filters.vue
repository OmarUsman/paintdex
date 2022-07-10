<script setup></script>

<template>
  <details open class="overflow-hidden rounded w-full">
    <summary
      class="flex items-center justify-between px-5 py-3 bg-gray-100 lg:hidden"
    >
      <span class="text-sm font-medium"> Toggle Filters </span>

      <svg
        class="w-5 h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </summary>

    <form action="" class="lg:border-t-0">
      <fieldset>
        <div class="py-6 space-y-2">
          <div class="flex items-center">
            <input
              id="toy"
              type="checkbox"
              name="type[toy]"
              class="w-5 h-5 border-gray-300 rounded"
            />

            <label for="toy" class="ml-3 text-sm font-medium"> Toy </label>
          </div>

          <div class="flex justify-between py-3">
            <button
              name="reset"
              type="button"
              class="text-xs font-medium underline rounded"
            >
              Reset All
            </button>

            <button
              name="commit"
              type="button"
              class="
                px-5
                py-3
                text-xs
                font-medium
                bg-green-600
                rounded
              "
            >
              Apply Filters
            </button>
          </div>
        </div>
      </fieldset>
    </form>
  </details>
</template>