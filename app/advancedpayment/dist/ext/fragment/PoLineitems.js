sap.ui.define(["sap/m/MessageToast"],function(e){"use strict";return{onRowSelected:async function(e){debugger;var t=e.getSource().getItems();for(let r=0;r<t.length;r++){if(t[r].getSelected()==true){let t=sap.ui.getCore().byId("advancedpayment::poheaderObjectPage--fe::CustomSubSection::LineItems--input-a").mProperties.value;let i=e.oSource.oParent.mAggregations.items[0].mAggregations.items[r].mAggregations.cells[0].mProperties.text;let n="fm1";var a=this.getModel().bindContext(`/${n}(...)`);a.setParameter("id",t);a.setParameter("content",i);a.setParameter("type","checked");await a.execute()}else{let t=sap.ui.getCore().byId("advancedpayment::poheaderObjectPage--fe::CustomSubSection::LineItems--input-a").mProperties.value;let i=e.oSource.oParent.mAggregations.items[0].mAggregations.items[r].mAggregations.cells[0].mProperties.text;let n="fm1";var a=this.getModel().bindContext(`/${n}(...)`);a.setParameter("id",t);a.setParameter("content",i);a.setParameter("type","unchecked");await a.execute()}}sap.ui.getCore().byId("advancedpayment::poheaderObjectPage--fe::CustomSubSection::Addediteminfo--table").mBindingInfos.items.binding.refresh()}}});