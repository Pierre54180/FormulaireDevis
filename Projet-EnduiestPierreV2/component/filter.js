'use strict';

(function() {

 var construction ={

 require : {
	form : '^form'
 },
 controller : function()
 {
	var ctrl = this;
	ctrl.$onInit = function()
	{
	 ctrl.nbrface = 0;
	};
 },
 template :`   

	<div class="container">
    <div class="row ">
    <div class="col-lg-offset-1 col-lg-8 Blocprincipal"> 
      <div class="row">
        <div class="col-lg-offset-1 col-lg-10 ">
        	<div class="row">
        	 	<div class ="form-group row form-inline">
      			<label class="form-check-label"> Type de construction : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   </label>
      				 <select ng-model="$ctrl.nbrface" ng-options="facade for facade in [8,7,6,5,4,3,2,1]" class="form-control"><option value=""></option> </select>  <br/>
      		</div>
      		
      		 	<div class ="form-group row form-inline">
      			<label class="form-check-label"> Année de construction : &nbsp;&nbsp; </label>
      				 <select ng-model="$ctrl.nbrface" ng-options="facade for facade in [8,7,6,5,4,3,2,1]" class="form-control"><option value=""></option> </select>  <br/>
      		</div>  
				</div>
			</div>
		</div>
  </div>
</div>


		      `
};





 var inputCodePostal  = {
	bindings :{
	 id : '@',
	 value: '<'
	},
	require : {
	 form : '^form'
	},
	controller : function()
	{
	 var ctrl = this;
	 ctrl.$onInit = function()
	 {
		ctrl.review = {};

		ctrl.regex = /^[0-9]{5}$/;
	 };
	},
	template :`   
		        <input type="text" id="$ctrl.id" name="codepostal" ng-model ="$ctrl.value" class ="form-control" id ="$ctrl.id" required ng-pattern="$ctrl.regex">
		          <div ng-messages="$ctrl.form.codepostal.$error" style="color:maroon" role="alert">
    				<div ng-message="pattern">Code postal ne doit contenir que 5 chiffres </div> </div>
		        `
 };

 var mesureMetreCarre  = {
	bindings :{
	 value: '<',
	 id: '@'
	},
	require : {
	 form : '^form'
	},
	controller : function()
	{
	 var ctrl = this;
	 ctrl.$onInit = function()
	 {
		ctrl.review = {};

		ctrl.regex = /^[0-9]+$/;
	 };
	},
	template :`   
   					
	         
		        <input type="text" ng-model ="$ctrl.value" name ="uniter" class ="form-control" id ="$ctrl.id" required ng-pattern="$ctrl.regex">
		               <div ng-messages="$ctrl.form.uniter.$error" style="color:maroon" role="alert">
    				<div ng-message="pattern">Veuillez choisir une unité de mesure correct </div> </div>
		        `
 };

 var inputLetter =
	 {
		bindings :{
		 value: '<',
		 id: '@'
		},
		require : {
		 form : '^form'
		},
		controller : function()
		{
		 var ctrl = this;
		 ctrl.$onInit = function()
		 {
			ctrl.regex = /^[a-zéèùûàîçô-]+$/i;
		 };
		},
		template :`   
   				
		        <input type="text" ng-model ="$ctrl.value" name="letter" class ="form-control" id ="$ctrl.id" required ng-pattern="$ctrl.regex">
		          <div ng-messages="$ctrl.form.letter.$error" style="color:maroon" role="alert">
    				<div ng-message="pattern">Veuillez choisir un nom de ville correct </div> </div>
		        `

	 };

 var adresse =
	 {
		bindings :{
		 value: '<',
		 id : '@'
		},
		require : {
		 form : '^form'
		},
		controller : function()
		{
		 var ctrl = this;
		 ctrl.$onInit = function()
		 {
			ctrl.regex = /^[0-9]{2} [ a-zéèùûàîô\s]+$/i;
		 };
		},
		template :`   
   					
	         
		        <input type="text" ng-model ="$ctrl.value" name="adresse" class ="form-control" id ="$ctrl.id" required ng-pattern="$ctrl.regex">
		         <div ng-messages="$ctrl.form.adresse.$error" style="color:maroon" role="alert">
    				<div ng-message="pattern">Veuillez choisir une adresse correcte </div> </div>
		       `

	 };

 var telephone  = {
	bindings :{
	 value: '<',
	 id : '@'

	},
	require : {
	 form : '^form'
	},
	controller : function()
	{
	 var ctrl = this;
	 ctrl.$onInit = function()
	 {
		ctrl.regex = /^[0-9]{10}$/;
	 };
	},
	template :`   
   			
		        <input type="text" ng-model ="$ctrl.value" name ="telephone" class ="form-control" id ="telephone" required ng-pattern="$ctrl.regex">
		         <div ng-messages="$ctrl.form.telephone.$error" style="color:maroon" role="alert">
    				<div ng-message="pattern">Veuillez saisir un numéro de téléphone correct (10 chiffres) </div> </div>
		        
		       	 `

 };

 var email = {
	bindings :{
	 value: '<',
	 id :  '@'
	},
	require : {
	 form : '^form'
	},
	controller : function()
	{
	 var ctrl = this;
	 ctrl.$onInit = function()
	 {
		ctrl.regex = /^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z]+\.[a-z]{2,3}$/i;
	 };
	},
	template :`   
   				
	         
		        <input type="text" ng-model ="$ctrl.value" name="email" class ="form-control" id ="$ctrl.id" name="test" required ng-pattern="$ctrl.regex">
		        <div ng-messages="$ctrl.form.email.$error" style="color:maroon" role="alert">
    				<div ng-message="pattern">Votre email n'est pas valide</div> </div>
		        
		       	  `

 };


 var support =
	 {
		controller: function () {
		 var ctrl = this;
		 console.log(ctrl);
		 ctrl.$onInit = function () {
		 };
		},
		template: `

<div class="container">
  <div class="row ">
    <div class="col-lg-offset-1 col-lg-8 Blocprincipal">
      <div class="row">
        <div class="col-lg-offset-1 col-lg-10">
          <div class="row">
            <div class="col-lg-3 bloc-item">
              <div class="tittreimage">Support fissuré</div>
            <div class ="imgbb">
              <div class = "cc-selector">
                <input  id="supportfissure" type="radio" ng-model="$ctrl.selectedpeinturefacade" value="supportfgfissure">
                <label class = "item supportfissure" for="supportfissure" title="support fissuré"></label>
              </div>
            </div>
          </div>
            <div class="col-lg-3 bloc-item">
              <div class="tittreimage">Support non fissuré</div>
              <div class ="imgbb">
                <div class = "cc-selector">
                  <input  id="supportnonfissure" type="radio" ng-model="$ctrl.selectedpeinturefacade" value="supportnonfissure">
                  <label class = "item supportnonfissure" for="supportnonfissure" title="support non fissuré"></label>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
`
	 };



 var personne =
	 {
		require: {
		 form: '^form'
		},
		controller: function () {
		 var ctrl = this;
		 console.log(ctrl);
		 ctrl.$onInit = function () {};
		},
		template: `

	<title-partie title= "Personne">
			<div class="bloc2">
				<div class ="facade">
				 <div class="row">
					<label class ="form-check-label">
					    <div class="form-group form-horizontal">
					     <div class="col-lg-6">
					    
      <label for="email">Email</label>
			<email id="email"></email>
				   
     
      <label for="statut"  ">Statut: </label>
      <select ng-model="$ctrl.statuts" id="statut" ng-options="status for status in ['Propiretaire occupant','Proprietaire bailleur','Futur propiretaire','Locataire','Administrateur']" class="form-control"></select>  <br/>             
         <label  for="sociale"  >Raison sociale ( pour les sociétés ) </label>
 				<input type ="text" name="raison" class="form-control" ng-model ="$ctrl.sociale" ng-maxlength="20" required>
 				
      
      

      <label for="fonction"  >Vous êtes :</label> 
       <select ng-model="$ctrl.fonction" id="fonction" ng-options="fonctions for fonctions in ['Particulier','Société','Syndic de copropriété','Promoteur-Constructeur','Administration','Collectivité locale','Architecte','Agence immobiliere','Autre' ]" class="form-control"></select> <br>
    
      
      
       <label  for="codepostal">Code postal : </label>
 			<input-code-postal id="codepostal"></input-code-postal>
      </div>
       <div class="col-lg-6">
      <label  for="statut">Ville : </label>          
    	<input-letter id="statut"></input-letter>   <br>      
   
   		<label for="telephone">Telephone : </label>          
    	<telephone id="Telephone"></telephone>   <br>      
    
      <label  for="adresse">Adresse :</label>     
   <adresse id="adresse"></adresse> </br>
     </div>
   	Option de calcul de financement <input type ="checkbox" ng-model ="test"> 
     
		</label> 
			</div>
			</div>
		</div>
		 	</br></br><button type="button" class="btn btn-primary butondevis">Calculer ma demande de devis</button>
			</div>
			
		</title-partie>
		
			`
	 };



 angular.module('filter',['formApp','ngMessages'])

	 .component('inputCodePostal',inputCodePostal)
	 .component('construction',construction)
	 .component('mesureMetreCarre',mesureMetreCarre)
	 .component('inputLetter',inputLetter)
	 .component('adresse',adresse)
	 .component('support',support)
	 .component('telephone',telephone)
	 .component('email',email)
   .component('personne',personne);
})();