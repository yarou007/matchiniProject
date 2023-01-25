function verif() {
    var em = document.getElementById("email").value;
    if (em.length == 0) {
        alert("Entrez mail  !!");
        return false;
    }
    var pos1 = em.indexOf('@');
    var pos2 = em.lastIndexOf('.');
    var ch = em.substring(pos1 + 1, pos2);
    for (i = 0; i < ch.length; i++) {
        if ((ch.charAt(i).toUpperCase() < 'A') || (ch.charAt(i).toUpperCase() > 'Z')) {
            alert("Entrez mail valide !!");
            return false;
        }
    }
    var ch2 = em.substring(pos2 + 1, em.length);
    for (i = 0; i < ch2.length; i++) {
        if ((ch2.charAt(i).toUpperCase() < 'A') || (ch2.charAt(i).toUpperCase() > 'Z')) {
            alert("Entrez mail valide !!");
            return false;
        }
    }
    if (document.getElementById("user").value.length == 0) {
        alert("Entrez votre Username!!");
        return false;
    }

    /*paaasword */
    if (document.getElementById("moovies-taste").selectedIndex == -1) {
        alert("Votre genre de movie préféré !!");
        return false;
    }
    if (document.getElementById("fav-movie").value.length == 0) {
        alert("Votre movie préféré !!");
        return false;
    }

    if (document.getElementById("series-taste").selectedIndex == -1) {
        alert("Votre genre de series préféré  !!");
        return false;
    }
    if (document.getElementById("fav-serie").value.length == 0) {
        alert("Votre serie préféré   !!");
        return false;
    }
    if (document.getElementById("music-taste").selectedIndex == -1) {
        alert("Votre genre de music préféré  !!");
        return false;
    }
    if (document.getElementById("fav-song").value.length == 0) {
        alert("Votre music préféré   !!");
        return false;
    }
    if (document.getElementById("astro").selectedIndex == -1) {
        alert("Votre astrology  !!");
        return false;
    }
    if (document.getElementById("pwd").value.length<9){
        alert("Le mot de passe doit etre 8 caractere ou plus !!");
        return false ;
    }
    if (document.getElementById("pwd").value!=document.getElementById("pwdc").value){
        alert("le mot de passe doit etre identique !!");
        return false ;
    }





}