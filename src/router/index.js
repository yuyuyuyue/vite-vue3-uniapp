import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/main'
    }, {
        path: '/main',
        name: 'main',
        component: () => import('../views/Main.vue'),
        redirect: '/main/box',
        children: [
            {
                path: 'box',
                name: 'box',
                component: () => import('../views/Box/index.vue')
            }, {
                path: 'commodity',
                name: 'commodity',
                component: () => import('../views/commodity/index.vue'),
                children: [
                    {
                        path: 'page1',
                        name: 'page1',
                        component: () => import('../views/commodity/Page1.vue'),

                    }
                ]
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router 
