<template>
  <v-expansion-panel>
    <v-expansion-panel-title>
      <span><v-icon class="mr-2">mdi-video</v-icon>Cooking Video</span>
    </v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-container>
        <div style="position: relative; width: 100%; padding-bottom: 56.25%">
          <iframe style="
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
            " :src="recipeCookingVideoURLForIframe" frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </v-container>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<script>
export default {
  props: ['recipeCookingVideoURLForIframe'],
};
</script>
