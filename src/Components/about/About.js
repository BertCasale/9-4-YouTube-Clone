import "./About.css";
import developerBios from "./developerBios";
import Developer from "./Developer";

export default function About() {
  return (
    <div>
      <h2>Pursuit 9.4 Project YouTube Clone</h2>
      <p>A group project utilizing skills learned in and outside of class.</p>
      <br />
      <h2>Featuring</h2>
      {
        developerBios.map((developerBio, index) => {
          return (
            <Developer key={developerBio.github} developerBio={developerBio} />
          );
        })
      }
    </div>
  );
}