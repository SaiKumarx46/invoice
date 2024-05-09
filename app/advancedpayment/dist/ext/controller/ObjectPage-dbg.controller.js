sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('advancedpayment.ext.controller.ObjectPage', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf advancedpayment.ext.controller.ObjectPage
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing:
			{
				onBeforeBinding: async function (oEvent) 
				{
					
					
				},
				onAfterBinding: async function () {
					debugger;
					
					var path = this.base.getView().mAggregations.content[0].mAggregations.sections[6].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mBindingInfos.items.binding;
					var path1 = window.location.href;
					var id =  path1.match(/'([^']+)'/)[1];
					path.filter(
						new sap.ui.model.Filter({
							path: "po_number",
							operator: sap.ui.model.FilterOperator.EQ,
							value1: id
						})
					); 

					var poLineitempath = this.base.getView().mAggregations.content[0].mAggregations.sections[3].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mBindingInfos.items.binding;
					poLineitempath.filter(
						new sap.ui.model.Filter({
							path: "po_number",
							operator: sap.ui.model.FilterOperator.EQ,
							value1: id
						})
					); 


					var Addediteminfopath = this.base.getView().mAggregations.content[0].mAggregations.sections[4].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mBindingInfos.items.binding;
					Addediteminfopath.filter(
						new sap.ui.model.Filter({
							path: "po_number",
							operator: sap.ui.model.FilterOperator.EQ,
							value1: id
						})
					); 

				}
			}

		}
	});
});
