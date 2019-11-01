<template>
  <v-app dark>
    <v-app-bar app>
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({})
export default class App extends Vue {
  title = 'Nuxt +Vuetify + TS';
}
</script>
