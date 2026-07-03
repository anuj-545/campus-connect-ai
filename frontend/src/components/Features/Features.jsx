import "./Features.css";
import FeatureCard from "../FeatureCard/FeatureCard";

function Features(){
    return(
        <secton className="features">
            <h2>Why Choose SampusConnect AI?</h2>

            <div className="features-grid">
                
                <FeatureCard
                    icon="📅"
                    title="Campus Events"
                    description="Stay updated with all campus events and activities."
                />

                  <FeatureCard
                    icon="🤖"
                    title="AI Study Assistant"
                    description="Ask AI your study doubts anytime."
                />

                  <FeatureCard
                    icon="📚"
                    title="Notes Sharing"
                    description="Upload and download notes easily."
                />

                  <FeatureCard
                    icon="👥"
                    title="Student Community"
                    description="Connect with students across you campus"
                />

                  <FeatureCard
                    icon="📊"
                    title="Dashboard"
                    description="Track your learning and activities"
                />

                  <FeatureCard
                    icon="🔒"
                    title="Secure Login"
                    description="Protected with JWT Authentication."
                />

            </div>
        </secton>
    );
}

export default Features;