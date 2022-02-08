let display = document.querySelector('#display');
let buttons = document.getElementsByTagName('button');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", (e) => {
        console.log(e.target.innerText);
        switch (e.target.innerText) {
            case "C": display.innerText = "";
                break;
            case "=": display.innerText = eval(display.innerText);
                break;
            case "←": display.innerText = display.innerText.slice(0, -1);
                break;
            default: display.innerText += e.target.innerText;
        }
    })
}