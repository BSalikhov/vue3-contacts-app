<template>
  <router-link
    class="inline-block items-center text-center rounded-md whitespace-nowrap border border-transparent px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
  >
    <slot></slot>
  </router-link>
</template>

<script>
export default {
  name: "UiRouterLink",
};
</script>
