'use strict';

(function () {
 var listeTravauxFacade = {

	transclude: true,
	controller: function () {
	 var ctrl = this;
	 ctrl.$oninit = function () {
		ctrl.typeTravauxSelected = "";
	 };
	},
	template: `
<title-partie2 title ="Type de travaux" number="1">
	<div class="container">
    <div class="row ">
    <div class="col-lg-offset-1 col-lg-8 Blocprincipal"> 
      <div class="row">
        <div class="col-lg-offset-1 col-lg-12">
        	<div class="row">
        	
        	
        		<div class="col-xs-6 col-lg-3 bloc-item">
        			<div class="tittreimage">Crepis façade</div>
    					<div class ="imgbb">
    						<div class = "cc-selector">
    							<input id ="crepis" type="radio" ng-model="$ctrl.typeTravauxSelected" value="crepis">
    							<label class ="item crepis" for="crepis" title="crepis" > </label>
    						</div>
    					</div>
    				</div>
    						
    				<div class="col-xs-6 col-lg-3 bloc-item vcenter">	
    					<div class="tittreimage">Peinture façade</div>
    					<div class ="imgbb">
    						<div class = "cc-selector">
    							<input id ="peinturefacade" type="radio" ng-model="$ctrl.typeTravauxSelected" value="peinturefacade">
    							<label class ="item peinturefacade" for="peinturefacade" title="peinturefacade" > </label>
								</div>
							</div>
						</div>
				
						<div class="col-xs-6 col-lg-3 bloc-item vcenter">
							<div class="tittreimage">Bardage</div>
							<div class ="imgbb">
    						<div class = "cc-selector">
    							<input id ="bardage" type="radio" ng-model="$ctrl.typeTravauxSelected" value="bardage">
    							<label class ="item bardage" for="bardage" title="bardage" > </label>	
    							<i class="fa fa-chevron-circle-down fa-5x oui" aria-hidden="true"></i>
    						</div>
    					</div>
    				
    				</div>
    		
    				<div class="col-xs-6 col-lg-3 bloc-item vcenter">
    					<div class="tittreimage">Isolation extérieure</div>
    					<div class ="imgbb">
    						<div class = "cc-selector">
    						<input id ="isolationex" type="radio" ng-model="$ctrl.typeTravauxSelected" value="isolationex">
    						<label class ="item isolationex" for="isolationex" title="isolationex" > </label>
    					</div>
    					</div>
    				</div>
    			</div>
    				 		<div class ="typerevement">
    			Type de rêvetement : &nbsp;&nbsp;&nbsp;
    			<label class="radio-inline"><input type="radio" name="optradio">Neuf</label>
					<label class="radio-inline"><input type="radio" name="optradio">Ancien</label>
					</div>
     		</div>
   		 </div>
			</div>
		</div>
	</div> 

  </title-partie2>
 
<title-partie2 title="Construction" number="2">
	<construction></construction>
</title-partie2>



<div ng-if = "$ctrl.typeTravauxSelected">	
<title-partie2 title="Etat de revetement" number="3">
 <support></support> 
</title-partie2>
 
	<div ng-if = "$ctrl.typeTravauxSelected === 'crepis'">	
	<title-partie2 title="Type de rêvetement" number="4">
</title-partie2>
	<crepis-facade></crepis-facade>
	</div>
	
	<div ng-if = "$ctrl.typeTravauxSelected === 'peinture'">
			<title-partie2 title="Type de rêvetement" number="4">
</title-partie2>
<peinture-facade></peinture-facade>
</div>


	<div ng-if = "$ctrl.typeTravauxSelected === 'bardage'">		<title-partie2 title="Type de rêvetement" number="4">
</title-partie2>	<bardage></bardage></div>


	<div ng-if = "$ctrl.typeTravauxSelected === 'isolation'">	<title-partie2 title="Type de rêvetement" number="4">
</title-partie2>	<isolation-exterieure></isolation-exterieure></div> 
	`
 };

 var crepisFacade = {

	controller: function () {
	 var ctrl = this;
	 console.log(ctrl);
	 ctrl.$onInit = function () {
		ctrl.selectedcrepisfacade = "";
	 };
	},
	template: `
		<div class="container">
    <div class="row ">
    <div class="col-lg-offset-1 col-lg-8 Blocprincipal"> 
      <div class="row">
        <div class="col-lg-offset-1 col-lg-10 ">
        	<div class="row">
			  
			  
			  	<div class="col-lg-3 bloc-item vcenter">
    				<div class="tittreimage">Brique</div>
    					<div class ="imgbb">
    						<div class = "cc-selector">		
    			<input id ="brique" type="radio" ng-model="$ctrl.selectedcrepisfacade" value="brique">
    			<label class ="item brique" for="brique" title="brique"> </label>
    			 		</div>
						</div>
					</div>
    		
         		
         		
			  	<div class="col-lg-3 bloc-item vcenter">
    				<div class="tittreimage">agglos</div>
    					<div class ="imgbb">
    						<div class = "cc-selector">		
        	<input  id="agglos" type="radio" ng-model="$ctrl.selectedcrepisfacade" value="agglos">
        	<label class = "item agglos" for="agglos"  title="agglos"></label>
        	</div>
						</div>
					</div>
 				
			  	<div class="col-lg-3 bloc-item vcenter">
    				<div class="tittreimage">Supportfissure</div>
    					<div class ="imgbb">
    						<div class = "cc-selector">	
     			<input  id="supportfissure" type="radio" ng-model="$ctrl.selectedcrepisfacade" value="supportfgfissure">
        	<label class = "item supportfissure" for="supportfissure" title="support fissuré"></label>
        	</div>
						</div>
					</div>
					
         		<div class="col-lg-3 bloc-item vcenter">
    				<div class="tittreimage">Supportfissure</div>
    					<div class ="imgbb">
    						<div class = "cc-selector">	
        	<input  id="supportnonfissure" type="radio" ng-model="$ctrl.selectedcrepisfacade" value="supportnonfissure">
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
   
	<div ng-if="$ctrl.selectedcrepisfacade">
		<type-revetement-finitions></type-revetement-finitions>
	</div>`
 };

 var peintureFacade = {
	controller: function () {
	 var ctrl = this;
	 ctrl.$onInit = function () {
		ctrl.selected;
	 };
	},
	template: `
          
          <support></support>
          <div ng-if = "$ctrl.selectedpeinturefacade">
      	<type-revetement-finitions></type-revetement-finitions>
          </div>`
 };

 var bardage = {
	controller: function () {
	 var ctrl = this;
	 ctrl.$onInit = function () {
		ctrl.selectedbardage;
	 };
	},
	template: `  
  			<div class="container">
    <div class="row ">
    <div class="col-lg-offset-1 col-lg-8 Blocprincipal"> 
      <div class="row">
        <div class="col-lg-offset-1 col-lg-10 ">
        	<div class="row">
           			
           			
           			
           			
           			
     
           
           		  		<div class="col-lg-3 bloc-item vcenter">
    									<div class="tittreimage">Bardage</div>
    										<div class ="imgbb">
    										   <div class = "cc-selector">
     										<input  id="Bardage" type="radio" ng-model="$ctrl.selectedbardage" value="bardage">
        								<label class = "item brique" for="Bardage" title="brique"></label>	
         						</div>  	
         					</div>
         					</div>
         	
         				<div class="col-lg-3 bloc-item vcenter">
    									<div class="tittreimage">Agglos</div>
    										<div class ="imgbb">
    										   <div class = "cc-selector">
     									<input  id="agglos" type="radio" ng-model="$ctrl.selectedbardage" value="agglos">
        							<label class = "item agglos" for="agglos" title="brique"></label>
        	 					</div>
         						</div>  	
         					</div>
           
           					<div class="col-lg-3 bloc-item vcenter">
    									<div class="tittreimage">Ossature</div>
    										<div class ="imgbb">
    										   <div class = "cc-selector">
     									<input  id="ossature" type="radio" ng-model="$ctrl.selectedbardage" value="ossature">
        							<label class = "item ossature" for="ossature" title="ossature"></label>
        	 						</div>
         						</div>
         	  			</div>
         	  			</div>
         	  			</div>
            		</div>
            	</div>
          	</div>
          	</div>
          </title-partie>
          <div ng-if ="$ctrl.selectedbardage">
           	<type-revetement-finitions></type-revetement-finitions>
          </div>`
 };

 var isolationExterieure = {
	controller: function () {
	 var ctrl = this;
	 ctrl.$onInit = function () {
		ctrl.selectedisolation = "";
	 };
	},
	template: `
          <div class="container">
    <div class="row ">
    <div class="col-lg-offset-1 col-lg-8 Blocprincipal"> 
      <div class="row">
        <div class="col-lg-offset-1 col-lg-10 ">
        	<div class="row">
    									<div class="col-lg-3 bloc-item vcenter">
    									<div class="tittreimage">Bardage</div>
    										<div class ="imgbb">
     										<input  id="Bardage" type="radio" ng-model="$ctrl.selectedbardage" value="bardage">
        								<label class = "item brique" for="Bardage" title="brique"></label>	
         						</div>  	
         					</div>
         	
         				<div class="col-lg-3 bloc-item vcenter">
    									<div class="tittreimage">Agglos</div>
    										<div class ="imgbb">
     									<input  id="agglos" type="radio" ng-model="$ctrl.selectedbardage" value="agglos">
        							<label class = "item agglos" for="agglos" title="brique"></label>
        	 					
         						</div>  	
         					</div>
           
           					<div class="col-lg-3 bloc-item vcenter">
    									<div class="tittreimage">Ossature</div>
    										<div class ="imgbb">
     									<input  id="ossature" type="radio" ng-model="$ctrl.selectedbardage" value="ossature">
        							<label class = "item ossature" for="ossature" title="ossature"></label>
        	 						
         						</div>
         	  			</div>
         	  			</div>
         	  			</div>
            		</div>
            	</div>
          	</div>
          	</div>
          </title-partie>
          <div ng-if ="$ctrl.selectedbardage">
           	<type-revetement-finitions></type-revetement-finitions>
          </div>
`
 };

 var isolationCombles = {
	controller: function () {
	 var ctrl = this;
	 ctrl.$onInit = function (){};
	},
	template: `
  <title-partie title ="Isolation des combles">
  <div class ="bloc2">
  	<div class="form-group form-inline">
      						<label for="pignon">  	Surface des combles : </label>
      				  <input class="form-control" type="text" id="pignon" ng-model="$ctrl.surfacecombles" value="surfacecombles"> m² <p>
    						</div>
  
    Epaisseur d'isolation :      R >= 5 m2.K/W (235 mm d’isolant)
   <input class="form-check-input" type="radio" ng-model="$ctrl.selected" value="r5">
   R >= 6 m2.K/W (275 mm d’isolant)  
   <input class="form-check-input" type="radio" ng-model="$ctrl.selected" value="r6">
   </div>
  </title-partie>`
 };

 var typeRevetementFinitions = {
	require: {
	 trvaux: '^^listeTravauxFacade'
	},
	bindings: {
	 support: '<?'
	},
	controller: function () {
	 var ctrl = this;
	 ctrl.$onInit = function () {
		ctrl.typerevetement = "";
	 };
	},
	template: `
	<title-partie title="Type de revetement et finitions ">


  <div ng-if = "$ctrl.trvaux.typeTravauxSelected == 'crepis' ">

    <div class="bloc">
      <div class ="cc-selector">
        <div class="row">
          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input id="gratte" type="radio" ng-model="$ctrl.typerevetement" value="gratte">
              <label class ="item gratte" for="gratte" title="gratte"> </label>
              <div class ="libelle"> Gratte </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="rustique" type="radio" ng-model="$ctrl.typerevetement" value="rustique">
              <label class = "item rustique" for="rustique" title="rustique"></label>
              <div class="libelle">Rustique </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="taloche" type="radio" ng-model="$ctrl.typerevetement" value="taloche">
              <label class = "item taloche" for="taloche" title="taloche"></label>
                <div class="libelle">Taloche </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div ng-if = "$ctrl.trvaux.typeTravauxSelected == 'peinture' ">
    <div class="bloc">
      <div class ="cc-selector">
        <div class="row">
          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="taloche" type="radio" ng-model="$ctrl.typerevetement" value="taloche">
              <label class = "item taloche" for="taloche" title="taloche"></label>
              <div class="libelle">Taloche </div>
            </div>
          </div>
          
					<div class="col-xs-6 col-lg-3">
          	<div class ="cadre">
              <input  id="pliolite" type="radio" ng-model="$ctrl.typerevetement" value="pliolite">
              <label class = "item pliolite" for="pliolite" title="pliolite"></label>
              <div class="libelle">Pliolite </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



  <div ng-if = "$ctrl.trvaux.typeTravauxSelected == 'bardage' ">
    <div class="bloc">
      <div class ="cc-selector">
        <div class="row">
          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="bois" type="radio" ng-model="$ctrl.typerevetement" value="bois">
              <label class = "item bois" for="bois" title="bois"></label>
              <div class="libelle">Bois</div>
            </div>
          </div>
          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="vinylit" type="radio" ng-model="$ctrl.typerevetement" value="vinylit">
              <label class = "item vinylit" for="vinylit" title="Vinylit"></label>
              <div class="libelle">Vinylit </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="canexel" type="radio" ng-model="$ctrl.typerevetement" value="canexel">
              <label class = "item canexel" for="canexel" title="canexel"></label>
              <div class="libelle">Canexel </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div ng-if = "$ctrl.trvaux.typeTravauxSelected == 'isolation' && $ctrl.support == 'fissure'  || $ctrl.trvaux.typeTravauxSelected == 'isolation' && $ctrl.support == 'nofissure'  ">

    <div class="bloc">
      <div class ="cc-selector">
        <div class="row">

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="gratte" type="radio" ng-model="$ctrl.typerevetement" value="gratte">
              <label class = "item gratte" for="gratte" title="gratte"></label>
            <div class="libelle">Gratte </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="rustique" type="radio" ng-model="$ctrl.typerevetement" value="rustique">
              <label class = "item rustique" for="rustique" title="rustique"></label>
            <div class="libelle">Rustique </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="taloche" type="radio" ng-model="$ctrl.typerevetement" value="taloche">
              <label class = "item taloche" for="taloche" title="taloche"></label>
              <div class="libelle">Taloche </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="bois" type="radio" ng-model="$ctrl.typerevetement" value="bois">
              <label class = "item bois" for="bois" title="bois"></label>
              <div class="libelle">Bois </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="vinylit" type="radio" ng-model="$ctrl.typerevetement" value="vinylit">
              <label class = "item vinylit" for="vinylit" title="vinylit"></label>
              <div class="libelle">Vinylit </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="canexel" type="radio" ng-model="$ctrl.typerevetement" value="canexel">
              <label class = "item canexel" for="canexel" title="canexel"></label>
              <div class="libelle">Canexel </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div ng-if = "$ctrl.trvaux.typeTravauxSelected == 'isolation' && $ctrl.support == 'bardage'   || $ctrl.trvaux.typeTravauxSelected == 'isolation' && $ctrl.support == 'agglos' ">
    <div class="bloc">
      <div class ="cc-selector">
        <div class="row">

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="gratte" type="radio" ng-model="$ctrl.typerevetement" value="gratte">
              <label class = "item canexel" for="gratte" title="gratte"></label>
              <div class="libelle">Finition grattée </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="rustique" type="radio" ng-model="$ctrl.typerevetement" value="rustique">
              <label class = "item rustique" for="rustique" title="rustique"></label>
              <div class="libelle">Finition rustique </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="taloche" type="radio" ng-model="$ctrl.typerevetement" value="taloche">
              <label class = "item taloche" for="taloche" title="taloche"></label>
              <div class="libelle">Finition talochée </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div ng-if = "$ctrl.trvaux.typeTravauxSelected == 'isolation' && $ctrl.support == 'ossature' ">
    <div class="bloc">
      <div class ="cc-selector">
        <div class="row">
          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="taloche" type="radio" ng-model="$ctrl.typerevetement" value="taloche">
              <label class = "item taloche" for="taloche" title="taloche"></label>
              <div class="libelle">Taloche </div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="bois" type="radio" ng-model="$ctrl.typerevetement" value="bois">
              <label class = "item bois" for="bois" title="bois"></label>
              <div class="libelle">Bois</div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="vinylit" type="radio" ng-model="$ctrl.typerevetement" value="vinylit">
              <label class = "item vinylit" for="vinylit" title="vinylit"></label>
              <div class="libelle">Vinylit</div>
            </div>
          </div>

          <div class="col-xs-6 col-lg-3">
            <div class ="cadre">
              <input  id="canexel" type="radio" ng-model="$ctrl.typerevetement" value="canexel">
              <label class = "item canexel" for="canexel" title="canexel"></label>
              <div class="libelle">Canexel </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  


  <div ng-if ="$ctrl.typerevetement"><description-facade> </description-facade></div>
</title-partie>`
 };

 var descriptionFacade = {
	require : {
	 form : '^form'
	},
	controller: function ($scope) {
	 var ctrl = this;
	 console.log(ctrl.index);
	 class Facade {
		constructor(id, longueur, largeur, totaleface) {
		 this.id = id;
		 this.longueur = longueur;
		 this.largeur = largeur;
		 this.totaleface = totaleface;
		}
	 }
	 ctrl.$onInit = function () {

		ctrl.nbrface = 0;
		ctrl.tableaufacade = [];
		ctrl.index;
		ctrl.validation;
		ctrl.pignon = false;
		ctrl.regex = /^[0-9]+$/;
	 };
	 ctrl.initialisation = function () {
		ctrl.tableaufacade = [];
		var i = 0;
		for (; i < ctrl.nbrface; i++) {
		 var p1 = new Facade(i + 1, 0, 0, 0);
		 ctrl.tableaufacade.push(p1);
		 ctrl.index = 0;
		}

		angular.element(document).find("a").eq(0).css("display", "none");
	 };

	 ctrl.add = function(){
	 };


	 ctrl.next = function () {
		console.log(ctrl.tableaufacade[ctrl.index].totaleface);

		if (ctrl.tableaufacade[ctrl.index].totaleface == 0 && ctrl.tableaufacade[ctrl.index].longueur === 0 || ctrl.tableaufacade[ctrl.index].totaleface == 0 && ctrl.tableaufacade[ctrl.index].largeur === 0 )
		{
		 console.log('je rentre');
		 angular.element(document.getElementsByClassName("refus")).css( "display", "block" );
		 return;
		}

		if (ctrl.index == 0) {
		 angular.element(document).find("a").eq(0).css("display", "inline");
		}
		angular.element(document.getElementsByClassName("refus")).css( "display", "none" );
		ctrl.index++;
		if (ctrl.index + 1 == ctrl.tableaufacade.length) {
		 angular.element(document).find("a").eq(1).css("display", "none");
		}
	 };
	 ctrl.test = function (element) {
	 };
	 ctrl.previous = function () {
		ctrl.index--;
		angular.element(document.getElementsByClassName("refus")).css( "display", "none" );
		if (ctrl.index !== ctrl.tableaufacade.length) {
		 angular.element(document).find("a").eq(1).css("display", "inline");
		}
		if (ctrl.index == 0) {
		 angular.element(document).find("a").eq(0).css("display", "none");
		}};
	},
	template: `
 		<title-partie title ="Description façade">
    	<div class="blocFacade">     
    		<div ng-class ="{on:onOff}" class="facade"> 
    		 	<div class ="form-group row form-inline">
      			<label class="form-check-label"> 
      				Nombre de façades : <select ng-model="$ctrl.nbrface" ng-options="facade for facade in [8,7,6,5,4,3,2,1]" ng-change ="$ctrl.initialisation()" class="form-control"><option value=""></option> </select>  <br/>
      		</div>
      			<div ng-if ="$ctrl.tableaufacade[0]">  
      				Façade n°{{$ctrl.index+1}}
      				<br> <br>
      				Surface totale à traiter : {{$ctrl.tableaufacade[$ctrl.index].longueur * $ctrl.tableaufacade[$ctrl.index].largeur}} M²
      				<br><br>
      				 	<div class ="form-group row form-inline">
      					<div class="form-group form-horizontal">
      						<label class="control-label col-sm-3" for="longueur">Longueur :</label>
      						<div class="col-sm-3">
       							<input type="text" id="longueur" name="longueur" class="form-control" ng-model="$ctrl.tableaufacade[$ctrl.index].longueur" required ng-pattern="$ctrl.regex" id ="longueur">
       							  <div ng-messages="$ctrl.form.longueur.$error" style="color:maroon" role="alert">
    									<div ng-message="pattern">Veuillez choisir une unité de mesure correct </div> </div>
      							</div>
      						<label class="control-label col-sm-3" for="largeur">Largeur :</label>
      						<div class="col-sm-2">  
       							<input type="text" id="largeur" name="largeur" class="form-control" ng-model="$ctrl.tableaufacade[$ctrl.index].largeur" required ng-pattern="$ctrl.regex"><br><br>
       							  <div ng-messages="$ctrl.form.largeur.$error" style="color:maroon" role="alert">
    									<div ng-message="pattern">Veuillez choisir une unité de mesure correct </div> </div>
      						</div><br> <br> <br>
      						<label class="control-label col-sm-3" for="totalefacade">Ou sur totale de la façade en m² :</label>
     							<div class="col-sm-2">          
      							<input type="text" id="totalefacade" class="form-control" ng-model="$ctrl.tableaufacade[$ctrl.index].totaleface" required ng-pattern="$ctrl.regex" 
      							ng-disabled="$ctrl.tableaufacade[$ctrl.index].largeur > 0 || $ctrl.tableaufacade[$ctrl.index].longueur > 0 "> <br><br>
      							
      						</div>
      							</div>
     					</div>
     					<label for ="Pignon">Pignon :  </label>
     					<input class="form-check-input" type ="radio" ng-model="$ctrl.pignon" value="false"> Non <input class="form-check-input" type ="radio" ng-model="$ctrl.pignon" value="true"> Oui</label>
     					<div ng-if ="$ctrl.pignon ==='true'">  
     						<div class="form-group form-inline">
      						<label for="pignon">Hauteur pignon :</label>
      						<input type="email" class="form-control" id="pignon" placeholder="Pignon">
    						</div>
    					</div>
     			  	</div>
     		</div>  
     		
     		<a !onOff; $ctrl.previous()"><img src="images/logo/flecheg.png"></a>
     		<a href="" ng-click="onOff=!onOff; $ctrl.next()"><img src="images/logo/fleched.png"></a>
     		<div class ="refus">
     		Veuillez compléter votre façade avant !
     		</div>  		
     				</label>
     				 	</br></br><button type="button" ng-click="$ctrl.validation = 'true'" class="btn btn-primary">Calculer la surface totale des façades à traiter</button>
			</div>
		</title-partie>
		<div ng-if="$ctrl.validation"><lieu-date-travaux></lieu-date-travaux></div>`
 };




 var lieuDateTravaux =
	 {
		controller: function () {
		 var ctrl = this;
		 ctrl.$onInit = function () {
		 };
		},
		template: `
		<title-partie title ="Lieu Date des travaux">
    	<div class="bloc2">     
    		<div class="facade">  
      		<label class="form-check-label">
          	<div class="form-group form-horizontal">
    					<label class="control-label col-sm-3" for ="département"> Departement </label>
          		<div class="col-sm-3">
								<select ng-model="$ctrl.departement" id="departement" ng-options="lieutravaux for lieutravaux in ['10 - Aube','51 - Marne','52 - Haute-Marne','54 - Meurthe et Moselle','55 - Meuse','57 - Moselle','67 - Bas-Rhin','68 - Haut-Rin','88 - Vosges', 'Autre département']"  class="form-control"><option value=""></option> 
								</select> 
							</div>
							<label class="control-label col-sm-3"  for ="travaux"> Date prévue pour les travaux </label>
              <div class="col-sm-3">
								<select ng-model="$ctrl.dateTravaux" id="datetravaux" ng-options="datetravaux for datetravaux in ['Au plus vite','Dans moins de trois mois','dans moins de 6 mois', 'Dans l année','Pas de date fixe']" class="form-control"><option value=""></option> 
								</select>
							</div>
                  <br> <br> <br>
          		<label class="control-label col-sm-3"  for ="construction"> Type de construction </label>
          		<div class="col-sm-3">
								<select ng-model="$ctrl.typeConstruction" id="construction" ng-options="stars for stars in ['Maison individuelle','Immeuble','Habitation classé','local industriel','Muret','Autre construction']"  class="form-control"><option value=""></option> </select> </div>                                	
            	<label class="control-label col-sm-3"  for ="codepostal"> Code postal :</label>
            	<div class="col-sm-3">
								<input-code-postal id="codepostal"></input-code-postal>
            	</div> 
            <br><br><br>                                   	
            	<label class="control-label col-sm-3" value="nomvilletravaux" for ="nomville">Nom de Ville : </label>
            	<div class="col-sm-3">
							<input-letter id="nomville"></input-letter>
           	 	</div> 
				</div>
				<br><br><br>
				<label for ="dateconstruction">Date de construction :  </label>
				   <input class="form-check-input" type ="radio" ng-model="$ctrl.tva" value="moins"> Moins de 2 ans (TVA 20,0%) <input class="form-check-input" type ="radio" ng-model="$ctrl.tva" value="plus"> Plus de 2 ans ( TVA 10,0%) </label></div>
			</div>		
		</title-partie>
		<div ng-if = "$ctrl.tva">
			<personne></personne>
		</div>`
	 };




 angular.module('formEnduiest', ['formApp','filter'])
	 .component('listeTravauxFacade', listeTravauxFacade)
	 .component('typeRevetementFinitions', typeRevetementFinitions)
	 .component('crepisFacade', crepisFacade)
	 .component('peintureFacade', peintureFacade)
	 .component('bardage', bardage)
	 .component('isolationExterieure', isolationExterieure)
	 .component('descriptionFacade', descriptionFacade)
	 .component('lieuDateTravaux', lieuDateTravaux);

})();