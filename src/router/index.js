import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import EgCom from '@/components/EgCom.vue'
import Chart1 from '@/components/chart1/chart1.vue'
import TryJsonp from '@/components/tryJsonp/tryJsonp.vue'


import _ from 'underscore'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
