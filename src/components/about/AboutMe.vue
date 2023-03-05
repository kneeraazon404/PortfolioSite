<script>
export default {
  setup() {
    return {
      bios: [
        {
          id: 1,
          bio: `As an experienced Python developer, I excel at problem-solving and creating efficient solutions using Django, FastAPI, and Django REST Framework. With a proven track record of delivering high-quality results that meet business needs, I am confident in my ability to deliver exceptional value. I am proficient in a variety of tools and technologies, including databases such as PostgreSQL and MySQL, version control tools like Git, and project management tools like Jira. My reliability, responsiveness, and dedication to delivering quality results on time and within budget make me the perfect choice for your backend engineering needs. Don't hesitate to reach out - let's build something great together!`,
        },
        {
          id: 2,
          bio: `I am proficient in the following tools and technologies: 
                Python, Django, Django REST, FastAPI, Flask, Numpy, Pandas, Matplotlib, Seaborn, Plotly, PostgreSQL, MySQL, MongoDB, Redis, Docker, Docker Compose, nginx, Apache, AWS, Digital Ocean, Git, Gitlab, GitHub, Trello, Jira, Notion, RabbitMQ, Celery, Let's Encrypt, Elastic Search and more ...`,
        },

        {
          id: 3,
          bio: `In addition to these key technologies, I am familiar with database technologies such as PostgreSQL and MySQL, version control tools like Git, and project management tools like Jira. I am confident in my ability to deliver high-quality and efficient results using these tools and technologies.`,
        },
        {
          id: 4,
          bio: ` I am a reliable and responsive professional who is dedicated to delivering high-quality results on time and within budget. I am always open to interesting work and respond to all messages within 24 hours. If you are looking for a skilled and experienced backend engineer, please don't hesitate to reach out. Let's build something great together!`,
        },
      ],
    };
  },
};
</script>

<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-16">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-3 sm:mb-0">
      <img src="@/assets/images/profile.png" class="rounded-xl w-64" alt="" />
    </div>

    <!-- About details -->
    <div class="w-full sm:w-3/4 text-left">
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
