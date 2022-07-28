
import { createApp } from 'vue';
import App from '@/App.vue';

const app = createApp(App);
app.mount('#app');

/*
// Placing it here or any other `.ts` file works
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
      $goto: any
  }
}
*/
