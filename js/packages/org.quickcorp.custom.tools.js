'use strict';
Import ('https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.1/showdown.min',()=>{},true);
Package('org.quickcorp.custom.tools',[
  Class('MarkdownTemplateHandler',DefaultTemplateHandler,{
    replaceLinksForRouting:function(template){
      template = template.replace(new RegExp('href="CODE_OF_CONDUCT.md"', 'g'),'href="#CODE_OF_CONDUCT"');
      template = template.replace(new RegExp('href="code_of_conduct.md"', 'g'),'href="#code_of_conduct"');
      template = template.replace(new RegExp('href="CONTRIBUTING.md"', 'g'),'href="#contributing"');
      return template;
    },
    assign:function (data){
      return (this.template === "")?(""):((function (templateInstance){
        var _json = JSON.parse(templateInstance.template);
        var originalContent = atob(_json['content']);
        var converter = new showdown.Converter();
        converter.setFlavor('github');
        return templateInstance.replaceLinksForRouting(converter.makeHtml(originalContent));        
      })(this))
    }
  })
]);
