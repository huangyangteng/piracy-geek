export default [
    {
        path: '/workbench',
        component: () => import('./Workbench.vue'),
        children: [
            {
                path: '/workbench/music',
                component: () => import('./pages/music/music-list.vue')
            },
            {
                path: '/workbench/album',
                component: () => import('./pages/music/album-list.vue')
            },
            {
                path: '/workbench/column',
                component: () => import('./pages/column/column-list')
            },
            {
                path: '/workbench/recent-column',
                component: () => import('./pages/column/column-list')
            },
            {
                path: '/workbench/tools',
                component: () => import('./pages/tools/tools-list')
            },
            {
                path: '/workbench/videos',
                component: () => import('./pages/tools/tools-list')
            },
            {
                path: '/workbench/recent-video',
                component: () => import('./pages/tools/tools-list')
            }
        ]
    }
]
