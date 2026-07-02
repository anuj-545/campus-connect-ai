import "./Hero.css";

function Hero(){
    return(
        <section className="hero">
            <div className="hero-content">
                <h1>Your Smart Campus Companion</h1>

                <p>
                    Manage events, access notes, and study smarter with CampusConnect AI.
                </p>

                <div className="hero-buttons">
                    <button className="primary-btn">Get Started</button>
                    <button className="secondary-btn">Explore Features</button>
                </div>

            </div>
        </section>
    );
}

export default Hero;