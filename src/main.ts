import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import VOtpInput from "vue3-otp-input";
import MessagePopup from './components/MessagePopup.vue'
import BaseLayout from './layouts/base-layout.vue'


import { IonicVue, IonGrid, IonRow, IonCol, IonCard, IonCardContent } from '@ionic/vue';

import '../public/css/index.scss'

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

/* Theme variables */
import './theme/variables.css';

const app = createApp(App)
  .use(IonicVue)
  .use(router);

router.isReady().then(() =>
{
  app.component('v-otp-input', VOtpInput)
    .component('ion-grid', IonGrid).component('ion-row', IonRow)
    .component('ion-card', IonCard).component('ion-card-content', IonCardContent)
    .component('ion-col', IonCol).component('app-success', MessagePopup)
    .component('base-layout', BaseLayout).mount('#app');
});