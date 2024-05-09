sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        create_click: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
            // window.history.forward()
        }
    };
});
