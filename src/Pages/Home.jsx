import { Link } from "react-router-dom";
import profileImage from '../assets/profile-suit.jpg'; // replace with your image
import "../home.css"

export function Home() {
  return (
    <section className="profile-section">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <div className="profile-text">
        <h1 className="profile-name">Reinaldo Yang</h1>
        <p className="profile-paragraph">
          I am a Master’s student in Computer Science Department Artificial Intelligence Program at National Cheng Kung University. I conduct research in AI and Robotics.
          I am also passionate about building practical AI applications
        </p>
      </div>
    </section>
  );
}
