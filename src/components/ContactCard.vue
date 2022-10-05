<template>
  <div class="w-full py-2 mt-2 border-b border-gray-300">
    <router-link :to="`/${contact.id}`">
      <h3 class="text-lg font-medium">{{ contact.name }}</h3>
      <p class="text-gray-600">{{ contact.phone }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "ContactCard",

  props: {
    contact: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
