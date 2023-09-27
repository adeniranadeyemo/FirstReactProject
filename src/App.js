import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div className="avatar">
      <img src="Adeniran.jpg" alt="Adeniran" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h3>Adeniran Adeyemo</h3>
      <p className="intro-para">
        I am Bsc. Anatomy graduate and a Frontend Developer, as well as a
        graphic designer. I like to read about history, psychology and cultures.
        I speak Yoruba, English and four other languages at intermidiate level.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <div className="skill skill1">
        <Skill name="HTML + CSS 🤙🏾" />
      </div>

      <div className="skill skill2">
        <Skill name="JavaScript 💪🏾" />
      </div>

      <div className="skill skill3">
        <Skill name="Graphic Design 💪🏾" />
      </div>

      <div className="skill skill4">
        <Skill name="Tailwind CSS 👶🏾" />
      </div>

      <div className="skill skill5">
        <Skill name="ReactJs 👶🏾" />
      </div>

      {/* <div className="skill skill5">
        <Skill name="NextJS 👶🏾" />
      </div> */}

      {/* 
      <div className="skill skill">
        <Skill name="GSAP 👶🏾" />
      </div> */}
    </div>
  );
}

function Skill(props) {
  return <p>{props.name}</p>;
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
