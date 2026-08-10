import { EMAIL } from "../constants/links";

const links = document.getElementById('links')

links.addEventListener('click', async (event) => {
    if (event.target.ariaLabel === EMAIL){
        const clipboardAlert = document.getElementById('clipboard-alert')
        await navigator.clipboard.writeText("resszerlili@gmail.com")
        clipboardAlert.style.display = "block"
        setTimeout(() => {
            clipboardAlert.style.display = "none"
            }, 2000)
    }
    else {
        open(event.target.ariaLabel)
    }
    });