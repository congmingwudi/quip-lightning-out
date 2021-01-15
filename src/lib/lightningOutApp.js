
export function lightingOutApp() {
   
    $Lightning.use("FlowInQuipLightningOutApp", function() {
        $Lightning.createComponent("FlowInQuip", {},
                "lightning",
                function(cmp) {
                    console.log("Lightning component was created");
                    // do some stuff
                }
            );
        },
        'https://sdodemo-main-166ce2cf6b6-172-1762eaa676f.force.com'
        );
      
}