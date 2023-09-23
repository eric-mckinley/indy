var articleDataScripts = $( "script[data-fragment-type='ArticleContent']" )
var introSection = $( "div[data-auth-intro='article']" )

if (introSection && articleDataScripts && articleDataScripts.length > 0) {

    var spacer_p = document.createElement("p")
    spacer_p.style.cssText = "display:block;    "
    spacer_p.innerHTML = "&nbsp;"

    introSection[0].appendChild(spacer_p)

    var p_style = "display:block;font-size:18px;font-family:'Nuacht Serif', 'Nuacht Serif Fallback', Georgia, serif;"
    var q_style = "font-weight:bold;display:block;font-size:18px;font-family:'Nuacht Serif', 'Nuacht Serif Fallback', Georgia, serif;"

    var scriptContent = articleDataScripts[0].text
    var jsonContentText = scriptContent.substring(scriptContent.indexOf("{"))
    var jsonContents = JSON.parse(jsonContentText);

    var premium_button = document.createElement('button')
    premium_button.innerText = 'View Premium Article'
    premium_button.style.cssText = "display:block;background-color: #4CAF50;border: none;color: white;padding: 15px 32px;text-align: center;text-decoration: none;display: inline-block;font-size: 16px;"

    var p_btn_element = document.createElement("p")
    p_btn_element.setAttribute("id", "btnindy");

    p_btn_element.style.cssText = p_style
    p_btn_element.appendChild(premium_button)

    introSection[0].appendChild(p_btn_element)

    premium_button.addEventListener('click', () => {
      $( '#btnindy' ).fadeOut();
      $( '#indy' ).fadeIn();
    })

    var article_div = document.createElement("div")
    article_div.setAttribute("id", "indy");
    article_div.style.cssText = "display:none;"

    introSection[0].appendChild(article_div)

    var keys = Object.keys(jsonContents)
    if (keys && keys.length > 0) {
         var subData = jsonContents[keys[0]]["data"]["article"]["body"]

         for (const section in subData) {
            var p_section = subData[section]["p"]
            if (p_section) {

                var p_element = document.createElement("p")
                p_element.style.cssText = p_style
                p_element.innerHTML = p_section

                article_div.appendChild(p_element)
             }

            var q_section = subData[section]["quote"]
            if (q_section) {

                var q_element = document.createElement("p")
                q_element.style.cssText = q_style
                q_element.innerHTML = q_section["text"];
                article_div.appendChild(q_element)
             }
         }
    }
}


