// ROUTER
export default function createRouter(pages) {
  return function () {
    window.addEventListener('popstate', () => {
      routeRender(pages);
    })
    routeRender(pages);
  }
}

function routeRender(pages) {
  if (!location.hash) {
    history.replaceState(null, '', '/#/')
  }
  const routeView = document.querySelector('router-view');
  const [hash, queryString = ''] = location.hash.split("?");

  const query = queryString.split("&").reduce((acc, cur) => {
    const [key, value] = cur.split("=");
    acc[key] = value;
    return acc;
  }, {});
  history.replaceState(query, '');

  const currentRoute = pages.find(page => new RegExp(`${page.path}/?$`).test(hash));
  routeView.innerHTML = '';
  routeView.append(new currentRoute.component().el);
  window.scrollTo(0, 0);
}
