<template>
  <input
    v-model="value"
    @input="$emit('input', $event.target.value)"
    type="text"
    name="search"
    id="search"
    placeholder="Search by name, email, tag of contact"
    class="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
  />
</template>

<script>
export default {
  name: "UiSearchBar",

  props: {
    value: String,
  },
};
</script>
