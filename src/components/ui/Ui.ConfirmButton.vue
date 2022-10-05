<template>
  <div class="relative w-full">
    <div
      v-if="showModal"
      class="bg-white shadow-md p-4 absolute -top-28 left-1/2 -translate-x-1/2"
    >
      <h3 class="text-lg">{{ title }}</h3>
      <div class="flex space-x-2">
        <UiButton @click="showModal = false" class="bg-indigo-500">No</UiButton>
        <UiButton @click="confirm" class="border-indigo-500 text-indigo-500"
          >Yes</UiButton
        >
      </div>
    </div>
    <UiButton
      @click="showModal = true"
      class="border-2 border-red-500 text-red-500 w-full"
      >Delete</UiButton
    >
  </div>
</template>

<script>
import UiButton from "./Ui.Button.vue";

export default {
  name: "Ui.ConfirmButton",

  components: {
    UiButton,
  },

  props: {
    title: {
      type: String,
      default: "Are you sure?",
    },
  },

  data() {
    return {
      showModal: false,
    };
  },

  methods: {
    confirm() {
      this.showModal = false;
      this.$emit("confirm");
    },
  },
};
</script>
