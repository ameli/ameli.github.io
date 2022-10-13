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


// ==========================
// Scroll to Snap on Sections
// ==========================

document.addEventListener("DOMContentLoaded", function(){

    // This function works on those div sections with "scroll-snap" class.
    sections = document.getElementsByClassName("scroll-snap");

    // Wait time to to the last user scroll to begging auto scrolling
    const scrollWait = 1000;

    // When auto-scroll started, the scrolling is animated (smooth), which itself triggers more
    // scrolling event. This lock time locks any father scrolling till smooth scrolling it over.
    const scrollLockWait = 500;

    // Percent of section position to start scrolling
    var relativePosThreshold = 0.25;

    // Visible window height
    var visible = window.innerHeight;

    var scrollLock = false;
    var lastScrollTime = Date.now();

    window.addEventListener("scroll", (event) => {

        // Keep recording of the last time of scrolling (avoid race condition by using temp)
        var tempScrollTime = Date.now()
        if (tempScrollTime > lastScrollTime) {
            lastScrollTime = tempScrollTime;
        }

        if (scrollLock == false) {
            let pos = window.scrollY;

            for (let i = 0, l = sections.length; i < l; i++) {

                var scroll = false;
                let relativePos = (sections[i].offsetTop - pos) / (visible);

                // Scroll if section relative position is close to the threshold
                if (Math.abs(relativePos) < relativePosThreshold) {
                    scroll = true;
                }

                // If the section height is larger than visible window and the user scrolled downward, do not auto-scroll
                // as some of the section texts wrap and the whole paragraphs extend to below the visible screen, so
                // auto-scroll does not allow user to continue reading the end parts of the section. 
                if (relativePos < -0.1 && sections[i].offsetHeight > 1.03 * visible) {
                    scroll = false;
                }

                if (scroll == true) {
                    // Wait for 1000 ms.
                    setTimeout(function(){

                        // Execute only if in the past 500 ms there was no scroll event
                        if (Date.now() - lastScrollTime >= 0.96*scrollWait){
                            scrollLock = true;
                            sections[i].scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
                            setTimeout(function(){
                                scrollLock = false;
                            }, scrollLockWait);
                        }
                    }, scrollWait);
                    break;
                }
            }
        }
    });
});
