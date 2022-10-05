<template>
  <button
    class="inline-block w-full rounded-md border border-transparent px-4 py-2 text-sm font-medium text-center text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4"
    :class="{ 'opacity-50 cursor-not-allowed': disabled }"
    :disabled="disabled"
    :type="type"
    @click="$emit('click')"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "UiButton",

  props: {
    disabled: {
      type: Boolean,
      default: () => false,
    },

    type: {
      type: String,
      default: () => "button",
    },
  },
};
</script>
