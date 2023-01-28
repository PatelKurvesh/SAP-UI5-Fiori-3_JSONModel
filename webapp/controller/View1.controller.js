sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-3_JSONModel.controller.View1", {
		
		onInit : function(){
			//<<--------------------------First Way--------------------------------->>
			//First Way to use JSONModel.
				//Step 1)Declare a brand new model.
				var oModel = new sap.ui.model.json.JSONModel();
				//Step 2)Set a Data to the model.
				oModel.setData({
					"student":{
						"name":"Kurvesh",
						"no":20012012037,
						"sem":8
					}
				});
				//Step 3)Set the model to App / View / Controll level.
				this.getView().setModel(oModel);
		
			
			//<<---------------------------Second Way--------------------------------->>
			//Second Way to use JSONModel.
				//Step 1)Declare the brand new model.
				
				//Step 2)Set the data to the model.
				//Step 3)Set the model to the App / View / Controll Level.
			
		}
		
		

	});
});