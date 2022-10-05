<template>
  <div>
    <div class="w-full flex items-center justify-between gap-4 mb-5">
      <h1 class="text-2xl font-medium">Contacts</h1>

      <UiRouterLink
        to="/add-contact"
        class="bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500"
      >
        Add contact
      </UiRouterLink>
    </div>

    <UiSearchBar v-model="search" />

    <div v-if="!contacts.length" class="w-full mt-6 text-center text-gray-500">
      No contacts, please add some:)
    </div>

    <div v-else>
      <ContactCard
        v-for="contact in filteredContacts"
        :key="contact.id"
        :contact="contact"
      >
      </ContactCard>
    </div>
  </div>
</template>

<script>
import ContactCard from "../components/ContactCard.vue";
import UiSearchBar from "../components/ui/Ui.SearchBar.vue";
import UiRouterLink from "../components/ui/Ui.RouterLink.vue";

import { mapState } from "vuex";

export default {
  components: {
    ContactCard,
    UiSearchBar,
    UiRouterLink,
  },

  data() {
    return {
      tags: [],
      search: "",
    };
  },

  computed: {
    ...mapState({
      contacts: (state) => state.contacts,
    }),

    filteredContacts() {
      return this.contacts.filter((contact) => {
        const stringObj = this.convertToString(contact);

        return Object.keys(stringObj).some((key) =>
          stringObj[key].includes(this.search.toLowerCase())
        );
      });
    },
  },

  methods: {
    convertToString(obj) {
      const { id, ...contactData } = obj;

      Object.keys(contactData).map((key) => {
        contactData[key] = String(contactData[key]).toLowerCase();
      });

      return contactData;
    },
  },
};
</script>
