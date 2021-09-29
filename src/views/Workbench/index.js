export default [
    {
        path: '/workbench',
        component: () => import('./Workbench.vue'),
        children: [
            {
                path: '/workbench/music',
                component: () => import('./pages/music-list.vue')
            },
            {
                path: '/workbench/album',
                component: () => import('./pages/album-list.vue')
            }
        ]
    }
]
