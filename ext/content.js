var jsonContents = $( "script[type*='application/ld+json']" )
if(jsonContents && jsonContents.length >= 2) {
    var c1 = jsonContents[0]
    var c2 = jsonContents[1]

    var o1 = JSON.parse(jsonContents[0].text);
    var o2 = JSON.parse(jsonContents[1].text);

    var doccontent = "none";

    if(o1['@type'] == "NewsArticle") {
      doccontent = o1['articleBody']
    }
    else if(o2['@type'] == "NewsArticle") {
      doccontent = o2['articleBody']
    }

    if(doccontent != "none") {
      var div=document.createElement("div");
      document.body.appendChild(div);
      document.body.style.cssText = "height: 100%;overflow-y: hidden"
      div.style.cssText = "position: fixed;overflow-y: scroll;display: block;width: 90%;top: 25%;left: 5%;max-height: 60%;padding:10px;background-color: rgba(255,255,255,0.95);border: solid 3px green;z-index: 1000;cursor: pointer;font-family: \"Trebuchet MS\", Verdana, sans-serif;";
      div.innerText=doccontent;
      console.log("DONEDIV")
    }
}
