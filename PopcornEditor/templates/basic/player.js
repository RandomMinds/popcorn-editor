/* This Source Code Form is subject to the terms of the MIT license
 * If a copy of the MIT license was not distributed with this file, you can
 * obtain one at https://raw.github.com/mozilla/butter/master/LICENSE */

( function( Butter ) {
  document.addEventListener( "DOMContentLoaded", function() {

    Butter.init({
      config: "./templates/basic/config.json",
      location: window.location,
      ready: function( butter ) {

        var editor2player = function(){
          if (typeof $ != 'undefined'  &&  $('body').hasClass('editor-open')){
            // Switch to player mode default.
            // Close the trays which a user can later reopen if desired.
            $('.butter-toggle-button').click();
            $('.butter-editor-close-btn').click();
          }
        };
        editor2player();
        setTimeout(editor2player, 3000); //xxxx badness -- but adding to config.json ui:{enabled:false, onLeaveDialog:true, trackEventHighlight:"click"} isnt working now..

        butter.listen( "mediaready", function mediaReady() {
          butter.unlisten( "mediaready", mediaReady );
          document.querySelector( "#embed-wrapper" ).classList.remove( "faded" );
          parent.postMessage({type: 'loaded'}, window.location.origin);
        });
      }
    });
  }, false );
}( window.Butter ) );
