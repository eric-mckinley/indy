var jsonContents = $( "script[type*='application/ld+json']" )
if(jsonContents && jsonContents.length >= 2) {
    var c1 = jsonContents[0]
    var c2 = jsonContents[1]


    var o1 = JSON.parse(jsonContents[0].text);
    var o2 = JSON.parse(jsonContents[1].text);

    var docContent = "none";
    console.dir(o1)
    if(o1['@type'] == "NewsArticle" && o1['isAccessibleForFree'] == "False") {
      docContent = o1['articleBody']
    }
    else if(o2['@type'] == "NewsArticle" && o1['isAccessibleForFree'] == "False") {
      docContent = o2['articleBody']
    }

    if(docContent != "none" ) {
      var overlayDiv = document.createElement("div");
      document.body.appendChild(overlayDiv);
      document.body.style.cssText = "height: 100%;overflow-y: hidden"
      overlayDiv.style.cssText = "position: fixed;overflow-y: scroll;display: block;width: 90%;top: 25%;left: 5%;max-height: 60%;padding:10px;background-color: rgba(240, 255, 240,0.95);border: solid 3px green;z-index: 1000;cursor: pointer;font-family: \"Trebuchet MS\", Verdana, sans-serif;";

      var htmlDoc = new DOMParser().parseFromString(docContent, "text/html");
      overlayDiv.innerHTML = htmlDoc.documentElement.textContent;
    }
}
