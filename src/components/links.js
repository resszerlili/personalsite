import { navigate } from "astro:transitions/client";


const clipboardAlert = document.getElementById('clipboard-alert');
const emailButton = document.getElementById('email');
console.log(emailButton)
emailButton.addEventListener('click', () => {
    console.log("clibpoardlick")
    navigator.clipboard.writeText("resszerlili@gmail.com")
    clipboardAlert.style.display = "block"
    setTimeout(() => {
        clipboardAlert.style.display = "none"
        }, 2000)
    })
const linkOpeners = document.getElementsByClassName('linkopener');
for (const item of linkOpeners){
    item.addEventListener('click', () => {
        if (item.ariaLabel){
            navigate(item.ariaLabel);
        }
    })
}