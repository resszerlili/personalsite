import { EMAIL, GITHUB, LINKEDIN } from "../constants/links";

document.addEventListener('click', async (event) => {
    if (!event){
        return
    }
    if (event.target.ariaLabel === EMAIL){
        const clipboardAlert = document.getElementById('clipboard-alert')
        await navigator.clipboard.writeText("resszerlili@gmail.com")
        clipboardAlert.style.display = "block"
        setTimeout(() => {
            clipboardAlert.style.display = "none"
            }, 2000)
    }
    else if(event.target.ariaLabel === GITHUB | event.target.ariaLabel === LINKEDIN) {
        open(event.target.ariaLabel)
    }
    });