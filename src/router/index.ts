import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import ZamestnanciView from '../views/ZamestnanciView.vue'
// import DetailView from '../views/DetailView.vue'
// import EditUserView from '../views/editUser.vue'
import PozicieView from '../views/PozicieView.vue'
import VytvoritPoziciuView from '../views/VytvoritPoziciuView.vue'
// import ArchivovanyView from '../views/ArchivovanyView.vue'
//import ArchivovanyDetailView from '../views/ArchivovanyDetailView.vue'
// import VytvoritView from '../views/VytvoritView.vue'
import neklikat from '../views/NEFUNGUJE.vue'
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
    path: '/Vytvoritpoziciu',
    name: 'vytvoritPozicie',
    component: VytvoritPoziciuView
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
  {
    path: '/NEKLIKAT',
    name: 'zakazane',
    component: neklikat
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
