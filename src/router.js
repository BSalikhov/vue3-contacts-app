import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Contacts from "./views/Contacts.vue";
import ContactDetails from "./views/ContactDetails.vue";
import ContactForm from "./views/ContactForm.vue";

const routes = [
  {
    path: "/",
    name: "main",
    component: App,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: Contacts,
      },
      {
        path: "/add-contact",
        name: "add-contact",
        component: ContactForm,
      },
      {
        path: "/:id",
        name: "details",
        component: ContactDetails,
      },
      {
        path: "/:id/edit-contact",
        name: "edit-contact",
        component: ContactForm,
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
