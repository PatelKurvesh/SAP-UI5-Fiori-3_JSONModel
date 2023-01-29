sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		// createMyModel : function(){
		// 	//Step 1)Declare the brand new JSONModel.
		// 	var oModel = new sap.ui.model.json.JSONModel();
		// 	//Step 2)Set the data to the model.
		// 	oModel.loadData("model/student.json");
			
		// 	return oModel;
		// }
		
		
		//This function is use for multiple data model sPath is use for multiple model.
		createMyModel : function(sPath){
			//Step 1)Declare the brand new model.
			var oModel = new sap.ui.model.json.JSONModel();
			//Step 2)Set the data to the model.
			oModel.loadData(sPath);
			return oModel;
		}

	};
});