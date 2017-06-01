import Vue from 'vue'
import Router from 'vue-router'
import index from '@/view/index'
import personal from '@/view/personal'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'Hello',
        component: index
    }],
    // children: [{
    //     path: '',
    //     component: r => require.ensure([], () => r(require('../view/personal')), 'personal')
    // }]
})
