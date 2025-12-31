import React, { useState  } from "react";
import "../CSS/faqs.css"

const faqData = [
  {
    id: 1,
    question: "What is a QR Code?",
    answer:
      "A QR Code (Quick Response Code) is a type of matrix barcode that can store information such as URLs, text, or other data that can be easily scanned using a smartphone or QR code reader."
  },
  {
    id: 2,
    question: "How do I generate a QR Code using this application?",
    answer:
      "To generate a QR Code, simply enter the data you want to encode (such as a URL or text) into the input field, customize the design if desired, and click the 'Generate' button. Your QR Code will be created instantly!"
  },
  {
    id: 3,
    question: "Is this QR Code generator free to use?",
    answer:
      "Yes, this QR Code generator is completely free to use for generating QR Codes for personal, business, or educational purposes."
  },
  {
    id: 4,
    question: "Can I customize the design of my QR Code?",
    answer:
      "Yes, you can customize the design of your QR Code by changing colors, adding a logo, and selecting different styles to make it unique and visually appealing."
  },
  {
    id: 5,
    question: "What types of data can I encode in a QR Code?",
    answer:
      "You can encode various types of data in a QR Code, including URLs, plain text, contact information (vCard), email addresses, phone numbers, and more."
  }
];

function FAQ() {
  const [openId, setOpenId] = useState(null);

  const handleClick = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq">
      <div className="faqs">
        <h1 className="faq-heading">Frequently Asked Questions (FAQ's)</h1>
        <div className="faqs-container">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            const panelId = `faq-panel-${item.id}`;
            const buttonId = `faq-button-${item.id}`;
            return (
              <div className={`faq-item ${isOpen ? "open" : ""}`} key={item.id}>
                <h2 className="faq-question-heading">
                  <button
                    className={`faq-question ${isOpen ? "active" : ""}`}
                    onClick={() => handleClick(item.id)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    id={buttonId}
                  >
                    {item.question}
                  </button>
                </h2>
                <div
                  className="faq-answer"
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
