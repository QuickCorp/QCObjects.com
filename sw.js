/**
 * QCObjects SDK 1.0
 * ________________
 *
 * Author: Jean Machuca <correojean@gmail.com>
 *
 * Cross Browser Javascript Framework for MVC Patterns
 * QuickCorp/QCObjects is licensed under the
 * GNU Lesser General Public License v3.0
 * [LICENSE] (https://github.com/QuickCorp/QCObjects/blob/master/LICENSE.txt)
 *
 * Permissions of this copyleft license are conditioned on making available
 * complete source code of licensed works and modifications under the same
 * license or the GNU GPLv3. Copyright and license notices must be preserved.
 * Contributors provide an express grant of patent rights. However, a larger
 * work using the licensed work through interfaces provided by the licensed
 * work may be distributed under different terms and without source code for
 * the larger work.
 *
 * Copyright (C) 2015 Jean Machuca,<correojean@gmail.com>
 *
 * Everyone is permitted to copy and distribute verbatim copies of this
 * license document, but changing it is not allowed.
*/
"use strict";
const version = "0.0.75";
const appName = "qcobjects.com";
const cacheSufix = (Math.round(Date.now()/(1000*3600))).toString(); // 1 hour
const cacheName = `qcobjects-app-${appName}-${version}-${cacheSufix}`;
const start_url = "/?homescreen=1";
caches.delete(cacheName); // force to reload cache for the first time the sw is loaded
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([`${start_url}`,
	"/",
	"CHANGELOG.md",
	"README.md",
	"README.rst",
	"config.json",
	"css/components/card.css",
	"css/components/floating-object-effect.css",
	"css/components/hero/hero-call-to-action.css",
	"css/components/hero/hero-overlay.css",
	"css/components/hero/hero-two-column-form.css",
	"css/components/modal.css",
	"css/components/morph-shape-effect.css",
	"css/desktop/container.css",
	"css/desktop/content.css",
	"css/desktop/footer.css",
	"css/desktop/index.css",
	"css/desktop/navbar.css",
	"css/desktop/sidebar.css",
	"css/github-style.css",
	"css/index.css",
	"css/mobile/content.css",
	"css/mobile/footer.css",
	"css/mobile/index.css",
	"css/mobile/navbar.css",
	"css/mobile/sidebar.css",
	"css/modern-base.css",
	"css/modern-fonts.css",
	"css/prism-okaidia.css",
	"css/snippet.css",
	"css/theme/basic/style.css",
	"css/theme/cyan/style.css",
	"css/theme/redlight/style.css",
	"css/theme/xtra/style.css",
	"css/theme.css",
	"favicon.ico",
	"humans.txt",
	"img/ALPHA-RISE.png",
	"img/QCOBJECTS-animated-logo.svg",
	"img/QCObjects-CLI-AMP.gif",
	"img/QCObjects-Components-Layout.gif",
	"img/QCObjects-Docker-Playground.gif",
	"img/QCObjects-Quick-Start.gif",
	"img/QCObjects-running-on-Windows64bit.gif",
	"img/Q_web copy.png",
	"img/Q_web.png",
	"img/Q_web.svg",
	"img/components.gif",
	"img/home/bg_hr.png",
	"img/home/blacktocat.png",
	"img/home/icon_download.png",
	"img/home/sprite_download.png",
	"img/icons/icon-128x128.png",
	"img/icons/icon-144x144.png",
	"img/icons/icon-152x152.png",
	"img/icons/icon-192x192.png",
	"img/icons/icon-384x384.png",
	"img/icons/icon-512x512.png",
	"img/icons/icon-72x72.png",
	"img/icons/icon-96x96.png",
	"img/jeanmachuca.png",
	"img/loading.svg",
	"img/logo-qcobjects-white.svg",
	"img/logo.png",
	"img/placeholder.svg",
	"img/pwa-qcobjects-demo.gif",
	"img/qco2.png",
	"img/screenshots/screenshot1.png",
	"img/screenshots/screenshot1.webp",
	"img/screenshots/screenshot2.png",
	"img/screenshots/screenshot2.webp",
	"index.html",
	"index.rst",
	"js/cl.quickcorp.components.js",
	"js/cl.quickcorp.controller.js",
	"js/cl.quickcorp.effects.js",
	"js/cl.quickcorp.js",
	"js/cl.quickcorp.model.js",
	"js/cl.quickcorp.tools.js",
	"js/cl.quickcorp.view.js",
	"js/init.js",
	"js/installer.js",
	"js/packages/installer.js",
	"js/packages/org.quickcorp.custom.components.js",
	"js/packages/org.quickcorp.custom.controllers.js",
	"js/packages/org.quickcorp.custom.controllers.signup.js",
	"js/packages/org.quickcorp.custom.effects.js",
	"js/packages/org.quickcorp.custom.js",
	"js/packages/org.quickcorp.custom.models.js",
	"js/packages/org.quickcorp.custom.tools.js",
	"js/packages/org.quickcorp.custom.views.js",
	"js/packages/org.quickcorp.i18n_messages.es.js",
	"js/packages/org.quickcorp.qcobjects.api.client_services.js",
	"js/prism-okaidia.js",
	"manifest.json",
	"qcobjects_01.png",
	"robots.txt",
	"sitemap.xml",
	"spec/support/jasmine.json",
	"spec/testsSpec.js",
	"templates/components/academy.tpl.html",
	"templates/components/article1.tpl.html",
	"templates/components/article2.tpl.html",
	"templates/components/article3.tpl.html",
	"templates/components/article4.tpl.html",
	"templates/components/blank.md",
	"templates/components/blank.tpl.html",
	"templates/components/card.tpl.html",
	"templates/components/contentblock.tpl.html",
	"templates/components/download-button.tpl.html",
	"templates/components/download.tpl.html",
	"templates/components/footer.tpl.html",
	"templates/components/footer2.tpl.html",
	"templates/components/grid.tpl.html",
	"templates/components/header-es.tpl.html",
	"templates/components/header.tpl.html",
	"templates/components/hero/hero-call-to-action.tpl.html",
	"templates/components/hero/hero-overlay.tpl.html",
	"templates/components/hero/hero-two-column-form.tpl.html",
	"templates/components/layout-basic.tpl.html",
	"templates/components/loading.tpl.html",
	"templates/components/loadingfooter.tpl.html",
	"templates/components/login.tpl.html",
	"templates/components/login2.tpl.html",
	"templates/components/loginform.tpl.html",
	"templates/components/main.tpl.html",
	"templates/components/nav.tpl.html",
	"templates/components/pages/author.tpl.html",
	"templates/components/pages/code_of_conduct.tpl.html",
	"templates/components/pages/contributing.tpl.html",
	"templates/components/pages/download.tpl.html",
	"templates/components/pages/page1.tpl.html",
	"templates/components/pages/page2.tpl.html",
	"templates/components/pages/page3.tpl.html",
	"templates/components/pages/pricing.tpl.html",
	"templates/components/pwa.tpl.html",
	"templates/components/section1.tpl.html",
	"templates/components/section2.tpl.html",
	"templates/components/shadowed-checkbox.tpl.html",
	"templates/components/shadowed-wistia-video.tpl.html",
	"templates/components/shadowed-youtube-video.tpl.html",
	"templates/components/signin.tpl.html",
	"templates/components/signup-form.tpl.html",
	"templates/components/signup.tpl.html",
	"templates/components/signupbuttons.tpl.html",
	"templates/components/signupform.tpl.html",
	"templates/components/signuppage.tpl.html",
	"templates/components/signupsuccessful.tpl.html",
	"templates/components/signupsuccessfulfooter.tpl.html",
	"templates/components/snippet.tpl.html",
	"templates/components/topmenu.tpl.html",
	"templates/components/video_testimonials.tpl.html"])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
