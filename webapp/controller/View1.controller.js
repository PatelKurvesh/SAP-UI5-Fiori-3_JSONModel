sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"GithubSAP-UI5-Fiori-3_JSONModel/model/models"      //write perfect path [remember .js file]
], function(Controller,dataModel) {
	"use strict";

	return Controller.extend("GithubSAP-UI5-Fiori-3_JSONModel.controller.View1", {
		
		onInit : function(){
			//<<--------------------------First Way--------------------------------->>
			// //First Way to use JSONModel.
			// 	//Step 1)Declare a brand new model.
			// 	var oModel = new sap.ui.model.json.JSONModel();
			// 	//Step 2)Set a Data to the model.
			// 	oModel.setData({
			// 		"student":{
			// 			"name":"Kurvesh",
			// 			"no":20012012037,
			// 			"sem":8
			// 		}
			// 	});
			// 	//Step 3)Set the model to App / View / Controll level.
			// 	this.getView().setModel(oModel);
		
			
			//<<---------------------------Second Way--------------------------------->>
			// //Second Way to use JSONModel.
			// 	//Step 1)Declare the brand new model.
			// 	var oModel = new sap.ui.model.json.JSONModel();
			// 	//Step 2)Set the data to the model.
			// 	oModel.loadData("model/student.json");
			// 	//Step 3)Set the model to the App / View / Controll Level.
			// 	this.getView().setModel(oModel);
				
				
			//<<----------------------------Third Way----------------------------------->>
			// //Third Way to use JSONModel
			// var oModel = dataModel.createMyModel();
			
			// //Step 3)Set the model to the App / View / controll level.
			// this.getView().setModel(oModel);
			
			
			
			//If you have more than one model than u need to use named model because ui have only one default model 
			//if you don't use named model than ui automaticly set last model as a default model.
			var ooModel = dataModel.createMyModel("model/student.json");
			var sAge = dataModel.createMyModel("model/sAge.json");
			//Step 3)Set the data to the App / View / Controll Level.
			this.getView().setModel(ooModel);
			this.getView().setModel(sAge,"studAge");
		
			
			
			
			
		}
		
		

	});
});