import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [

  {    
    path: '/',
    name: 'loadingPage',
    component: () => import('../views/loading/loadingPage.vue')
  },
  {
    path: '/onboarding',
    name: 'OnbordingPage',
    component: () => import('../views/onboarding/OnBoarding.vue')
  },
  {
    path: '/wellcome',
    name: 'welcomePage',
    component: () => import('../views/onboarding/AppWelcome.vue')
  },
  {
    path: '/register',
    name: 'Sign-up',
    component: () => import('../views/register/SignUp.vue')
  },
  {
    path: '/password-reset',
    name: 'password-reset-options',
    component: () => import('../views/passwords/PasswordResetOptions.vue')
  },
  {
    path: '/new-password',
    name: 'new-password',
    component: () => import('../views/passwords/SetNewPassword.vue')
  },
  {
    path: '/password-otp',
    name: 'password-otp',
    component: () => import('../views/otp/password-otp.vue')
  },
  {
    path: '/login-otp',
    name: 'login-otp',
    component: () => import('../views/otp/login-otp.vue')
  },
  {
    path: '/login',
    name: 'sign-in',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/login-with-code',
    name: 'signIn-with-code',
    component: () => import('../views/login/loginWithCode.vue')
  },
  {
    path: '/login/touch',
    name: 'login-with-touch-or-faceId',
    component: () => import('../views/login/loginWithOptions.vue')
  },
  {
    path: '/login-with-faceId',
    name: 'login-with-faceId',
    component: () => import('../views/login/loginWithFaceId.vue')
  },
  {
    path: '/login-with-touchId',
    name: 'login-with-touchId',
    component: () => import('../views/login/loginIdWithTouchId.vue')
  },
  {
    path: '/login-with-Phone',
    name: 'login-with-Phone',
    component: () => import('../views/login/loginWithPhone.vue')
  },
  {
    path: '/privacy',
    name: 'privacy',
    component: () => import('../views/generalViews/privacy.vue')
  },
  {
    path: '/terms-and-conditions',
    name: 'terms-and-condition',
    component: () => import('../views/generalViews/terms&condition.vue')
  },
  {
    path: '/card',
    name: 'single-card',
    component: () => import('../views/cards/card.vue')
  },
  {
    path: '/vendor-card',
    name: 'vendor-card',
    component: () => import('../views/cards/vendorCards.vue')
  },
  {
    path: '/notifications',
    name: 'notification-page',
    component: () => import('../views/generalViews/notifications.vue')
  },
  {
    path: '/payment-request',
    name: 'payment-request',
    component: () => import('../views/paymentAuth/paymentRequest.vue')
  },
  {
    path: '/auth-faceId',
    name: 'Auth-faceId',
    component: () => import('../views/paymentAuth/faceAuth.vue')
  },
  {
    path: '/auth-touch',
    name: 'Auth-touch',
    component: () => import('../views/paymentAuth/touchAuth.vue')
  },
  {
    path: '/share-card',
    name: 'share-card',
    component: () => import('../views/cards/cardSharing.vue')
  },
  {
    path: '/purchase-card',
    name: 'purchase-card',
    component: () => import('../views/cards/cardPurchasing.vue')
  },
  { 
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/checkout/checkout.vue')
  },
  {
    path: '/add-card',
    name: 'add-card',
    component: () => import('../views/checkout/addCard.vue')
  },
  {
    path: '/personal-info',
    name: 'personal-info',
    component: () => import('../views/profile/personalinfo.vue')
  },
  {
    path: '/contact-us',
    name: 'contact-us',
    component: () => import('../views/profile/contactus.vue')
  },
  {
    path: '/help',
    name: 'help-page',
    component: () => import('../views/profile/help.vue')
  },
  {
    path: '/receipts',
    name: 'receipts-page',
    component: () => import('../views/profile/receipts.vue')
  },
  {
    path: '/receipts-details',
    name: 'receipts-details',
    component: () => import('../components/TheReceiptDetails.vue')
  },
  {
    path: '/settings',
    name: 'settings-page',
    component: () => import('../views/profile/settings.vue')
  },
  {
    path: '/trasaction',
    name: 'trasaction-history',
    component: () => import('../views/generalViews/trasactionHistory.vue')
  },
  {
    path: '/change-password',
    name: 'change-password',
    component: () => import('../views/passwords/changePassword.vue')
  },
  {
    path: '/support',
    name: 'support-ticket',
    component: () => import('../views/generalViews/support.vue')
  },
  {
    path: '/loading',
    name: 'loading-page',
    component: () => import('../views/generalViews/loading.vue')
  },
  {
    path: '/campaign-cards',
    name: 'campaign-cards',
    component: () => import('../views/cards/campaignsCard.vue')
  },
  {
    path: '/shared-card-detail',
    name: 'shared-cards-detail',
    component: () => import('../views/cards/sharedCardDetails.vue')
  },
  {
    path: '/dashboard/',
    name: 'dashboard',
    component: () => import('../views/generalViews/dashboard.vue'),
    children: [
      {
        path: '',
        redirect: '/home',
      },
      {
        path: '/home',
        component: () => import('../views/home/AppHome.vue'),
      },
      {
        path: '/cart',
        component: () => import('../views/cart/cart.vue'),
      },
      {
        path: '/cards-detail',
        component: () => import('../views/cardsDetails.vue')
      },
      {
        path: '/user-profile',
        component: () => import('../views/profile/profile.vue')
      },
    ],
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
