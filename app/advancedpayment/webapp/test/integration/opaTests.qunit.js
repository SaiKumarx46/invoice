sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'advancedpayment/test/integration/FirstJourney',
		'advancedpayment/test/integration/pages/poheaderList',
		'advancedpayment/test/integration/pages/poheaderObjectPage'
    ],
    function(JourneyRunner, opaJourney, poheaderList, poheaderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('advancedpayment') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onThepoheaderList: poheaderList,
					onThepoheaderObjectPage: poheaderObjectPage
                }
            },
            opaJourney.run
        );
    }
);