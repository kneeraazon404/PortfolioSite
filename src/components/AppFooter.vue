<template>
	<div class="container mx-auto ">
		<div
			class="innercontent pt-20 sm:pt-30 pb-8 mt-20 border-t-2 border-primary-light dark:border-secondary-dark"
		>
			<!-- Footer social links start -->
			<div
				class="flex flex-col justify-center items-center mb-12 sm:mb-28"
			>
				<p
					class="text-3xl sm:text-4xl font-normal text-primary-dark dark:text-primary-light mb-5"
				>
					Get in touch  
				</p>
				<ul class="flex gap-4 sm:gap-8">
					<a
						v-for="social in socials"
						:key="social.id"
						:href="social.url"
						target="__blank"
						class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm∫ p-4"
					>
						<i
							:data-feather="social.icon"
							class="w-6 sm:w-8 h-6 sm:h-8"
						></i>
					</a>
				</ul>
			</div>
			<!-- Footer social links end -->

			<!-- Footer copyright start -->
			<div class="flex justify-center items-center text-center">
				<div class="text-lg text-ternary-dark dark:text-ternary-light">
					&copy; Copyright {{ copyrightDate }}| Nirajan Karki
				
				
				</div>
			</div>
			<!-- Footer copyright end -->
		</div>
	</div>
</template>

<script>
import feather from 'feather-icons';
export default {
	data() {
		return {
			copyrightDate: new Date().getFullYear(),
			socials: [
				{
					id: 1,
					name: 'GitHub',
					icon: 'github',
					url: 'https://github.com/kneeraazon01',
				},
				{
					id: 2,
					name: 'Twitter',
					icon: 'twitter',
					url: 'https://twitter.com/kneeraazon',
				},
				{
					id: 3,
					name: 'facebook',
					icon: 'facebook',
					url: 'https://facebook.com/kneeraazon',
				},
				{
					id: 4,
					name: 'linkedin',
					icon: 'linkedin',
					url: 'https://www.linkedin.com/in/kneeraazon/',
				},
			],
		};
	},
	mounted() {
		feather.replace();
	},
	updated() {
		feather.replace();
	},
};
</script>

<style scoped></style>
