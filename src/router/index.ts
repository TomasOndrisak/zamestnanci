import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ZamestnanciView from '../views/ZamestnanciView.vue'
import PozicieView from '../views/PozicieView.vue'
import ArchivovanyViewVue from '../views/ArchivovanyView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'zamestnanci',
    component: ZamestnanciView
  },
  // {
  //   path: '/vytvorit',
  //   name: 'vytvorit',
  //   component: VytvoritView
  // },
  // {
  //   path: '/editUser',
  //   name: 'edituser',
  //   component: EditUserView
  // },
  // {
  //   path: '/detail/:id',
  //   name: 'detail',
  //   component: DetailView
  // },
   {
     path: '/Pozicie',
     name: 'pozicie',
     component: PozicieView
  },
  {
    path: '/Archivovany',
    name: 'archivovany',
    component: ArchivovanyViewVue
  },
  // {
  //   path: '/detailarchivovany/:id',
  //   name: 'archivovanydetail',
  //   component: ArchivovanyDetailView
  // },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
