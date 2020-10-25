'use strict';
logger.debugEnabled = true;
Package('org.quickcorp.custom.components',[
  Class('FooterComponent',Component,{
    name:'footer',
    cached:false,
    _new_:function (o){
      var decoded_email = _Crypt.decrypt('w5XDk8OTw5DCqcOdw5rDlsOEw5TDj8OUw5/DkcKXw4/DkQ==','email');
      o.data = {
        email:decoded_email,
        emaillink:'mailto:'+decoded_email
      };
      _super_('Component','_new_').call(this,o);
    }
  }),
  Class('CardComponent',Component,{
    name:'card',
    container:null,
    body:null,
    shadowed:true,
    cached:false,
    reload:true,
    controller:null,
    view:null,
    data:{}
  }),
  Class('SideMarkdownComponent',Component,{
    dependencies:[],
    body:document.createElement('div'),
    name:'sidemarkdowncomponent',
    templateURI:"https://api.github.com/repos/QuickCorp/QCObjects/contents/README.md?ref=master",
    tplsource:'external',
    cached:true,
    controller:null,
    view:null,
    templateHandler: 'MarkdownTemplateHandler',
    done:function (){
      var component = this;
      var toc = this.body.innerHTML.match(/<!-- TOC([\s\S]*?)<!-- \/TOC -->/gmi)[0];
      this.body.innerHTML = `<details open="">
        <summary>Reference</summary>
        `+toc+`
      </details>`;
      component.i18n_translate(); // force execution of i18n translation if available
      this.shadowRoot.subelements('ul>li>a').map(element=>{
        element.addEventListener('click',function (event){
          global.sideNavController.close();
        })
      });
      _super_('Component','done').call(this);
    }
  }),
  Class('SideNavComponent',Component,{
    name:'nav',
    subcomponents:[]
  }),
  Class('CustomMarkdownComponent',Component,{
    dependencies:[],
    body:document.createElement('div'),
    name:'readmemarkdowncomponent',
    tplsource:'external',
    cached:true,
    controller:null,
    view:null,
    templateHandler: 'MarkdownTemplateHandler',
    done:function (){
      _super_('Component','done').call(this);
    }
  }),
  Class('ReadmeMarkdownComponent',CustomMarkdownComponent,{
    cached:true,
    name:"readmemarkdowncomponent",
    templateURI:"https://api.github.com/repos/QuickCorp/QCObjects/contents/README.md?ref=master"
  }),
  Class('AuthorMarkdownComponent',CustomMarkdownComponent,{
    cached:true,
    templateURI:"https://api.github.com/repos/QuickCorp/QCObjects/contents/AUTHOR.md?ref=master"
  }),
  Class('ContributingMarkdownComponent',CustomMarkdownComponent,{
    cached:true,
    templateURI:"https://api.github.com/repos/QuickCorp/QCObjects/contents/CONTRIBUTING.md?ref=master"
  }),
  Class('CoCMarkdownComponent',CustomMarkdownComponent,{
    cached:true,
    templateURI:"https://api.github.com/repos/QuickCorp/QCObjects/contents/CODE_OF_CONDUCT.md?ref=master"
  })

]);
