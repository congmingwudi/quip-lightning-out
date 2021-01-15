
export function lightingOutApp() {
   
    console.log('lightingOutApp.js > loading');

    const lightningOutJS = 'https://sdodemo-main-166ce2cf6b6-172-1762eaa676f.force.com/lightningOutCommunity/lightning/lightning.out.js';
    loadScript(lightningOutJS, loadLightningOutApp);
      
}

function loadScript(url, callback) {
    console.log('lightingOutApp.js > loadScript: ' + url);

    // adding the script tag to the head
    var head = document.head;
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    //script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

function loadLightningOutApp() {

    console.log('lightingOutApp.js > loadLightningOutApp');

    $Lightning.use("FlowInQuipLightningOutApp", function() {
        $Lightning.createComponent("FlowInQuip", {},
                "lightning",
                function(cmp) {
                    console.log("lightingOutApp.js > Lightning component was created");
                    // do some stuff
                }
            );
        },
        'https://sdodemo-main-166ce2cf6b6-172-1762eaa676f.force.com'
        );
}