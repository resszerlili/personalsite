
import Card from './Card';
import '../styles/About.css'

function About() {
    const techIcons = [
        <img key="Visual Studio" src="https://skillicons.dev/icons?i=visualstudio" alt="React" className="tech-icon" />,
        <img key="aws" src="https://skillicons.dev/icons?i=aws" alt="AWS" className="tech-icon" />,
        <img key="cs" src="https://skillicons.dev/icons?i=cs" alt="PostgreSQL" className="tech-icon" />,
        <img key="python" src="https://skillicons.dev/icons?i=python" alt="Python" className="tech-icon" />,
        <img key="git" src="https://skillicons.dev/icons?i=git" alt="JavaScript" className="tech-icon" />,
    ];
    return (
        <section className="About">
        <div className="AboutContainer">
            <h1>Hi There!</h1>
            <p>My name's Matt!</p>
            <p>I am a computer engineer studying at Obuda University, with experience in Backend development. I am always looking to expand my horizons, so feel free to hit me up if you have any cool ideas!</p>
            </div>
            <Card description={techIcons} headerText={"A few technologies I Use: "}></Card>
        </section>

    )
}

export default About;