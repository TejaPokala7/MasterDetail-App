sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment"
 ], function (Controller, Fragment) {
    "use strict";
    return Controller.extend("task1.controller.App", {
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
          }
        ]
      };
      let oModel=new sap.ui.model.json.JSONModel(data);
      this.getView().setModel(oModel,"employee"); 
      //this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
      //var oModel = new sap.ui.model.json.JSONModel();
      //oModel.loadData("../model/Employees.json");
       /* var oTable = this.getView().byId("empTab");
       var oTemplate = new sap.m.ColumnListItem({
        cells:
        [
          new sap.m.Text({ text: "{employee>Emp-id}"}),
          new sap.m.Text({ text: "{employee>FirstName}"}),
          new sap.m.Text({ text: "{employee>LastName}"}),
          new sap.m.Text({ text: "{employee>Email}"}),
          new sap.m.Button({ text: "Edit",icon:"sap-icon://edit",press:".onOpenDialog",id:"helloDialogButton"}),
        ]
       });
        
       oTable.bindItems({
        path: "employee>/Employees",
        template: oTemplate
       }); */

   },
   onOpenDialog : function (oEvent) {
      var oView = this.getView();
      var path = oEvent.getSource().getBindingContext("employee").getPath();
       // create dialog lazily
       if (!this.byId("openDialog")) {
        // load asynchronous XML fragment
        Fragment.load({
          id: oView.getId(),
          name: "task1.view.Dialog",
          controller: this
        }).then(function (oDialog) {
         // connect dialog to the root view 
         //of this component (models, lifecycle)
         oView.addDependent(oDialog);
         oDialog.bindElement({
         path: path,
         model: "employee"
        });
       oDialog.open();
    });
    }
    },
   onCloseDialog : function () {
     this.byId("openDialog").destroy();
   }
    });
 });