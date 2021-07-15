'use strict';
const staticList = [
  '/',
  '/result',
  '/maintaining',
  '/protocol',
  '/m_index',
  '/result.html',
  '/m_index.html',
  '/maintaining.html',
  '/protocol.html',
  '/index.html',
];

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  staticList.forEach(route => {
    router.get(route, controller.home.index);
  });
  router.post('/v1/api/check', controller.home.proxy);
};
