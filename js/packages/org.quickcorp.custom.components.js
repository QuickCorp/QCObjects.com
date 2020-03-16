'use strict';
Package('org.quickcorp.custom.components',[
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
      this.body.subelements('ul>li>a').map(element=>{
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
    templateURI:"https://api.github.com/repos/QuickCorp/QCObjects/contents/README.md?ref=master"
  }),
  Class('AuthorMarkdownComponent',CustomMarkdownComponent,{
    templateURI:"https://api.github.com/repos/QuickCorp/QCObjects/contents/AUTHOR.md?ref=master"
  }),
  Class('ContributingMarkdownComponent',CustomMarkdownComponent,{
    templateURI:"https://api.github.com/repos/QuickCorp/QCObjects/contents/CONTRIBUTING.md?ref=master"
  }),
  Class('CoCMarkdownComponent',CustomMarkdownComponent,{
    templateURI:"https://api.github.com/repos/QuickCorp/QCObjects/contents/CODE_OF_CONDUCT.md?ref=master"
  })

]);
