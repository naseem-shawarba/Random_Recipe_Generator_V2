<template>
  <v-layout>
    <LayoutNavBar />

    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <div>
      <v-footer :absolute="false" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
    </div>

  </v-layout>
</template>
