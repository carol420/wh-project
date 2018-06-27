import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/components/main-view/MainView'
import EgCom from '@/components/EgCom.vue'
import Chart1 from '@/components/chart1/chart1.vue'
import TryJsonp from '@/components/tryJsonp/tryJsonp.vue'
import iview from 'iview'



import _ from 'underscore'

Vue.use(Router)
// Vue.use(iview)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MainView',
      component: MainView
    },
    {
      path: '/eg1',
      name: 'eg1',
      component: EgCom
    },
    {
      path: '/chart1',
      name: 'chart1',
      component: Chart1
    },
    {
      path: '/tryJsonp',
      name: 'tryJsonp',
      component: TryJsonp
    },
  ]
})
