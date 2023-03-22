import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TsExample from '../views/TsExample.vue'
import Example from '../views/example.vue'
import Fallthrough from '../views/fallthrough.vue'
import DatetimeLuxonjustmenu from '../views/22DatetimeLuxonjustmenu.vue'
import DateTimewithLuxon from '../views/23DateTimewithLuxon.vue'
import DateTimeWithLuxonFilterWithoutComputed from '../views/24DateTimeWithLuxonFilterWithoutComputed.vue'
import DateTimeWithLuxonFilterWithComputed from '../views/25DateTimeWithLuxonFilterWithComputed.vue'
import PropsFilteredData from '../views/27PropsFilteredData.vue'
import Timeline from '../views/28timeline.vue'
import TimelinePiniaDataStructure from '../views/30timelinePiniaDataStructure.vue'
import TimelineExtractingComplexity from '../views/31timelineExtractingComplexity.vue'
import TimelineFetchApiExtractingComplexity from '../views/32timelineFetchApiExtractingComplexity.vue'
import TwowayBinding from '../views/TwowayBinding.vue'
import ParentCompo from '../views/ParentCompo.vue'
import CounterApp from '../views/counterApp.vue'
import NotesApp from '../views/notesapp.vue'
import QuizApp from '../views/quizApp.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/example',
    component: Example,
    children:[
      {
        path: 'tsexample',
        component: TsExample
      },
      {
        path: 'datetimeluxonjustmenu',
        component: DatetimeLuxonjustmenu
      },
      {
        path: 'datetimeluxon',
        component: DateTimewithLuxon
      },
      {
        path: 'filterdatawithoutcomputed',
        component: DateTimeWithLuxonFilterWithoutComputed
      },
      {
        path: 'filterdatawithcomputed',
        component: DateTimeWithLuxonFilterWithComputed
      },
      {
        path: 'propsfilterdata',
        component: PropsFilteredData
      },
      {
        path: 'storedata',
        component: Timeline
      },
      {
        path: 'timelinePiniaDataStructure',
        component: TimelinePiniaDataStructure
      },
      {
        path: 'timelineExtractingComplexity',
        component: TimelineExtractingComplexity
      },
      {
        path: 'timelineFetchApiExtractingComplexity',
        component: TimelineFetchApiExtractingComplexity
      },
      
  ]
    
  },
  {
    path: '/fallthrough',
    component: Fallthrough
  },
  {
    path: '/twowaybinding',
    component: TwowayBinding
  },
  {
    path: '/childtoparent',
    component: ParentCompo
  },
  {
    path: '/counterapp',
    component: CounterApp
  },

  {
    path: '/notesapp',
    component: NotesApp
  },
  {
    path: '/quizapp',
    component: QuizApp
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
