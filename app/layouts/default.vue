<template>
  <v-app dark>
    <v-app-bar elevate-on-scroll app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title v-text="title" />
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Application</v-list-item-title>
          <v-list-item-subtitle>Subtitle</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";

@Component({})
export default class App extends Vue {
  drawer = false;
  title = "Nuxt + Vuetify + TS";

  items = [
    { title: "Dashboard", icon: "mdi-view-dashboard" },
    { title: "Photos", icon: "mdi-image" },
    { title: "About", icon: "mdi-help-box" }
  ];
}
</script>
