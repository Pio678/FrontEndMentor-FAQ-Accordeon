import starIconImg from "../../assets/images/icon-star.svg";
import iconPlusImg from "../../assets/images/icon-plus.svg";
import iconMinusImg from "../../assets/images/icon-minus.svg";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import "./FaqAccordion.css";

export default function FaqAccordion() {
  const [FaqArr, setFaqArr] = useState([
    {
      id: uuidv4(),
      question: "What is Frontend Mentor, and how will it help me?",
      answer: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.`,
      isActive: false,
    },
    {
      id: uuidv4(),
      question: "Is Frontend Mentor free?",
      answer:
        "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      isActive: false,
    },
    {
      id: uuidv4(),
      question: "Can I use Frontend Mentor projects in myportfolio?",
      answer:
        "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      isActive: false,
    },
    {
      id: uuidv4(),
      question: "How can I get help if I'm stuck on a challenge?",
      answer:
        "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      isActive: false,
    },
  ]);

  function toogleQuestion(id) {
    setFaqArr((prevFaqArr) => {
      const newFaqArr = prevFaqArr.map((FaqQuestion) => {
        if (FaqQuestion.id !== id) {
          return { ...FaqQuestion, isActive: false };
        } else if (FaqQuestion.id === id) {
          return { ...FaqQuestion, isActive: !FaqQuestion.isActive };
        }
      });
      return newFaqArr;
    });
  }

  const FaqAccordionContent = FaqArr.map((FaqQuestion, index) => {
    return (
      <>
        <div className="question-container" key={FaqQuestion.id}>
          <p
            className="question"
            onClick={() => {
              toogleQuestion(FaqQuestion.id);
            }}
          >
            {FaqQuestion.question}
          </p>

          <img
            className="faq-toogle-button"
            src={FaqQuestion.isActive ? iconMinusImg : iconPlusImg}
            onClick={() => {
              toogleQuestion(FaqQuestion.id);
            }}
            alt={FaqQuestion.isActive ? "minus icon" : "plus icon"}
          />
        </div>
        {FaqQuestion.isActive && (
          <p className="faq-answer">{FaqQuestion.answer}</p>
        )}
        {index < FaqArr.length - 1 && <hr className="question-separator" />}
      </>
    );
  });

  return (
    <main className="faq-container">
      <h1 className="faq-header">
        <img className="star-icon" src={starIconImg} alt="star icon" />
        FAQs
      </h1>
      {FaqAccordionContent}
    </main>
  );
  /*
   */
}
