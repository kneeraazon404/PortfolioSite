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
    <div class="font-general-regular text-lg text-ternary-dark dark:text-ternary-light">
     All Rights Reserved | &copy; {{ copyrightDate }} |
      <a
        href="https://github.com/realstoman/vuejs-tailwindcss-portfolio"
        target="__blank"
        class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
      >
        
      </a>
     
      <a
        href="https://twitter.com/kneeraazon"
        target="__blank"
        class="text-secondary-dark dark:text-secondary-light font-bold hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
        >Nirajan Karki</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
