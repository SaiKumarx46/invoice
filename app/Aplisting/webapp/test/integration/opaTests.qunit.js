sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'Aplisting/test/integration/FirstJourney',
		'Aplisting/test/integration/pages/poheaderList',
		'Aplisting/test/integration/pages/poheaderObjectPage'
    ],
    function(JourneyRunner, opaJourney, poheaderList, poheaderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('Aplisting') + '/index.html'
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