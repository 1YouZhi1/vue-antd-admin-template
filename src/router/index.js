// src/router/index.js
import {
    createRouter,
    createWebHistory
} from 'vue-router';
import AppLayout from '@/layouts/AppLayout'

const routes = [{
        path: '/login',
        component: () => import('../views/sys/login/Login-Layout.vue'),
        hidden: true
    },
    {
        path: '/',
        component: AppLayout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            name: 'Dashboard',
            component: () => import('@/views/dashboard/DashBoard.vue'),
            meta: {
                title: 'Dashboard',
                icon: 'dashboard'
            }
        }]
    }
    // 其他路由配置
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;