
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/',redirect: '/home' },
      { path: '/home', component: () => import('pages/IndexPage.vue') },
      { path: '/api_style', component: () => import('pages/ApiStylePage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
