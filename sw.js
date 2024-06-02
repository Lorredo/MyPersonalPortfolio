/* Ito yung Service Worker - Ang primary function nito siya yung nagsasave ng files ng nakadeclare para if ever offline ang app yung nakasave 
ang iloload and if ever na online ulit si SW ang magccheck sa server if may changes sa data and maguupdate */

/* Ito yung name ng Cache (mit502-pwa) kapag sinave yung data/files sa browser */
var cacheName = 'mit502-pwa';
/* Ito yung name mga files na iccache/ issave sa browser */
var filesToCache = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/css/aboutme.css',
  '/css/indexx.css',
  '/css/nav.css',
  '/aboutme.html',
  '/contact.html',
  '/skill.html'
];

/* Once nagload ang page/file iccache lahat ng nakaedeclare na files sa taas filesToCache */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Kapag nagoffline ang app mo ito yung mga iloload nya na nakacache doon sa var filesToCache */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});