'use strict';
Package('org.quickcorp.custom.controllers.signup',[
  Class('SignupFormController',Controller,{
    serviceClass: 'QuickCorpCloud',
    formSettings:{
      backRouting:'#',
      loadingRouting:'#loading',
      nextRouting:'#signupsuccessful'
    },
    validations: {
      name (){
        return FormValidations.getDefault('name')
      },
      email (){
        return FormValidations.getDefault('email')
      },
      comment (){
        return function (fieldName,dataValue, element){
          return (dataValue !== '')?(true):(false);
        }
      }
    },
    defaulController:null,
    _new_:function (o){
      o.serviceClass = this.serviceClass;
      o.formSettings = this.formSettings;
      o.validations = this.validations;
      this.defaulController = New(FormController,o);
    },
    done: function (){
      logger.debugEnabled=true;
      var controller = this.defaulController;
      try {
        logger.debug('Trying to execute DONE SignupFormController');
        setTimeout(()=>{
          Tag('.submit').map((element)=>{
            logger.debug('click in submit');
            element.addEventListener((controller.isTouchable())?('touchstart'):('click'),function (e){
              controller.formSaveTouchHandler();
            },{passive:true});
          });
        },3000);
        controller.done.call(controller);
      }catch (e){
        logger.debug('Unable to execute default behavior');
      }
    }
  })
]);
