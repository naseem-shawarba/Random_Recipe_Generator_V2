<template>
      <v-alert colored-border type="error" elevation="2">
        {{ message}}
      </v-alert>
</template>
<script>
export default {
	props:['message']

}
</script>