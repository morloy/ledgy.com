/* eslint-disable no-undef */
exports.onRouteUpdate = () => {
  if (window.analytics) window.analytics.page();

  document.getElementsByTagName('body')[0].classList.remove('navbar-open');
  const backdrop = document.getElementsByClassName('backdrop-navbar')[0];
  if (backdrop) backdrop.parentNode.removeChild(backdrop);
};

exports.onServiceWorkerUpdateReady = () => window.location.reload(true);
