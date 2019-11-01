  <template>
  <div>
    <v-row>
      <v-col col="6">
        <WelcomeCard :title="hello" />
      </v-col>
      <v-col col="6">
        <WelcomeCard :title="'Another card'" />
      </v-col>
    </v-row>

    <div class="py-5 text-center">
      <p class="display-4">Light 96sp</p>
      <p class="display-3">Light 60sp</p>
      <p class="display-2">Regular 48sp</p>
      <p class="display-1">Regular 34sp</p>
      <p class="headline">Regular 24sp</p>
      <p class="title">Medium 20sp</p>
      <p class="subtitle-1">Regular 16sp</p>
      <p class="subtitle-2">Medium 14sp</p>
      <p class="body-1">Regular 16sp</p>
      <p class="body-2">Regular 14sp</p>
      <p class="caption">Regular 12sp</p>
      <p class="overline">Regular 10sp</p>
    </div>

    <div class="text-center mt-3">
      <v-btn color="primary" :loading="fetchLoader" @click="fetchMore" class="mb-3">Fetch more</v-btn>
      <p v-for="(item, i) in list" :key="i">{{ i }}. {{ item }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "nuxt-property-decorator";
import { ExampleStore } from "~/store/example";
import { INuxtContext } from "nuxt";
import Axios from "axios";
import WelcomeCard from "~/components/welcome_card.vue";

@Component({
  components: {
    WelcomeCard
  }
})
export default class App extends Vue {
  list = [] as string[];
  fetchLoader = false;

  async fetchMore() {
    this.fetchLoader = true;
    try {
      // TODO: this.$axios
      const result = (await Axios.get("http://localhost:3000/api")).data;
      setTimeout(() => {
        this.list.push(result);
        this.fetchLoader = false;
      }, 1000);
    } catch (err) {
      this.fetchLoader = false;
    }
  }

  async asyncData(context: INuxtContext) {
    return {
      hello: (await context.$axios.get("http://localhost:3000/api")).data
    };
  }
}
</script>
