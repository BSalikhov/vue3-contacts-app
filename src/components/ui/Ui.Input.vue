<template>
  <div>
    <label
      v-if="label"
      :for="name"
      class="block text-sm font-medium text-gray-700 mb-1"
      >{{ label }}</label
    >
    <Field
      v-model="value"
      :id="name"
      :name="name"
      :type="type"
      :rules="rules"
      class="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
    />
    <ErrorMessage class="text-red-500 text-sm" :name="name" />
  </div>
</template>

<script>
import { Field, ErrorMessage } from "vee-validate";

export default {
  name: "Input",

  props: {
    modelValue: {
      type: [String, Number, Object, Boolean],
      required: true,
    },
    label: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    rules: {
      type: [Object, String],
      default: () => {},
    },
  },

  emits: ["update:modelValue"],

  components: {
    Field,
    ErrorMessage,
  },

  computed: {
    value: {
      get() {
        return this.modelValue;
      },

      set(value) {
        this.$emit("update:modelValue", value);
      },
    },
  },
};
</script>
