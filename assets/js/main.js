document.addEventListener("DOMContentLoaded", function(){

    var el = document.getElementById("obfemail");
    el.innerHTML = '<span>Email</span>';

    // set click event to all elements
    el.addEventListener('click', function (e){
        let cT = e.currentTarget;

        // show address
        cT.innerHTML = atob(cT.getAttribute('data-b64mail'));
        cT.removeAttribute("href");
    });
});
