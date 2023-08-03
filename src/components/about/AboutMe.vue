<script>
export default {
  setup() {
    return {
    bios: [
  {
    id: 1,
    bio: `With a strong foundation in Python, I specialize in crafting efficient solutions through frameworks like Django, FastAPI, and Django REST Framework. My proven track record in delivering high-quality outcomes aligns perfectly with business requirements. My proficiency extends to databases such as PostgreSQL and MySQL, version control systems like Git, and project management tools such as Jira. I take pride in my reliability, responsiveness, and steadfast commitment to quality.`,
  },
  {
    id: 2,
    bio: `My skill set encompasses a wide array of tools and technologies, including but not limited to: Python, Django, Django REST, FastAPI, Flask, Numpy, Pandas, Matplotlib, Seaborn, Plotly, PostgreSQL, MySQL, MongoDB, Redis, Docker, Docker Compose, nginx, Apache, AWS, Digital Ocean, Git, Gitlab, GitHub, Trello, Jira, Notion, RabbitMQ, Celery, Let's Encrypt, and Elastic Search.`,
  },
  {
    id: 3,
    bio: `I have extensive knowledge and hands-on experience with key technologies such as PostgreSQL and MySQL, version control tools like Git, and project management software like Jira. My capabilities in delivering efficient, high-quality outcomes are well-proven and align with modern industry standards.`,
  },
  {
    id: 4,
    bio: `As a professional who values integrity and quality, I am committed to delivering results that meet and exceed expectations. My responsiveness and reliability make me a trusted choice for any backend engineering requirements. Please feel free to contact me for any inquiries or further information.`,
  },
],

    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-16">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-3 sm:mb-0 mt-16">
      <img src="@/assets/images/profile.jpg" class="rounded-3xl w-64" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
      <h1 class="text-2xl font-medium mt-1 text-ternary-dark dark:text-ternary-light">
        About Me
      </h1>

      <hr class="my-2 w-full lg:w-1/6" />

      <p
        v-for="bio in bios"
        :key="bio.id"
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
      >
        {{ bio.bio }}
      </p>
    </div>
  </div>
</template>