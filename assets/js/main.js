// ==================
// Show Email address
// ==================

document.addEventListener("DOMContentLoaded", function(){

    var el = document.getElementById("obfemail");
    el.innerHTML = '<span>Email</span>';

    // set click event to all elements
    el.addEventListener('click', function (e){
        let cT = e.currentTarget;

        // show address
        str = cT.getAttribute('data-email').split("").reverse().join("") + '==';
        cT.innerHTML = atob(str);
        // cT.removeAttribute("href");
        
        console.log(el.innerHTML);
        // el.select();
        // el.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(atob(str));

        var tooltip = document.getElementById("myTooltip");
        tooltip.innerHTML = "Copied to clipboard.";

    });
});


// ======================
// Read PGP Key from File
// ======================

function readPGP() {

    // const url = "https://raw.githubusercontent.com/ameli/ameli.github.io/main/assets/files/pub-key.asc";
    const url = "assets/files/pub-key.asc";
    var storedText;

    // fetch(url)
    //     .then(function(response) {
    //         response.text().then(function(text) {
    //         storedText = text;
    //         // done();
    //     });
    // });

    // fetch(url, {mode: "no-cors", header: {'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Headers':"*", 'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS'}})
    fetch(url) 
        .then(function(response) {
        response.text().then(function(text) {
            storedText = text;
            console.log(storedText);
            
            var el = document.getElementById('pgpText');
            el.textContent = storedText;
            // el.textContent = "aaaaaaa";
        });
    });
}


// =========================
// Toggle dark or light mode
// =========================

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    var el = document.getElementById('darkMode');
    if (el.innerHTML == 'Light mode') {
        el.innerHTML = 'Dark mode';
    } else {
        el.innerHTML = 'Light mode';
    }
}
