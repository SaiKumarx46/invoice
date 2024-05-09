sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        Create_non_po: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
