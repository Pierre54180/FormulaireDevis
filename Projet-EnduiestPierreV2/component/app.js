'use strict';

(function() {

    var baseForm = {
        bindings: {
            title: '@'
        },
        transclude: true,
        controller: function () {
            var ctrl = this;
            ctrl.$onInit = function () {
            };
        },
        template: `

<div class="container trest ">
    <div class="row">
    	<div class=" col-lg-offset-1 col-lg-10">
      	<div class="row">
     			<div class="col-xs-offset-4 col-xs-4 imgtitre">
    				<img src = "images/logo/logo-enduiest.jpg"/>
					</div>
  				<div class="col-xs-offset-3 col-xs-7 titredev">
						Faites le devis de vos travaux en 3min ! 
    				<div class="col-xs-offset-1 col-xs-10 descriptiontitre">Vous recevez également le devis détaillé à votre adresse e-mail</div>
					</div>
    		</div>
			</div>
    </div>
</div>
 <title-partie title ="Vos Travaux" title2="Convenit ut victura Fortuna summitatem surgeret foedere"></title-partie>
      <div ng-transclude></div>
     
     
   `
    };


 var titlePartie = {
	bindings: {
	 title: '@',
	 title2:'@'
	},
	transclude : true,
	controller: function () {
	 var ctrl = this;
	 ctrl.$onInit = function () {};
	},
	template: `

   <div class="container">
    <div class="row">
        <div class="col-lg-offset-1 col-lg-8">
          <div class="row travaux">
        <div class="col-lg-1 iconetravaux"><i class="fa fa-home fa-5x" aria-hidden="true"></i></div>
        <div class="col-lg-11 descriptiontravaux">{{$ctrl.title}}
        <br> <div class ="sousdescriptiontravaux"> {{$ctrl.title2}}</div>
        </div>
   			</div>   
			</div>
 </div>
</div>
     
`
 };

 var titlePartie2 = {
bindings  : {
 title :'@',
 number:'@'
},
	transclude : true,
	controller: function () {
	 var ctrl = this;
	 ctrl.$onInit = function () {};
	},template: `

    <div class="container ">
    	<div class="row">
        <div class="col-lg-offset-1 col-lg-7">
          <div class="row">
        		<div class="col-lg-1">
        		<div class="circle">
  						<span class="circle_text"><strong>{{$ctrl.number}}</strong> <br/> </span>
						</div>
					</div>
        <div class="col-lg-11 titrepartie "> {{$ctrl.title}}
        </div>
   			</div>   
			</div>
 </div>
</div>
<div ng-transclude></div>
`
 };






    angular.module('formApp',['ngAnimate'])
        .component('baseForm',baseForm)
				.component('titlePartie',titlePartie)
				.component('titlePartie2',titlePartie2);
})();