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

async function typeSentence(sentence, el, delay = 30) {
    const letters = sentence.split("");
    let i = 0;
    while(i < letters.length) {
        await waitForMs(delay);
        el.append(letters[i]);
        i++
    }
    return;
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function deleteSentence(el, forward=true, till=0, delay=10) {
    const sentence = el.innerHTML;
    if (sentence) {
        const letters = sentence.split("");
        while(letters.length > till) {
            await waitForMs(delay);
            if (forward) {
                letters.pop();
            } else {
                letters.shift();
            }
            el.innerHTML = letters.join("");
        }
    }
}

function showCursor(elId, show=true) {
    var el = document.getElementById(elId);
    if (show == true) {
        el.style.display="";
    } else {
        el.style.display="none";
    }
}

const carouselText = [
  {text: "Math Genealogy"},
  {text: "ematics"},
  {text: " Geneology"},
]
 var textUpdated = false;

async function typewritter(el) {
    if (textUpdated == false){
        textUpdated = true;
        var el = document.getElementById("sentence");
        await showCursor("cursor-after", true)
        await deleteSentence(el, true, 0, 20);
        await waitForMs(300);
        await typeSentence(carouselText[0].text, el, 20);
        await waitForMs(700);
        await deleteSentence(el, true, 4, 15);
        await waitForMs(300);
        await typeSentence(carouselText[1].text, el, 30);
        await waitForMs(500);
        await typeSentence(carouselText[2].text, el, 15);
        await waitForMs(1000);
        await showCursor("cursor-after", false)
        await waitForMs(6000);
        await deleteSentence(el, false, 9, 15);
    }
}
