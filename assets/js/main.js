document.addEventListener("DOMContentLoaded", function(){

    var el = document.getElementById("obfemail");
    el.innerHTML = '<span>Email</span>';

    // set click event to all elements
    el.addEventListener('click', function (e){
        let cT = e.currentTarget;

        // show address
        cT.innerHTML = atob(cT.getAttribute('data-b64mail'));
 
        // set mailto on a tags
        if (cT.tagName === 'A'){
            cT.setAttribute('href', 'mailto:' + atob(cT.getAttribute('data-b64mail')));
        }
    });
});
