const cds = require('@sap/cds');
const { parseArgs } = require('util');
const axios = require('axios');
const { getAxiosConfigWithDefaults } = require('@sap-cloud-sdk/http-client/dist/http-client');
module.exports = cds.service.impl(async function () {
  
    let {  polineitem,checkedpolineitem} = this.entities;
    //     bank,
    //     account,
    //     customer
    

    this.on('getcallfromodata', async (req) => 
    {
        debugger
         console.log("startttttt")
        var po = req.data.po_number
        var contract = req.data.contract_no
        var vendor = req.data.vendor_code
        console.log("venddddd",vendor)
        var BPA = await cds.connect.to('INVOICE_DEST');
        let destt = await BPA.get(`/sap/opu/odata/sap/ZMM_ADVANCE_PAY_SRV/buyerInfoSet(poNo='${po}',contractNo='${contract}',vendorCode='${vendor}')?$expand=advancePaymentLineItemsSet`);
        console.log("getcalll",destt)

        // let destt = JSON.parse(values);
        console.log("arraylentth",destt.advancePaymentLineItemsSet.length)

        console.log("item no",destt.advancePaymentLineItemsSet[0].ItemNumber)
        console.log("item no",destt.advancePaymentLineItemsSet[1].ItemNumber)
        console.log("item no",destt.advancePaymentLineItemsSet[2].ItemNumber)

        for(var i = 0 ;i < destt.advancePaymentLineItemsSet.length ; i++){

       await INSERT.into(polineitem).entries({ 
          itemno: destt.advancePaymentLineItemsSet[i].ItemNumber,
           po_number:destt.poNo ,
            item_desc: destt.advancePaymentLineItemsSet[i].Itemdescription ,
            plant : destt.advancePaymentLineItemsSet[i].Itemdescription,
            unit_price : parseFloat(destt.advancePaymentLineItemsSet[i].unitPrice),
            quantity : parseFloat(destt.advancePaymentLineItemsSet[i].lineItemQuantity),  
            cgst_percentage :parseFloat(destt.advancePaymentLineItemsSet[i].cgstPerc),
            sgst_percentage :parseFloat(destt.advancePaymentLineItemsSet[i].sgstPerc),
            cgst_value :parseFloat(destt.advancePaymentLineItemsSet[i].cgstValue),
            sgst_value :parseFloat(destt.advancePaymentLineItemsSet[i].sgstValue),
            vendor_code : destt.advancePaymentLineItemsSet[i].vendorCode
            });

        }


        console.log("getcalll",destt)


      });

      
     this.on('fm1' , async (req,next) => 
     {
      debugger
      if(req.data.type == 'checked')
      {
        await UPDATE(polineitem).set ({checked  : 'true'}).where({ itemno:req.data.content , po_number:req.data.id});
      }
      else
      {
        await UPDATE(polineitem).set ({checked  : 'false'}).where({ itemno:req.data.content , po_number:req.data.id});
      }
      return next();
     });


     this.on('fm2' , async (req,next) =>
    {
      debugger
      // if(req.data.quantity)
      // {
      //   let table_for_quantity = await SELECT.from(polineitem).where({po_number : req.data.poNum , itemno : req.data.itemId})
      //   if (table_for_quantity[0].quantity<req.data.quantity) 
      //   {
      //     //Do the validations for popping up error
      //   }
        let table = await SELECT.from(checkedpolineitem).where({po_number : req.data.poNum,itemno : req.data.itemId});
        var quantity = parseInt(table[0].quantity);
        var unit_price = parseInt(table[0].unit_price);
        var amounts = quantity*unit_price;
        var amount_in_string = amounts.toString();
        var afterUpdate = await UPDATE(checkedpolineitem).set({amount:amount_in_string}).where({po_number : req.data.poNum,itemno : req.data.itemId});
        let table_1 = await SELECT.from(checkedpolineitem).where({ po_number : req.data.poNum});
        for (let i = 0; i < table_1.length; i++) {
          table_1[i].cgst_percentage;
        }
      
      
     });


     this.on('cgst' , async (req,next)=>
      {
        debugger
        let table = await SELECT.from(checkedpolineitem).where({ po_number : req.data.poNum , itemno : req.data.itemId});
        if(table)
        {
          await UPDATE(checkedpolineitem).set({cgst_value : req.data.cgst , sgst_value : req.data.sgst}).where({po_number : req.data.poNum , itemno : req.data.itemId})
        }
      });

      this.on('amount_validate' , async (req,next)=>
      {
        debugger
       
      });
     });


    




