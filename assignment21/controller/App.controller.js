sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/ui/model/FilterType"
 ], function (Controller, Filter, FilterOperator, FilterType) {
    "use strict";
    return Controller.extend("task2.controller.App", {
       onInit : function () {
         var data = {
        "Employees": [
          {
            "Emp-id": 34,
            "FirstName": "sai",
            "LastName": "pokala",
            "Email": "saiteja@gmail.com"
          },
          {
            "Emp-id": 35,
            "FirstName": "mahesh",
            "LastName": "puram",
            "Email": "mahesh@gmail.com"
            
          },
          {
            "Emp-id": 36,
            "FirstName": "ram",
            "LastName": "panugula",
            "Email": "ram@gmail.com"
          },
          {
            "Emp-id": 37,
            "FirstName": "vikas",
            "LastName": "puri",
            "Email": "vikas@gmail.com"
          },
          {
            "Emp-id": 38,
            "FirstName": "vijay",
            "LastName": "paragati",
            "Email": "vijay@gmail.com"
          },
          {
            "Emp-id": 34,
            "FirstName": "sai",
            "LastName": "pokala",
            "Email": "saiteja@gmail.com"
          },
          {
            "Emp-id": 35,
            "FirstName": "mahesh",
            "LastName": "puram",
            "Email": "mahesh@gmail.com"
            
          },
          {
            "Emp-id": 36,
            "FirstName": "ram",
            "LastName": "panugula",
            "Email": "ram@gmail.com"
          },
          {
            "Emp-id": 37,
            "FirstName": "vikas",
            "LastName": "puri",
            "Email": "vikas@gmail.com"
          },
          {
            "Emp-id": 38,
            "FirstName": "vijay",
            "LastName": "paragati",
            "Email": "vijay@gmail.com"
          },
          {
            "Emp-id": 34,
            "FirstName": "sai",
            "LastName": "pokala",
            "Email": "saiteja@gmail.com"
          },
          {
            "Emp-id": 35,
            "FirstName": "mahesh",
            "LastName": "puram",
            "Email": "mahesh@gmail.com"
            
          },
          {
            "Emp-id": 36,
            "FirstName": "ram",
            "LastName": "panugula",
            "Email": "ram@gmail.com"
          },
          {
            "Emp-id": 37,
            "FirstName": "vikas",
            "LastName": "puri",
            "Email": "vikas@gmail.com"
          },
          {
            "Emp-id": 38,
            "FirstName": "vijay",
            "LastName": "paragati",
            "Email": "vijay@gmail.com"
          }
        ]
      };
      let oModel=new sap.ui.model.json.JSONModel(data);
      this.getView().setModel(oModel,"employee");  

     },
     /* onSelectionChange: function(oEvent){
      var EmpId = oEvent.getSource().getSelectedItem().getBindingContext().getProperty("Emp-id")
      this.getOwnerComponent().getRouter()
                .navTo("detail","{Emp-id: EmpId}",);

     } */
    onPress: function(oEvent){
      var EmpId = oEvent.getParameter("listItem").getBindingContext().getProperty("Emp-id");
      var oFilter = new Filter("Emp-id", FilterOperator.EQ, EmpId);
      this.getView().byId("empt").getBinding("items").filter(oFilter, FilterType.Application);
      
     } 
    });
 });