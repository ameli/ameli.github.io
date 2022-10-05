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
  {text: " Genealogy"},
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
        await deleteSentence(el, false, 9, 15);
    }
}

async function animation() {
    var el = document.getElementById("image");

    for (let i = 0; i < 700; i += 5) {
        el.style.filter = `blur(${i}px)`;
        await waitForMs(3);
    }
    el.style.filter = `blur(0px)`;
    el.style.visibility = 'collapse';
}

function undo_animation() {
    var el = document.getElementById("image");
    el.style.visibility = null;
}
