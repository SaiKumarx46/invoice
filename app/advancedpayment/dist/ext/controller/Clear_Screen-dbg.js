sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        Clear_Screen_click: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
