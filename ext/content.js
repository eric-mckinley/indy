var jsonContents = $( "script[type*='application/ld+json']" )
if(jsonContents && jsonContents.length >= 2) {
    var c1 = jsonContents[0]
    var c2 = jsonContents[1]


    var o1 = JSON.parse(jsonContents[0].text);
    var o2 = JSON.parse(jsonContents[1].text);

    var docContent = "none";
    console.dir(o1)
    if(o1['@type'] == "NewsArticle") {
      docContent = o1['articleBody']
    }
    else if(o2['@type'] == "NewsArticle") {
      docContent = o2['articleBody']
    }

    if(docContent != "none" ) {

      var docStory = "<strong>Click Box to Close</strong><br><p>"+ docContent + "</p>"

      var overlayDiv = document.createElement("div");
      overlayDiv.setAttribute("id", "indy");
      document.body.appendChild(overlayDiv);
      document.body.style.cssText = "height: 100%;overflow-y: hidden"
      overlayDiv.style.cssText = "position: fixed;overflow-y: scroll;display: block;width: 90%;top: 25%;left: 5%;max-height: 60%;padding:10px;background-color: rgba(240, 255, 240,0.95);border: solid 3px green;z-index: 1000;cursor: pointer;font-family: \"Trebuchet MS\", Verdana, sans-serif;";

      overlayDiv.innerHTML = htmlEntities(docStory);
    }

    $( document ).on( 'click', function( event ) {
      $( '#indy' ).fadeOut();
  });    
}

function htmlEntities(str) {
  return String(str)
           .replaceAll('&rsquo;', '\'')
           .replaceAll('&rdquo;', '\"')
           .replaceAll('&rldquo;', '\"')
           .replaceAll('&amp;', '&')   // & -> &amp;
           .replaceAll('&lt;', '<')    // < -> &lt;
           .replaceAll('&gt;', '>')    // > -> &gt;
           .replaceAll('&quot;', '\"'); // " -> &quot;

          
}


