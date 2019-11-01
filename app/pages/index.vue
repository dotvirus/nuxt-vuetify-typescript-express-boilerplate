  <template>
  <div>
    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Hello World</div>
          <v-list-item-title class="headline mb-1">{{ hello }}</v-list-item-title>
          <v-list-item-subtitle>This is an example card</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
      </v-list-item>

      <v-card-text>Counter (in Vuex store): {{ exampleStore.counter }}</v-card-text>

      <v-card-actions>
        <v-btn text @click="exampleStore.increment">Increment</v-btn>
      </v-card-actions>
    </v-card>

    <div class="text-center mt-3">
      <v-btn :loading="fetchLoader" @click="fetchMore" class="mb-3">Fetch more</v-btn>
      <p v-for="(item, i) in list" :key="i">{{ i }}. {{ item }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { ExampleStore } from '~/store/example';
import { INuxtContext } from 'nuxt';
import Axios from 'axios';

@Component({})
export default class App extends Vue {
  exampleStore = ExampleStore.CreateProxy(this.$store, ExampleStore);
  hello = '';

  list = [] as string[];
  fetchLoader = false;

  async fetchMore() {
    this.fetchLoader = true;
    try {
      // TODO: this.$axios
      const result = (await Axios.get('http://localhost:3000/api')).data;
      setTimeout(() => {
        this.list.push(result);
        this.fetchLoader = false;
      }, 2000);
    } catch (err) {
      this.fetchLoader = false;
    }
  }

  async asyncData(context: INuxtContext) {
    const data = {} as any;

    data.hello = (await context.$axios.get('http://localhost:3000/api')).data;

    return data;
  }
}
</script>
