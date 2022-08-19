export default [
    {
        name: 'diff-date',
        path: '/diff-date',
        component: () => import('./diff-date')
    },
    {
        name: 'listen-to-music',
        path: '/listen-to-music',
        component: () => import('./listen-to-music/listen-to-music')
    },
    {
        name: 'weekend-see',
        path: '/weekend-see',
        component: () => import('./weekend-watch')
    },
    {
        name: 'thinking',
        path: '/thinking',
        component: () => import('./thinking')
    },
    {
        name: 'star-bg',
        path: '/star-bg',
        component: () => import('./star-bg')
    },
    {
        name: 'pwa-icon',
        path: '/pwa-icon',
        component: () => import('./pwa-icon')
    },
    {
        name: 'translate',
        path: '/translate',
        component: () => import('./translate')
    },
    {
        name: 'search',
        path: '/search',
        component: () => import('./gradute-search')
    }
]
