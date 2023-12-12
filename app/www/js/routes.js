const routes = [
  {
    path: '/',
    url: './index.html',
  },
  // メイン画面
  {
    path: '/home/',
    componentUrl: './pages/home.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
