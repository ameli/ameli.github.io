document.addEventListener("DOMContentLoaded", function(){

    var el = document.getElementById("obfemail");
    el.innerHTML = '<span>Email</span>';

    // set click event to all elements
    el.addEventListener('click', function (e){
        let cT = e.currentTarget;

        // show address
        str = cT.getAttribute('data').split("").reverse().join("") + '==';
        cT.innerHTML = atob(str);
        cT.removeAttribute("href");
    });
});
