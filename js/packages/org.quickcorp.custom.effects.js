'use strict';
Package('org.quickcorp.custom.effects',[
  Class('MainTransitionEffect',TransitionEffect,{
    duration:385,
    defaultParams:{
      alphaFrom:0,
      alphaTo:1
    },
    effects:['Fade','MoveYInFromBottom'],
    fitToHeight:true
  })
]);
