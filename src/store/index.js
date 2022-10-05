import { createStore } from "vuex";

const store = createStore({
  state: {
    contacts: (localStorage.getItem("contacts") &&
      JSON.parse(localStorage.getItem("contacts"))) || [
      {
        //added default initial fake data just to show how everything looks
        id: 0,
        name: "Nick Dawson",
        email: "nick@gmail.com",
        phone: 998227773322,
      },
      {
        id: 1,
        name: "John Robson",
        email: "rob@gmail.com",
        phone: 998227774411,
      },
      {
        id: 2,
        name: "David Stones",
        email: "david@gmail.com",
        phone: 998221110022,
      },
    ],
    categories: (localStorage.getItem("categories") &&
      JSON.parse(localStorage.getItem("categories"))) || [
      {
        id: 0,
        title: "family",
      },
      {
        id: 1,
        title: "friend",
      },
      {
        id: 2,
        title: "work",
      },
    ],
  },

  mutations: {
    setContacts(state, contacts) {
      state.contacts = contacts;
    },

    setCategories(state, categories) {
      state.categories = categories;
    },
  },

  actions: {
    addContact({ commit }, contact) {
      const contacts = this.state.contacts;
      const newContact = {
        id: contacts.length && contacts[contacts.length - 1].id++ | 0,
        ...contact,
      };

      contacts.push(newContact);

      localStorage.setItem("contacts", JSON.stringify(contacts));
      commit("setContacts", contacts);
    },

    editContact({ commit }, contact) {
      const contacts = this.state.contacts;

      const updatedContacts = contacts.map((item) =>
        item.id === contact.id ? contact : item
      );

      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      commit("setContacts", updatedContacts);
    },

    removeContact({ commit }, id) {
      const updatedContacts = this.state.contacts.filter(
        (item) => item.id !== id
      );

      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      commit("setContacts", updatedContacts);
    },

    addCategory({ commit }, category) {
      const categories = this.state.categories;
      const newCategory = {
        id: categories.length && categories[categories.length - 1].id++ | 0,
        title: category,
      };
      categories.push(newCategory);

      localStorage.setItem("categories", JSON.stringify(categories));
      commit("setCategories", categories);
    },
  },
});

export default store;
