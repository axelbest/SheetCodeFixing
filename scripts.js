przygotuj = function () {
    
    
    if (document.querySelectorAll("SELECT")[2].selectedIndex == 0) {
        kolorbg = "black";
        kolortxt = "white";
    } else {
        kolorbg = "white";
        kolortxt = "black";
    }
    ;
    
    
    if (document.getElementById("chckbox").checked == "1") {
        
        document.getElementById("idik").setAttribute("style", "width:99.9%;height:99.6%;top:0%;left:0%;position:absolute;z-index:9800;border:0px solid black;");
        
        document.getElementById("frejmik").style.border = "2px solid red";
        
        document.getElementById("frejmik").style.border = "2px solid green";
        document.getElementById("frejmik").style.backgroundColor = kolorbg;
        document.getElementById("frejmik").style.color = kolortxt;
    } else {
        
        document.getElementById("idik").setAttribute("style", "background-color:RGB(155,155,155);color:white;display:relative;position:absolute;left:15%;top:15%;width:70%;height:70%;border-radius:0px 0px;border:2px solid black;z-index:9800;");
        document.getElementById("frejmik").style.border = "2px solid gren";
        document.getElementById("frejmik").style.zIndex = "9900";
        
        document.getElementById("frejmik").style.backgroundColor = kolorbg;
        document.getElementById("frejmik").style.color = kolortxt;
    }
    ;
    
    
};
wypelnij = function () {
    
    
    if (document.querySelectorAll("SELECT")[2].selectedIndex == 0) {
        kolorbg = "black";
        kolortxt = "white";
    } else {
        kolorbg = "white";
        kolortxt = "black";
    }
    ;
    kolor = document.getElementById("motyw_id").options[document.getElementById("motyw_id").selectedIndex].value;
    
    if (document.getElementById("chckbox").checked == "0") {
        
        
        tmp_content = text[0].contentWindow.document.body.innerText.replace(/&gt;/g, ">").replace(/</g, "<");
        
        
        tmp = "<html lang='PL'><head><meta charset='UTF8'><style>html{" + kolor + "font:italic bold 16px arial,serif;width:98%;height:98%;position:absolute;top:0%;left:0%;}body{width:98%;height:98%;position:absolute;top:0%;left:0%;" + kolor + "font:italic bold 16px arial,serif;}body::-webkit-scrollbar{display: none;}body{white-space:wrap;overflow:scroll;scrollbar-width:none;}html::-webkit-scrollbar{display: none;}html{white-space:wrap;overflow:scroll;scrollbar-width:none;}" + text[1].contentWindow.document.body.innerText + "</style></head><body>" + tmp_content + "</body></html>";
        
        document.getElementById("idik").setAttribute("style", "background-color:RGB(155,155,155);color:white;display:relative;position:absolute;left:15%;top:15%;width:70%;height:70%;border-radius:0px 0px;border:2px solid black;z-index:9800;");
        document.getElementById("frejmik").style.border = "2px solid red";
        document.getElementById("frejmik").style.zIndex = "9900";
        document.getElementById("frejmik").style.backgroundColor = kolorbg;
        document.getElementById("frejmik").style.color = kolortxt;
        document.getElementById("frejmik").style.border = "2px solid red";
        
        document.getElementById("frejmik").contentWindow.document.write(tmp);
        document.getElementById("frejmik").contentWindow.document.close();
    } else {
        
        
        tmp_content = text[0].contentWindow.document.body.innerText.replace(/&gt;/g, ">").replace(/</g, "<");
        
        tmp = "<html lang='PL'><head><meta charset='UTF8'><style>html{" + kolor + "font:italic bold 16px arial,serif;width:98%;height:98%;position:absolute;top:0%;left:0%;}body{width:98%;height:98%;position:absolute;top:0%;left:0%;" + kolor + "font:italic bold 16px arial,serif;}body::-webkit-scrollbar{display: none;}body{white-space:wrap;overflow:scroll;scrollbar-width:none;}html::-webkit-scrollbar{display: none;}html{white-space:wrap;overflow:scroll;scrollbar-width:none;}" + text[1].contentWindow.document.body.innerText + "</style></head><body>" + tmp_content + "</body></html>";
        
        document.getElementById("idik").setAttribute("style", "width:99.9%;height:99.6%;top:0%;left:0%;position:absolute;z-index:9800;border:0px solid black;");
        
        document.getElementById("frejmik").setAttribute("style", "width:99.6%;height:99.3%;top:0%;left:0%;position:absolute;z-index:9800;border:0px solid red;");
        
        document.getElementById("frejmik").style.backgroundColor = kolorbg;
        document.getElementById("frejmik").style.color = kolortxt;
        
        document.getElementById("frejmik").style.border = "2px solid grey";
        
        document.getElementById("frejmik").contentWindow.document.write(tmp);
        document.getElementById("frejmik").contentWindow.document.close();
    }
    
    
    tmp_script = document.createElement("SCRIPT");
    tmp_script.innerHTML = text[2].contentWindow.document.body.innerText + "setTimeout(function(){stop();},1000);";
    document.getElementById("frejmik").contentWindow.document.body.appendChild(tmp_script);
    
    
    if (document.querySelectorAll("SELECT")[0].selectedIndex == 1) {
        kolor = "background-color:white;color:black;";
    } else {
        kolor = "background-color:black;color:white;";
    }
    ;
    text[4].setAttribute("srcdoc", "<html><head><style>html{" + kolor + "font:italic bold 16px arial,serif;width:98%;height:98%;position:absolute;top:0%;left:0%;}body{width:98%;height:98%;position:absolute;top:0%;left:0%;}body::-webkit-scrollbar{display: none;}body{white-space:wrap;overflow:scroll;scrollbar-width:none;}html::-webkit-scrollbar{display: none;}html{white-space:wrap;overflow:scroll;scrollbar-width:none;}</style></head><body>" + document.getElementById("frejmik").contentWindow.document.documentElement.outerHTML.replace(/</g, "&l" + "t;").replace(/>/g, "&g" + "t;") + "</body></html>");
    
    
};
ustaw_kolory = function (wybrany) {
    if (wybrany == "jasny") {
        for (let u = 0; u < 5; u++) {
            text[u].contentWindow.document.documentElement.style.backgroundColor = 'white';
            text[u].contentWindow.document.documentElement.style.color = 'black';
            text[u].contentWindow.document.body.style.backgroundColor = 'white';
            text[u].contentWindow.document.body.style.color = 'black';
        }
        ;
    } else {
        for (let u = 0; u < 5; u++) {
            text[u].contentWindow.document.documentElement.style.backgroundColor = 'black';
            text[u].contentWindow.document.documentElement.style.color = 'white';
            text[u].contentWindow.document.body.style.backgroundColor = 'black';
            text[u].contentWindow.document.body.style.color = 'white';
        }
        ;
    }
    ;
};
ustaw_czcionke = function () {
    font_object = document.getElementById("czcionka_id");
    text[0].contentWindow.document.documentElement.style.fontSize = font_object.options[font_object.selectedIndex].text;
    text[0].contentWindow.document.body.style.fontSize = font_object.options[font_object.selectedIndex].text;
    text[1].contentWindow.document.documentElement.style.fontSize = font_object.options[font_object.selectedIndex].text;
    text[1].contentWindow.document.body.style.fontSize = font_object.options[font_object.selectedIndex].text;
    text[2].contentWindow.document.documentElement.style.fontSize = font_object.options[font_object.selectedIndex].text;
    text[2].contentWindow.document.body.style.fontSize = font_object.options[font_object.selectedIndex].text;
    text[3].contentWindow.document.documentElement.style.fontSize = font_object.options[font_object.selectedIndex].text;
    text[3].contentWindow.document.body.style.fontSize = font_object.options[font_object.selectedIndex].text;
    text[4].contentWindow.document.documentElement.style.fontSize = font_object.options[font_object.selectedIndex].text;
    text[4].contentWindow.document.body.style.fontSize = font_object.options[font_object.selectedIndex].text;
    
};

