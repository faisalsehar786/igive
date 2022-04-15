<template>
  <base-layout :showToolbar="true" :auth="false">
    <template #toolbar>
      <!-- <ion-grid>
        <ion-row class="ion-padding-horizontal">
          <ion-col></ion-col>
          <ion-col>
            <h2 class="ion-margin-unset">Profile</h2>
          </ion-col>
          <ion-col @click="router.push('/notifications')">
            <img class="ion-float-end" src="/images/bell.png" alt="" />
          </ion-col>
        </ion-row>
      </ion-grid> -->

         <ion-grid class="ion-no-padding">
            <ion-row style="padding: 24px 25px;">

                <ion-col size="1" class="ion-text-center">

                    <img @click="router.go(-1)" class="navBar--back" src="/images/arrow-back.png" alt="" />

                </ion-col>
                <ion-col size="10" class="ion-text-center">
                    <ion-title size="large" style="font-family: 'Gilroy Medium';
font-size: 20px;
line-height: 22px;
  
white-space: normal;
text-align: center;

color: #000000;">
                    Profile   
                    </ion-title>

                </ion-col>

                <ion-col size="1">

               <svg width="30" height="30" viewBox="0 0 19 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 17.25V15C13.75 12.1005 11.3995 9.75 8.5 9.75C5.60051 9.75 3.25 12.1005 3.25 15V17.25C3.25 19.725 1 20.325 1 21.75C1 23.025 3.925 24 8.5 24C13.075 24 16 23.025 16 21.75C16 20.325 13.75 19.725 13.75 17.25Z" stroke="#11AFD4" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.50014 25.5C7.74189 25.5 7.02939 25.4745 6.35889 25.425C6.65226 26.3609 7.51939 26.9978 8.50014 26.9978C9.48088 26.9978 10.348 26.3609 10.6414 25.425C9.97089 25.4745 9.25839 25.5 8.50014 25.5Z" fill="#11AFD4"/>
<path d="M12.3062 12V11.468L14.0352 9.704C14.4972 9.242 14.7282 8.84533 14.7282 8.514C14.7282 8.23867 14.6442 8.024 14.4762 7.87C14.3082 7.716 14.1029 7.639 13.8602 7.639C13.3982 7.639 13.0622 7.85833 12.8522 8.297L12.3062 7.975C12.4602 7.65767 12.6725 7.41733 12.9432 7.254C13.2185 7.09067 13.5219 7.009 13.8532 7.009C14.2639 7.009 14.6209 7.14433 14.9242 7.415C15.2275 7.68567 15.3792 8.04967 15.3792 8.507C15.3792 9.00167 15.0875 9.54067 14.5042 10.124L13.2512 11.37H15.4702V12H12.3062Z" fill="white"/>
</svg>


                </ion-col>

            </ion-row>
        </ion-grid>
    </template>
    <template #content>

     
      <over-view></over-view>
       <div class="profile-page" style="
      padding:0px 25px;">
      <personal-info @click="router.push('/personal-info')"></personal-info>
      <receipts @click="router.push('/receipts')"></receipts>
      <terms-and-conditions
        @click="router.push('/terms-and-conditions')"
      ></terms-and-conditions>
      <privacy @click="router.push('/privacy')"></privacy>
      <settings @click="router.push('/settings')"></settings>
      <help @click="router.push('/help')"></help>
      <log-out @click="router.push('/login')"></log-out>
      </div>
    </template>
  </base-layout>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import OverView from "../../components/TheProfileOverview.vue";
import PersonalInfo from "../../components/ThePersonalInformation.vue";
import Receipts from "../../components/TheReceipts.vue";
import TermsAndConditions from "../../components/TheTermsAndConditions.vue";
import Privacy from "../../components/ThePrivacy.vue";
import Settings from "../../components/TheSettings.vue";
import Help from "../../components/TheHelp.vue";
import LogOut from "../../components/TheLogout.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "user-page",
  components: {
    OverView,
    PersonalInfo,
    Receipts,
    TermsAndConditions,
    Privacy,
    Settings,
    Help,
    LogOut,
  },
  setup() {
    let router = useRouter();
    return {
      router,
     
    };
  },
});
</script>
<style scoped>
.container {
  margin: auto;
}

.toolbar > div {
  display: flex;
  justify-content: space-between;
}
.toolbar > div h2 {
  margin: unset;
}
.toolbar {
  --background: unset;
  padding: 1rem;
  display: flex;
}
.profile__card {
  padding-inline: 0px;
  padding-bottom: 0px;
}
.profile__card--details {
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-top: 1px solid #f1f2f9;
  margin-top: 1rem;
}
.horzintal--line {
  position: absolute;
  width: 2px;
  height: 76px;
  border: 1px solid #f1f2f9;
  left: 50%;
  top: 0px;
}

.cards__padding {
  padding: 0.5rem;
}
.text__bold {
  font-weight: bold;
  font-size: 1rem;
}
.profile__info {
  /* display: flex; */
}


</style>
