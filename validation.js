function validateForm() {
    var valid = true;
    
    var title = document.getElementById("title").value;
    if (title.length < 5 || title.length > 30) {
        valid = false;
        document.getElementById("title").style.border = "1px dashed red";
        document.getElementById("porukaTitle").innerHTML = "Naslov vijesti mora imati između 5 i 30 znakova!<br>";
    } else {
        document.getElementById("title").style.border = "1px solid green";
        document.getElementById("porukaTitle").innerHTML = "";
    }

    var about = document.getElementById("about").value;
    if (about.length < 10 || about.length > 100) {
        valid = false;
        document.getElementById("about").style.border = "1px dashed red";
        document.getElementById("porukaAbout").innerHTML = "Kratki sadržaj mora imati između 10 i 100 znakova!<br>";
    } else {
        document.getElementById("about").style.border = "1px solid green";
        document.getElementById("porukaAbout").innerHTML = "";
    }

    var content = document.getElementById("content").value;
    if (content.length == 0) {
        valid = false;
        document.getElementById("content").style.border = "1px dashed red";
        document.getElementById("porukaContent").innerHTML = "Sadržaj mora biti unesen!<br>";
    } else {
        document.getElementById("content").style.border = "1px solid green";
        document.getElementById("porukaContent").innerHTML = "";
    }

    var pphoto = document.getElementById("pphoto").value;
    if (pphoto.length == 0) {
        valid = false;
        document.getElementById("pphoto").style.border = "1px dashed red";
        document.getElementById("porukaSlika").innerHTML = "Slika mora biti unesena!<br>";
    } else {
        document.getElementById("pphoto").style.border = "1px solid green";
        document.getElementById("porukaSlika").innerHTML = "";
    }

    var category = document.getElementById("category").selectedIndex;
    if (category == 0) {
        valid = false;
        document.getElementById("category").style.border = "1px dashed red";
        document.getElementById("porukaKategorija").innerHTML = "Kategorija mora biti odabrana!<br>";
    } else {
        document.getElementById("category").style.border = "1px solid green";
        document.getElementById("porukaKategorija").innerHTML = "";
    }

    if (!valid) {
        event.preventDefault();
    }
    return valid;
}
