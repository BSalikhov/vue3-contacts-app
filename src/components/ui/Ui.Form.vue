<template>
  <Form @submit="$emit('submit')">
    <slot name="default"></slot>
  </Form>
</template>

<script>
import { Form } from "vee-validate";

export default {
  name: "Form",

  components: {
    Form,
  },
};
</script>
