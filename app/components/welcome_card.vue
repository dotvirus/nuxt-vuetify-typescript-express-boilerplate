<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">Example Card</div>
        <v-list-item-title class="headline mb-1">{{ title }}</v-list-item-title>
        <v-list-item-subtitle>This is an example card</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80">
        <v-img :src="src">
          <template v-slot:placeholder>
            <v-skeleton-loader tile loading type="card"></v-skeleton-loader>
          </template>
        </v-img>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-text>Counter (in Vuex store): {{ exampleStore.counter }}</v-card-text>

    <v-card-actions>
      <v-btn text color="primary" @click="exampleStore.increment">Increment</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "nuxt-property-decorator";
import { ExampleStore } from "~/store/example";
import Axios from "axios";

@Component({
  components: {}
})
export default class WelcomeCard extends Vue {
  @Prop({ default: "Default title" }) title!: string;

  exampleStore = ExampleStore.CreateProxy(this.$store, ExampleStore);

  src = `https://picsum.photos/seed/${Math.random().toString(16)}/200`;
}
</script>
<style lang="scss" scoped>
</style>