/* Show Email address */
document.addEventListener("DOMContentLoaded", function(){

    var el = document.getElementById("obfemail");
    el.innerHTML = '<span>Email</span>';

    // set click event to all elements
    el.addEventListener('click', function (e){
        let cT = e.currentTarget;

        // show address
        str = cT.getAttribute('data-email').split("").reverse().join("") + '==';
        cT.innerHTML = atob(str);
        cT.removeAttribute("href");
    });
});

/* Toggle dark or light mode */
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
