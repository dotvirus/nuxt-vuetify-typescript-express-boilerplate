import {
  VuexModule,
  mutation,
  action,
  getter,
  Module,
} from 'vuex-class-component';

@Module({ namespacedPath: 'example/', target: 'nuxt' })
export class ExampleStore extends VuexModule {
  counter = 0;

  @mutation increment() {
    this.counter++;
  }
}

export default ExampleStore.ExtractVuexModule(ExampleStore);
