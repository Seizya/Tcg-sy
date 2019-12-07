//Preparation----------------
window.addEventListener("load", function () {
    const _T0 = document.createElement('script');
    _T0.setAttribute("src", "./tcg-sy/tcg-archer/chara.js");
    document.querySelectorAll('script[src="./tcg-sy/tcg-seizya/main.js"]')[0].parentNode.insertBefore(_T0, document.querySelectorAll('script[src="./tcg-sy/tcg-seizya/main.js"]')[0]);

    const _T1 = document.createElement('script');
    _T1.setAttribute("src", "./tcg-sy/tcg-archer/condition.js");
    document.querySelectorAll('script[src="./tcg-sy/tcg-seizya/main.js"]')[0].parentNode.insertBefore(_T1, document.querySelectorAll('script[src="./tcg-sy/tcg-seizya/main.js"]')[0]);

    const _T2 = document.createElement('script');
    _T2.setAttribute("src", "./tcg-sy/tcg-archer/cards.js");
    document.querySelectorAll('script[src="./tcg-sy/tcg-seizya/main.js"]')[0].parentNode.insertBefore(_T2, document.querySelectorAll('script[src="./tcg-sy/tcg-seizya/main.js"]')[0]);
});

window.addEventListener("load", () => document.querySelectorAll("#mydeck > div").forEach(_E0 => _E0.addEventListener("click", cardclick)));

let cardclickcancel = false;

function cardclick(event) {
    if (cardclickcancel) return undefined;
    if (event.target.classList.contains("onclick")) {
        document.querySelectorAll(".onclick").forEach(_E0 => {
            if (Number(_E0.innerText) > Number(event.target.innerText)) _E0.innerText = Number(_E0.innerText) - 1;
        });
        event.target.innerText = "";
        event.target.classList.remove("onclick");
    } else {
        event.target.innerText = document.querySelectorAll(".onclick").length + 1;
        event.target.classList.add("onclick");
    }
}

//MainChain------------------
window.addEventListener("load", () => document.querySelectorAll("#playbutton").forEach(_E0 => _E0.addEventListener("click", play)));

function play() {
    if (document.querySelectorAll(".onclick").length <= 0) return undefined;

}

//end------------------------
console.log("Tcg-sy was completely loaded.");