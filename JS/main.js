var mytag = document.getElementById("myheader");
var myfeedbacktag = document.getElementById("center");
var texttag = document.getElementById("text");

function makeitbold() {
    if (texttag.style.fontWeight != "bold") {
        texttag.style.fontWeight = "bold";

    } else {
        texttag.style.fontWeight = "normal";
    }

}

function makeititalic() {
    if (texttag.style.fontStyle != "italic") {
        texttag.style.fontStyle = "italic"

    } else {

        texttag.style.fontStyle = "normal"
    }
}

function makeitunderline() {
    if (texttag.style.textDecoration != "underline") {
        texttag.style.textDecoration = "underline"
    } else {
        texttag.style.textDecoration = "none"
    }
}

function changesize() {
    var userfontsize = document.getElementById("selectsize").value;
    texttag.style.fontSize = userfontsize;
}

function fontfamily() {
    var userfontfamily = document.getElementById("selecttype").value;
    texttag.style.fontFamily = userfontfamily;
}

