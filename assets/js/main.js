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

        // Copy email address to clipboard
        navigator.clipboard.writeText(atob(str));
    });

    // Enable tooltip
    el.title =  "Email address copied to clipboard.";
    $('#obfemail').tooltip();

    // Make tooltip hide if mouse leaves the link
    $('#obfemail').on('show.bs.tooltip', function() {
        $(this).on('mouseleave', function() {
            $(this).tooltip('hide');
        });
    });
});


// ======================
// Read PGP Key from File
// ======================

function readPGP() {

    var btn = document.getElementById('copyBtn');
    btn.innerHTML = "Copy";

    const url = "https://raw.githubusercontent.com/ameli/ameli.github.io/main/assets/files/pub-key.asc";
    // const url = "assets/files/pub-key.asc";
    var storedText;

    // fetch(url, {mode: "no-cors", header: {'Access-Control-Allow-Origin':'*', 'Access-Control-Allow-Headers':"*", 'Access-Control-Allow-Methods': 'POST, PUT, DELETE, GET, OPTIONS'}})
    fetch(url) 
        .then(function(response) {
        response.text().then(function(text) {
            storedText = text;

            var el = document.getElementById('pgpText');
            el.textContent = storedText;
        });
    });
}


// =================
// Copy to Clipboard
// =================

function copyToClipboard() {
    var el = document.getElementById('pgpText');
    var text = el.textContent;
    navigator.clipboard.writeText(text);

    var btn = document.getElementById('copyBtn');
    btn.innerHTML = "Copied";
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
