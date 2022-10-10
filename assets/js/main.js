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
