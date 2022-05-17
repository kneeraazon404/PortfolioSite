<script>
export default {
  data: () => {
    return {
      copyrightDate: new Date().getFullYear(),
      projectName: "",
      author: "kneeraazon",
    };
  },
};
</script>

<template>
  <div class="flex justify-center items-center text-center">
    <div
      class="
        font-general-regular
        text-lg text-ternary-dark
        dark:text-ternary-light
      "
    >
      &copy; {{ copyrightDate }} Copyright | All rights
      <a
        href="https://github.com/kneeraazon01"
        target="__blank"
        class="
          font-general-medium
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
      >
        {{ projectName }}
      </a>
      , Developed by
      <a
        href="https://nirajankarki.com.np"
        target="__blank"
        class="
          font-general-medium
          text-secondary-dark
          dark:text-secondary-light
          hover:underline hover:text-indigo-600
          dark:hover:text-indigo-300
          duration-500
        "
        >{{ author }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
