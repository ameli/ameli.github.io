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

storedText2 = `-----BEGIN PGP PUBLIC KEY BLOCK-----
Version: Keybase OpenPGP v2.0.76
Comment: https://keybase.io/crypto

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
ftCjpcZYVPtBKPdZAH9Fcg==
=xcNt
-----END PGP PUBLIC KEY BLOCK-----`


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

            console.log(storedText);
            
            var el = document.getElementById('pgpText');
            el.textContent = storedText;
            // el.textContent = storedText2;
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
