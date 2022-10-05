<template>
  <div>
    <div
      class="w-16 h-16 md:h-20 md:w-20 text-lg md:text-xl font-medium text-gray-700 bg-gray-200 flex items-center justify-center rounded-full mx-auto mb-6"
    >
      {{ contact.name && contact.name[0] }}
    </div>
    <dl class="relative">
      <div class="mb-8 md:mb-6">
        <dt
          class="text-sm md:text-base font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
        >
          Name
        </dt>
        <dd class="mt-1 text-sm md:text-base text-gray-900 sm:col-span-2">
          {{ contact.name }}
        </dd>
      </div>

      <div class="mb-8 md:mb-6">
        <dt
          class="text-sm md:text-base font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
        >
          Phone
        </dt>
        <dd class="mt-1 text-sm md:text-base text-gray-900 sm:col-span-2">
          {{ contact.phone }}
        </dd>
      </div>
      <div>
        <dt
          class="text-sm md:text-base font-medium text-gray-500 sm:w-40 sm:flex-shrink-0"
        >
          Email
        </dt>
        <dd class="mt-1 text-sm md:text-base text-gray-900 sm:col-span-2">
          {{ contact.email }}
        </dd>
      </div>
      <span
        v-if="contact.category"
        class="inline-flex absolute top-0 right-0 items-center rounded-full bg-blue-100 px-3 py-1 text-xs md:text-sm font-medium text-blue-800"
        >{{ contact.category }}</span
      >
    </dl>

    <div class="flex space-x-4">
      <UiConfirmButton @confirm="remove"> </UiConfirmButton>
      <UiRouterLink
        :to="`${contact.id}/edit-contact`"
        class="w-full bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 mt-4"
      >
        Edit
      </UiRouterLink>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

import UiRouterLink from "../components/ui/Ui.RouterLink.vue";
import UiButton from "../components/ui/Ui.Button.vue";
import UiConfirmButton from "../components/ui/Ui.ConfirmButton.vue";

export default {
  name: "ContactDetails",

  components: {
    UiRouterLink,
    UiButton,
    UiConfirmButton,
  },

  data() {
    return {
      contact: {},
      category: "",
    };
  },

  computed: {
    ...mapState({
      contacts: (state) => state.contacts,
      categories: (state) => state.categories,
    }),
  },

  mounted() {
    this.contact = this.contacts.find(
      (contact) => contact.id === +this.$route.params.id
    );
  },

  methods: {
    ...mapActions({
      removeContact: "removeContact",
    }),

    remove() {
      this.removeContact(this.contact.id);
      this.$router.push("/");
    },
  },
};
</script>
