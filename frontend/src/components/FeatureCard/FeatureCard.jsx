import "./FeatureCard.css";

function FeatureCard(props){ //you can also write function FeatureCard({title, description})
    return(
        <div className="feature-card">

            <div className="feature-icon">
                {props.icon}
            </div>
            
            <h3>{props.title}</h3>

            <p>{props.description}</p>
        </div>
    );
}

export default FeatureCard;