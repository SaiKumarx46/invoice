sap.ui.define([
    "sap/m/MessageToast"
], function (MessageToast) {
    'use strict';


    return {
        submit: async function (oEvent) 
        {
            debugger
            var quantity = oEvent.mParameters.value;
            var itemId = oEvent.getSource().getParent().mAggregations.cells[0].mProperties.text;
            var unitPrice = oEvent.getSource().getParent().mAggregations.cells[4].mProperties.text;
            var cgst = oEvent.getSource().getParent().mAggregations.cells[6].mProperties.text;
            var sgst = oEvent.getSource().getParent().mAggregations.cells[7].mProperties.text;
            let poNum = sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::CustomSubSection::LineItems--input-a').mProperties.value;
            let funcname = "fm2";
            var oFunc = this.getModel().bindContext(`/${funcname}(...)`);
            oFunc.setParameter('poNum', poNum);
            oFunc.setParameter('itemId', itemId);
            oFunc.setParameter('quantity', quantity);
            oFunc.setParameter('unitPrice', unitPrice);
            oFunc.setParameter('sgst_value', cgst);
            oFunc.setParameter('cgst_value', sgst);
            await oFunc.execute();
            debugger
            sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::CustomSubSection::Addediteminfo--table').mBindingInfos.items.binding.refresh()

            var total_amount = 0;
            var total_Sgst = 0;
            var total_Cgst = 0;
            let count = oEvent.oSource.oParent.oParent.mAggregations.items;
            for (let i = 0; i < count.length; i++) 
            {
                debugger
                var amount = parseFloat(count[i].mAggregations.cells[10].mProperties.text)           
                total_amount = parseFloat(total_amount) + amount;
                var cgst_percentage = parseFloat(count[i].mAggregations.cells[6].mProperties.text);
                var sgst_percentage = parseFloat(count[i].mAggregations.cells[7].mProperties.text);
                var res_cgst = JSON.stringify((amount*cgst_percentage)/100);
                var res_sgst = JSON.stringify((amount*sgst_percentage)/100);
                let funcname = "cgst";
                var oFunc = this.getModel().bindContext(`/${funcname}(...)`);
                oFunc.setParameter('poNum', poNum);
                oFunc.setParameter('itemId', count[i].mAggregations.cells[0].mProperties.text);
                oFunc.setParameter('cgst', res_cgst);
                oFunc.setParameter('sgst', res_sgst);
                await oFunc.execute();
                var Sgst = parseFloat(count[i].mAggregations.cells[9].mProperties.text)
                total_Sgst = parseFloat(total_Sgst) + Sgst;
                var Cgst = parseFloat(count[i].mAggregations.cells[8].mProperties.text)
                total_Cgst = parseFloat(total_Cgst) + Cgst;
                // var totalval = parseFloat(count[i].mAggregations.cells[7].mProperties.text)
                // totalval = parseFloat(totalval) + total_amount + total_Sgst + total_Cgst
                
            }
            sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::CustomSubSection::Addediteminfo--table').mBindingInfos.items.binding.refresh()
            sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::CustomSection::Totals-innerGrid').oParent.mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].oParent.mAggregations.content[0].mAggregations.content.mAggregations.items[0].mAggregations.items[1].mAggregations.items[0].setValue(total_amount);
            sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::CustomSection::Totals-innerGrid').oParent.mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].oParent.mAggregations.content[0].mAggregations.content.mAggregations.items[1].mAggregations.items[1].mAggregations.items[0].setValue(total_Cgst);
            sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::CustomSection::Totals-innerGrid').oParent.mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].oParent.mAggregations.content[0].mAggregations.content.mAggregations.items[2].mAggregations.items[1].mAggregations.items[0].setValue(total_Sgst);
            // sap.ui.getCore().byId('advancedpayment::poheaderObjectPage--fe::CustomSection::Totals-innerGrid').oParent.mAggregations._grid.mAggregations.content[0].mAggregations._grid.mAggregations.content[0].oParent.mAggregations.content[0].mAggregations.content.mAggregations.items[3].mAggregations.items[1].mAggregations.items[0].setValue(totalval);
        }
    }

});