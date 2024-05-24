<template>
    <v-expansion-panel>
      <v-expansion-panel-title>
        <span><v-icon class="mr-2">{{ icon }}</v-icon>{{ title }}</span>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        {{ value }}
      </v-expansion-panel-text>
    </v-expansion-panel>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      value: {
        type: String,
        required: true
      },
      icon: {
        type: String,
        required: true
      }
    }
  };
  </script>