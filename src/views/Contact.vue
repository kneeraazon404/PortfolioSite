<template>
	<div class="container mx-auto sm:flex py-5 sm:py-10 mt-10 sm:mt-20">
		<!-- Contact form start -->
		<ContactForm />
		<!-- Contact form end -->

		<!-- Contact details start -->
		<ContactDetails :contacts="contacts" />
		<!-- Contact details end -->
	</div>
</template>

<script>
import feather from 'feather-icons';
import ContactForm from '@/components/ContactForm.vue';
import ContactDetails from '@/components/ContactDetails.vue';

export default {
	components: {
		ContactForm,
		ContactDetails,
	},
	data: () => {
		return {
			contacts: [
				{
					id: 1,
					name: 'Mulpani, Kathmandu, Nepal',
					icon: 'map-pin',
				},
				{
					id: 2,
					name: 'kneeraazon@gmail.com',
					icon: 'mail',
				},
				{
					id: 3,
					name: '+977-9844395719',
					icon: 'phone',
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
	methods: {},
};
</script>
