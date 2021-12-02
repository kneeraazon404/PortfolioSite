<template>
	<div class="container mx-auto">
		<!-- Projects start -->
		<ServicesGrid />
		<!-- ProjectsGrid end -->
	</div>
</template>

<script>
import ServicesGrid from '../components/ServicesGrid.vue';

export default {
	name: 'Projects',
	components: {
		ServicesGrid,
	},
};
</script>

<style scoped></style>
