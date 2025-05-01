

import '../styles/Card.css';

function Card({description, headerText }) {
  
    return (
        <div className="Card">
            <h2>{headerText}</h2>
            <div className="icon-container">
                {description }
            </div>
        </div>


    )
}

export default Card;