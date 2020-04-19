'use strict';

Package('org.quickcorp.qcobjects.api.client_services', [
  Class('QuickCorpCloud', JSONService, {
    name: 'quickcorp_cloud',
    external: true,
    cached: false,
    method: 'post',
    basePath: '',
    url: '',
    withCredentials: false,
    _new_: function(o) {
      // service instantiated
      this.headers['Authorization'] = `Basic token`;
      this.basePath = `${CONFIG.get('quickcorp_cloud_domain')}`;
      this.url = `${this.basePath}register`;
      this.data = o.data;
    },
    done(standardResponse){}
  }),
  Class('QuickCorpGithubService', JSONService, {
    name: 'quickcorp_github',
    external: true,
    cached: false,
    method: 'GET',
    basePath: '',
    url: '',
    headers:{'Content-Type':'application/json'},
    withCredentials: false,
    _new_: function(o) {
      // service instantiated
      this.basePath = `${CONFIG.get('quickcorp_github_api')}`;
      this.url = `${this.basePath}repos`;
    },
    done({request, service}){
      service.template = JSON.stringify({result:JSON.parse(service.template).reverse().map(function (project){
        return {
          id:project.id,
          description:project.description,
          title:project.name,
          url:project.html_url,
          image:project.avatar_url,
          logo:'../Q_web.png'
        }
      })});
    }
  }),
  Class('AtomShopifyService', JSONService, {
    name: 'atomshopify',
    external: true,
    cached: false,
    method: 'get',
    basePath: '',
    url: '',
    withCredentials: false,
    _new_: function(o) {
      // service instantiated
      this.basePath = `${CONFIG.get('quickcorp_cloud_domain')}`;
      this.url = `${this.basePath}${CONFIG.get('atomshopify_url')}`;
      this.data = o.data;
    },
    done(standardResponse){}
  })
]);
