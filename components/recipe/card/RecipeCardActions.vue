<template>
	<v-card-actions>
		<v-btn color="orange lighten-1" text @click="toggleShow">
			Explore
		</v-btn>
		<v-spacer></v-spacer>

		<v-btn icon @click="toggleShow">
			<v-icon>{{ show ? "mdi-chevron-up" : "mdi-chevron-down" }}</v-icon>
		</v-btn>
	</v-card-actions>
</template>

<script>
export default {
	props:['show'],
	methods:{
		toggleShow(){
			this.$emit('toggleShow')
		}
	}

}
</script>
