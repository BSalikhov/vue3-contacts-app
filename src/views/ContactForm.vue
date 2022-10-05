<template>
  <div>
    <h1 class="text-2xl mb-6">{{ isEditForm ? "Edit" : "Add" }} Contact</h1>

    <Form
      v-slot="{ meta }"
      class="space-y-6"
      @submit="submitForm"
      :validation-schema="schema"
    >
      <UiInput v-model="form.name" label="Name" name="name" type="text" />
      <UiInput
        v-model="form.phone"
        label="Phone"
        name="phone"
        type="text"
        v-maska="'+(###) ## ###-##-##'"
      />
      <UiInput v-model="form.email" label="Email" name="email" type="text" />

      <div class="mt-4">
        <label for="categories">Categories</label>
        <Multiselect
          v-model="form.category"
          :options="categories"
          value-prop="title"
          name="multiselect"
          label="title"
          :searchable="true"
          :minChars="1"
          :createTag="true"
          :append-new-tag="false"
          @tag="onAddCategory"
          :add-option-on="['enter']"
          class="mt-2"
        ></Multiselect>
      </div>

      <UiButton
        class="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
        type="submit"
        :disabled="!meta.valid"
      >
        {{ isEditForm ? "Save" : "Add" }}
      </UiButton>
    </Form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { Form, defineRule } from "vee-validate";
import { required, email, min } from "@vee-validate/rules";
import Multiselect from "@vueform/multiselect";
import "@vueform/multiselect/themes/default.css";

import UiButton from "../components/ui/Ui.Button.vue";
import UiInput from "../components/ui/Ui.Input.vue";

defineRule("required", required);
defineRule("email", email);
defineRule("min", min);

const schema = {
  name: "required",
  phone: "required|min:19",
  email: "email",
};

export default {
  name: "ContactForm",

  components: {
    UiButton,
    Form,
    UiInput,
    Multiselect,
  },

  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        category: "",
      },
      schema,

      options: [
        {
          value: 0,
          label: "bir",
        },
        {
          value: 1,
          label: "ikki",
        },
        {
          value: 2,
          label: "uch",
        },
      ],
    };
  },

  computed: {
    ...mapState({
      contacts: (state) => state.contacts,
      categories: (state) => state.categories,
    }),

    isEditForm() {
      return this.$route.name === "edit-contact";
    },
  },

  methods: {
    submitForm() {
      if (this.isEditForm) {
        this.editContact(this.form);
        this.$router.push(`/`);
      } else {
        this.addContact(this.form);
        this.$router.push("/");
      }
    },

    ...mapActions(["addContact", "editContact", "addCategory"]),

    onAddCategory(category) {
      this.addCategory(category);
      this.form.category = category;
    },
  },

  created() {
    if (this.$route.params.id) {
      this.form = this.contacts.find(
        (item) => item.id === +this.$route.params.id
      );
    }
  },
};
</script>
