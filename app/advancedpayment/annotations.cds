using MyService as service from '../../srv/service';
annotate service.poheader with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'po_number',
                Value : po_number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'contract_number',
                Value : contract_number,
            },
            {
                $Type : 'UI.DataField',
                Label : 'vendor_code',
                Value : vendor_code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'vendor_name',
                Value : vendor_name,
            },
            {
                $Type : 'UI.DataField',
                Label : 'vendor_gstin',
                Value : vendor_gstin,
            },
            {
                $Type : 'UI.DataField',
                Label : 'status',
                Value : status,
            },
            {
                $Type : 'UI.DataField',
                Label : 'purchase_doc',
                Value : purchase_doc,
            },
            {
                $Type : 'UI.DataField',
                Label : 'document_date',
                Value : document_date,
            },
            {
                $Type : 'UI.DataField',
                Label : 'company_code',
                Value : company_code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'purchasing_org',
                Value : purchasing_org,
            },
            {
                $Type : 'UI.DataField',
                Label : 'comment',
                Value : comment,
            },
            {
                $Type : 'UI.DataField',
                Label : 'registration_id',
                Value : registration_id,
            },
        ],
    },
    UI.Facets : [],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Value : po_to_invoice.advance_payment_no,
            Label : 'advance_payment_no',
        },
        {
            $Type : 'UI.DataField',
            Value : status,
            Criticality : status_criticality,
        },
        {
            $Type : 'UI.DataField',
            Value : purchase_doc,
            Label : 'purchase_doc',
        },
        {
            $Type : 'UI.DataField',
            Label : 'vendor_name',
            Value : vendor_name,
        },
        {
            $Type : 'UI.DataField',
            Value : document_date,
            Label : 'document_date',
        },
        {
            $Type : 'UI.DataField',
            Value : po_to_invoice.advance_payment_value,
            Label : 'advance_payment_value',
        },
        {
            $Type : 'UI.DataField',
            Value : company_code,
            Label : 'company_code',
        },
        {
            $Type : 'UI.DataField',
            Value : purchasing_org,
            Label : 'purchasing_org',
        },
        {
            $Type : 'UI.DataField',
            Value : comment,
            Label : 'comment',
        },
        {
            $Type : 'UI.DataField',
            Value : registration_id,
            Label : 'registration_id',
        },
        {
            $Type : 'UI.DataFieldForIntentBasedNavigation',
            SemanticObject : 'advancepaymentform',
            Action : 'display',
            Label : 'With-PO Advance payment request',
        },
    ],
);


annotate service.poheader with @(Capabilities.Deletable: false);




annotate service.poheader with @(
    UI.SelectionFields : [
        po_to_invoice.advance_payment_no,
        creation_date,
        status,
        vendor_name,
    ]
);
annotate service.poheader with {
    status @Common.Label : 'Status '
};
annotate service.poheader with {
    vendor_name @Common.Label : 'vendor_name'
};
annotate service.poheader with {
    status @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'poheader',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : status,
                    ValueListProperty : 'status',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.invoice with {
    advance_payment_no @Common.Label : 'Advance payment number '
};
annotate service.poheader with {
    creation_date @Common.Label : 'Creation date range '
};

annotate service.polineitem with @(
    UI.LineItem #AdvancePaymentLineItems : [
        {
            $Type : 'UI.DataField',
            Value : itemno,
            Label : 'itemno',
        },
        {
            $Type : 'UI.DataField',
            Value : item_desc,
            Label : 'item_desc',
        },
        {
            $Type : 'UI.DataField',
            Value : item_desc_cond,
            Label : 'item_desc_cond',
        },
        {
            $Type : 'UI.DataField',
            Value : plant,
            Label : 'plant',
        },
        {
            $Type : 'UI.DataField',
            Value : unit_price,
            Label : 'unit_price',
        },
        {
            $Type : 'UI.DataField',
            Value : quantity,
            Label : 'quantity',
        },
        {
            $Type : 'UI.DataField',
            Value : cgst_percentage,
            Label : 'cgst_percentage',
        },
        {
            $Type : 'UI.DataField',
            Value : sgst_percentage,
            Label : 'sgst_percentage',
        },{
            $Type : 'UI.DataField',
            Value : cgst_value,
            Label : 'cgst_value',
        },{
            $Type : 'UI.DataField',
            Value : sgst_value,
            Label : 'sgst_value',
        },]
);
