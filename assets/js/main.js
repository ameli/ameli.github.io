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

async function typeSentence(sentence, eleRef, delay = 30) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
        await waitForMs(delay);
        $(eleRef).append(letters[i]);
        i++
    }
    return;
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(eleRef, start=0, delay=10) {
    const sentence = $(eleRef).html();
    if (sentence) {
        const letters = sentence.split("");
        let i = 0;
        while(letters.length > start) {
            await waitForMs(delay);
            letters.pop();
            $(eleRef).html(letters.join(""));
        }
    }
}

function showCursor(show=true) {
    var el = document.getElementById("input-cursor");
    if (show == true) {
        el.style.display="";
    } else {
        el.style.display="none";
    }
}

const carouselText = [
  {text: "Math Geneology"},
  {text: "ematics"},
  {text: " Geneology"},
]
 var textUpdated = false;

async function typewritter(eleRef) {
    if (textUpdated == false){
        textUpdated = true;
        var el = document.getElementById("sentence");
        await showCursor(true)
        await deleteSentence(el, 0, 20);
        await waitForMs(400);
        await typeSentence(carouselText[0].text, el, 20);
        await waitForMs(700);
        await deleteSentence(el, 4, 15);
        await waitForMs(400);
        await typeSentence(carouselText[1].text, el, 30);
        await waitForMs(500);
        await typeSentence(carouselText[2].text, el, 15);
        await waitForMs(700);
        await showCursor(false)
    }
}