wykonaj = function () {
    
    script_text = text[3].contentWindow.document.body.innerText.replace(/\n/g, "");
    tmp_script = document.createElement("SCRIPT");
    tmp_script.innerText = script_text
    document.getElementById("frejmik").contentWindow.document.body.appendChild(tmp_script);
    
    
};
init = function () {
    text[0].setAttribute("srcdoc", "<html><head><style>html{background-color:black;color:white;font:italic bold 16px arial,serif;width:98%;height:98%;position:absolute;top:0%;left:0%;}body{width:98%;height:98%;position:absolute;top:0%;left:0%;}</style></head><body>Aaaaaaaa</body></html>");
    tmp = document.createElement("div");
    
    tmp.setAttribute("style", "width:98%;height:98%;position:absolute;top:0%;left:0%;background-color:black;color:white;font:italic bold 16px arial,serif;");
    tmp.setAttribute("contenteditable", "true");
    tmp.innerHTML = "asdasdasdas";
    
    
    text[0].contentWindow.document.body.appendChild(tmp);
    text[0].contentWindow.document.body.innerHTML = tmp.outerHTML;
    text[1].setAttribute("srcdoc", "");
    text[2].setAttribute("srcdoc", "");
    text[3].setAttribute("srcdoc", "");
    text[4].setAttribute("srcdoc", "");
    text[0].contentWindow.document.body.setAttribute("style", "background-color:black;color:white;font:italic bold 16px arial,serif;");
    text[0].contentWindow.document.documentElement.setAttribute("style", "background-color:black;color:white;font:italic bold 16px arial,serif;");
    text[0].contentWindow.document.body.innerHTML = "asdasdasdas";
    text[0].contentWindow.document.head.innerHTML = "<style>html{background-color:black;color:white;}</style>";
    document.querySelectorAll("SELECT")[2].selectedIndex = 0;
    
    utworz();
    pokaz(document.getElementById("help_div"), 0);
    
    
};

