sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';

    return {
        onRowSelected: async function (oEvent) {
            debugger
            
            var count = oEvent.getSource().getItems();
            for (let i = 0; i < count.length; i++) 
            {
                if (count[i].getSelected() == true) 
                {
                    let poNum = sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::CustomSubSection::LineItems--input-a').mProperties.value;
                    let lineItemId = oEvent.oSource.oParent.mAggregations.items[0].mAggregations.items[i].mAggregations.cells[0].mProperties.text;
                    let funcname = "fm1";
                    var oFunc = this.getModel().bindContext(`/${funcname}(...)`);
                    oFunc.setParameter('id', poNum);
                    oFunc.setParameter('content', lineItemId);
                    oFunc.setParameter('type', 'checked');
                    await oFunc.execute();
                }
                else
                {
                    let poNum = sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::CustomSubSection::LineItems--input-a').mProperties.value;
                    let lineItemId = oEvent.oSource.oParent.mAggregations.items[0].mAggregations.items[i].mAggregations.cells[0].mProperties.text;
                    let funcname = "fm1";
                    var oFunc = this.getModel().bindContext(`/${funcname}(...)`);
                    oFunc.setParameter('id', poNum);
                    oFunc.setParameter('content', lineItemId);
                    oFunc.setParameter('type', 'unchecked');
                    await oFunc.execute();
                }
            }
            sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::CustomSubSection::Addediteminfo--table').mBindingInfos.items.binding.refresh()
            // let array = [];
            // let item_array = [];
            // for (let i = 0; i < count.length; i++) {
            //     if (count[i].getSelected() == true) {
            //         debugger
            //         // array.push(count[i]);
            //         var data = [];
            //         let array_length = count[i].mAggregations.cells;

            //         item_array.push({

                        // "itemno": array_length[0].getText(),
                        // "po_number": array_length[1].getText(),
                        // "item_desc": array_length[2].getText(),
                        // "item_desc_cond": array_length[3].getText(),
                        // "plant": array_length[4].getText(),
                        // "unit_price": array_length[5].getText(),
                        // "quantity": array_length[6].getText(),
                        // "cgst_percentage": array_length[7].getText(),
                        // "sgst_percentage": array_length[8].getText(),
                        // "cgst_value": array_length[9].getText(),
                        // "sgst_value": array_length[10].getText(),
                        // "amount": array_length[11].getText(),
                    // })
                // }
                // var funcname = "fm1";
                // let oFunc = sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::ObjectPage').getModel().bindContext.getModel().bindContext(`/${funcname}(...)`);
                // let oFunc = sap.ui.getCore().byId('advancedpayment::poheaderObjectPage').getModel().bindContext(`/${funcname}(...)`);
               
                
            // }

        
            

        }
    };
});