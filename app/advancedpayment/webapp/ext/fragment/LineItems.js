sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onPress: async function(oEvent) {
            debugger
            MessageToast.show("Custom handler invoked.");

            var po_number = oEvent.oSource.oParent.oParent.mAggregations.items[0].mAggregations.items[1].mProperties.value
            var contract_no = oEvent.oSource.oParent.oParent.mAggregations.items[1].mAggregations.items[1].mProperties.value
            var vendor_code = oEvent.oSource.oParent.oParent.mAggregations.items[4].mAggregations.items[1].mProperties.value

            debugger
            var fname = "getcallfromodata";
            let fname1 = sap.ui.getCore().byId("advancedpayment::poheaderObjectPage--fe::CustomSubSection::PoLineitems-innerGrid").getModel().bindContext(`/${fname}(...)`);
            fname1.setParameter('po_number', po_number);
            fname1.setParameter('contract_no', contract_no);
            fname1.setParameter('vendor_code', vendor_code);
            await fname1.execute();
            console.log("func completed");

            //DO NOT DELETE THIS 
            // var path = this.base.getView().mAggregations.content[0].mAggregations.sections[6].mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mBindingInfos.items.binding;
            // path.filter(
            //     new sap.ui.model.Filter({
            //         path: "po_number",
            //         operator: sap.ui.model.FilterOperator.EQ,
            //         value1: po_number
            //     })
            // ); 
            // path.filter(
            //     new sap.ui.model.Filter({
            //         path: "contract_no",
            //         operator: sap.ui.model.FilterOperator.EQ,
            //         value1: contract_no
            //     })
            // ); 
            // path.filter(
            //     new sap.ui.model.Filter({
            //         path: "vendor_code",
            //         operator: sap.ui.model.FilterOperator.EQ,
            //         value1: vendor_code
            //     })
            // ); 



            
            // let context = fname1.getBoundContext();
			// let getdata = context.getValue();
			// let result = getdata.value;
			// result = JSON.parse(result);

            
        }
    };
});