pokaz = function (object, state) {
    tab = object.querySelectorAll('*');
    for (let u = 0; u < tab.length; u++) {
        if (state == 0) {
            tab[u].style.visibility = 'hidden';
            object.style.visibility = 'hidden';
        } else {
            tab[u].style.visibility = 'visible';
            object.style.visibility = 'visible';
        }
        ;
    }
    ;
};

uaktywnij = function (nr) {
    for (let u = 0; u < 5; u++) {
        button[u].style.backgroundColor = "RGB(0,0,22)";
        text[u].style.visibility = "hidden";
    }
    ;button[nr].style.backgroundColor = "RGB(0,0,89)";
    text[nr].style.visibility = "visible";
};

sprawdz = function () {
    if (document.getElementById("chckbox").checked == "0") {
        document.getElementById("chckbox").checked = "1";
    } else {
        document.getElementById("chckbox").checked = "0";
    }
    ;
};

input_checkbox_checked = "<input  style='position:absolute;cursor:pointer;width:70%;height:70%;left:60%;top:24%;background-color:RGB(80,0,0);' type='checkbox' checked='true' onClick='sprawdz();'></input>";
input_checkbox_unchecked = "<input  style='position:absolute;cursor:pointer;width:70%;height:70%;left:60%;top:24%;background-color:RGB(80,0,0);' type='checkbox' onClick='sprawdz();'></input>";

utworz = function () {
    tmp_button = document.createElement("BUTTON");
    tmp_button.setAttribute("style", "border:0px solid black;color:red;background-color:transparent;cursor:pointer;left:98.1%;top:0.2%;width:0.3%;height:3%;position:absolute;font:italic bold 18px arial,serif;z-index:9991;visibility:hidden;");
    
    tmp_button.innerText = "X";
    tmp_button.setAttribute("id", "idquitx");
    
    
    document.body.appendChild(tmp_button);
    tmp_button.setAttribute("onClick", "document.getElementById('podglad_button').click();document.getElementById('idik').style.visibility='hidden';document.getElementById('idik').style.visibility='hidden';document.getElementById('idik').style.visibility='hidden';document.getElementById('idquitx').style.visibility='hidden';");
};

