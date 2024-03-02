import FaqAccordion from "../../Components/FaqAccordeon/FaqAccordion";
import "./FaqPage.css";

export default function FaqPage() {
  return (
    <div className="faq-page">
      <div className="background-img" />

      <FaqAccordion />

      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/Pio678">Piotr Juszczak</a>.
      </div>
    </div>
  );
}
