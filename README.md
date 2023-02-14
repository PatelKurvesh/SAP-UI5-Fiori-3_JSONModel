# SAP-UI5-Fiori-3_JSONModel

Two types of JSON Model:-

1)Named Model. <br>
2)Default Model.

In JSONModel we have four way to bind our data model.
1) Set data in controller if you have small amount of data.
2) Create separate file for data like (data.json) and stored in model folder.
3) this is use for code reusabilty in third way we need to create one function in models.js and in this function we do two steps 
	(1)Declare the brand new model. (2)Set the data to the model. and return. 
	after that in controller add dependencies in scaffolding  and than (3)Set data to the App / View / controll level.
4)define model in manifest.json for a gobal json model.

-->if you have multiple data file than u need to use sPath see models.js file and read comment for understanding.
	and than u need to define path in controller.