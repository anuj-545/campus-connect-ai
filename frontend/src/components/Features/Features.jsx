import "./Features.css";
import FeatureCard from "../FeatureCard/FeatureCard";

const features = [
    {
        id: 1,
        icon: "📅",
        title: "Campus Events",
        description: "Stay updated with all campus events and activities."
    },
    {
        id: 2,
        icon: "🤖",
        title: "AI Study Assistant",
        description: "Ask AI your study doubts anytime."
    },
    {
        id: 3,
        icon: "📚",
        title: "Notes Sharing",
        description: "Upload and download notes easily."
    },
    {
        id: 4,
        icon: "👥",
        title: "Student Community",
        description: "Connect with students across your campus."
    },
    {
        id: 5,
        icon: "📊",
        title: "Dashboard",
        description: "Track your learning and activities."
    },
    {
        id: 6,
        icon: "🔒",
        title: "Secure Login",
        description: "Protected with JWT Authentication."
    }
];

function Features(){
    return(
        <section className="features">
            <h2>Why Choose SampusConnect AI?</h2>

            <div className="features-grid">
                
                {features.map((feature) => (
                    <FeatureCard
                        key = {feature.id}
                        icon = {feature.icon}
                        title = {feature.title}
                        description = {feature.description}
                    />
                ))}
            </div>
        </section>
    );
}

export default Features;