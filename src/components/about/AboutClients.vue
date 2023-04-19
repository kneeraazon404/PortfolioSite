<script>
import AboutClientSingle from "./AboutClientSingle.vue";

export default {
  components: {
    AboutClientSingle,
  },
  data: () => {
    return {
      clientsHeading: "Some of the technologies I work with",
      clients: [
        {
          id: 1,
          title: "django",
          img: require("@/assets/images/python.png"),
        },
        {
          id: 1,
          title: "django",
          img: require("@/assets/images/django.jpg"),
        },
        {
          id: 1,
          title: "python",
          img: require("@/assets/images/flask.png"),
        },
        {
          id: 1,
          title: "python",
          img: require("@/assets/images/api.png"),
        },
        {
          id: 1,
          title: "python",
          img: require("@/assets/images/sql.png"),
        },
        {
          id: 1,
          title: "python",
          img: require("@/assets/images/react.png"),
        },
        {
          id: 1,
          title: "python",
          img: require("@/assets/images/docker.jpg"),
        },
        {
          id: 1,
          title: "python",
          img: require("@/assets/images/nginx.png"),
        },
      ],
    };
  },
};
</script>

<template>
  <div class="mt-10 sm:mt-20">
    <p
      class="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light"
    >
      {{ clientsHeading }}
    </p>
    <div class="grid grid-cols-3 sm:grid-cols-4 mt-2 sm:mt-14 gap-8">
      <AboutClientSingle v-for="client in clients" :key="client.id" :client="client" />
    </div>
  </div>
</template>
