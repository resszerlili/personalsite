import { EMAIL } from "../constants/links";

document.addEventListener("DOMContentLoaded", () => {
document.addEventListener('click', (event) => {
    if (event.target.ariaLabel === EMAIL){
        const clipboardAlert = document.getElementById('clipboard-alert')
        navigator.clipboard.writeText("resszerlili@gmail.com")
        clipboardAlert.style.display = "block"
        setTimeout(() => {
            clipboardAlert.style.display = "none"
            }, 2000)
    }
    else {
        open(event.target.ariaLabel)
    }
    });
})
