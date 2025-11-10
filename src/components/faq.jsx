import { useState } from "react";
import "../assets/css/faq.css";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is Netflix?",
      answer:
        "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, and more on thousands of internet-connected devices."
    },
    {
      question: "How much does Netflix cost?",
      answer:
        "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month."
    },
    {
      question: "Where can I watch?",
      answer:
        "Watch anywhere, anytime, on an unlimited number of devices. Sign in with your Netflix account to watch instantly on the web or on your mobile devices."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h1>Frequently Asked Questions</h1>

      {faqs.map((item, index) => (
        <div
          className={`faq ${activeIndex === index ? "active" : ""}`}
          key={index}
          onClick={() => toggleFAQ(index)}
        >
          <div className="question">
            <h3>{item.question}</h3>
            <span className="icon">{activeIndex === index ? "×" : "+"}</span>
          </div>
          <div className="answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
