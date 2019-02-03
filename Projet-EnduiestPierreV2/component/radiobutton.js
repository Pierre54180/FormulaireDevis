'use strict';

(function () {


 var radio = {
	bindings: {
	 label: '@'
	},
	require: {
	 radios: '?^^radios'
	},
	transclude: true,
	controller: function () {
	 var ctrl = this;

	 ctrl.$onInit = function () {
		ctrl.radio = {
		 label: ctrl.label,
		 selected: false
		};
		if (typeof ctrl.radios !== "undefined") {
		 ctrl.radios.addRadio(ctrl.radio)
		}
	 };
	}
 };


 var radios = {
	bindings: {
	 selected: '@?'
	},
	transclude: true,
	controller: function () {
	 var ctrl = this;

	 ctrl.$onInit = function () {
		if (typeof ctrl.selected !== "undefined") {
		 ctrl.radioSelected = ctrl.selected - 1; //onglet 1 = indice 0
		}
		ctrl.radios = [];
	 }; //end of $onInit
	 ctrl.addRadio = function addRadio(radio) {

		ctrl.radios.push(radio);
	 };
	 ctrl.selectRadio = function selectRadio(index) {
		for (var i = 0; i < ctrl.radios.length; i++) {
		 ctrl.radios[i].selected = false;
		}
		if (typeof index !== "undefined") {
		 ctrl.radios[index].selected = true;
		 ctrl.radioSelected = index;
		}
	 };

	 ctrl.$postLink = function () {
		ctrl.selectRadio(ctrl.radioSelected);
	 };
	},

	template: `
            
            <label ng-repeat="radio in $ctrl.radios">
                <input class="form-check-input" type ="radio"  ng-click="$ctrl.selectRadio($index);">
                  {{radio.label}}        
            </label>
          	<div ng-transclude></div>
            
                `
 };

 angular.module('radio-components', [])
	 .component('radio', radio)
	 .component('radios', radios);
})();
