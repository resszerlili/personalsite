import { EMAIL, GITHUB, LINKEDIN } from "../constants/links";

const links = document.getElementById('links');
let timeoutID;

links.addEventListener('click', async (event) => {
    if (!event){
        return
    }
    if (event.target.ariaLabel === EMAIL){
        if (timeoutID){
            clearTimeout(timeoutID)
        }
        const clipboardAlert = document.getElementById('clipboard-alert')
        await navigator.clipboard.writeText("resszerlili@gmail.com")
        clipboardAlert.style.display = "block"
        timeoutID = setTimeout(() => {
            clipboardAlert.style.display = "none"
            }, 2000)
    }
    else if(event.target.ariaLabel === GITHUB | event.target.ariaLabel === LINKEDIN) {
        open(event.target.ariaLabel)
    }
    });