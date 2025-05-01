import React, { useState } from 'react';
import Card from './Card';
import CheckIcon from '@mui/icons-material/Check';
import NonInvasiveAlert from './NonInvasiveAlert';
import { FaDiscord } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function openLink(link) {
    window.open(link, '_blank');
}



function Contact() {
    const [alertVisible, setAlertVisible] = useState(false);
    function copyToClipboard(text) {
        navigator.clipboard.writeText(text);
        setAlertVisible(true);
        setTimeout(() => setAlertVisible(false), 2500);
    }
    const contactIcons = [
        < FaDiscord className="Discord" size="30px" color="black" onClick={() => copyToClipboard("Abrams124#2657")} />,
        < CgMail className="Mail" size="30px" color="black" onClick={() => copyToClipboard("materesszer2@gmail.com")} />,
        < FaLinkedin className="LinkedIn" size="30px" color="black" onClick={() => openLink("https://linkedin.com/in/m%C3%A1t%C3%A9-resszer-152b361b6")} />,
        < FaGithub className="Github" size="30px" color="black" onClick={() => openLink("https://github.com/resszermate")} />
         
    ]

    return (
        <section className="Contact">
            {alertVisible && (
                <NonInvasiveAlert description="Copied to clipboard." icon={<CheckIcon fontSize="inherit" />} severity="success" />
            )}
            <Card description={contactIcons} headerText={"Contact me! "}></Card>
        </section>
    )   
}

export default Contact;