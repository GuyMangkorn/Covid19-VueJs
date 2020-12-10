import VueRouter from 'vue-router'
import WorldStats from "@/components/WorldStats.vue";
import TodayStats from "@/components/TodayStats.vue";


const routes = [
    {
        path: '/world',
        component: TodayStats
    },
    {
        path: '/',
         component : WorldStats
    },
]


const index = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    route: routes
})

export  default  index