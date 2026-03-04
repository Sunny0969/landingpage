import { useState } from 'react';
import './faq.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: 'When is the best time to book Japan cherry blossom tours?',
      answer: 'Late March to early April is peak bloom season, but dates vary by city. Early booking is highly recommended.'
    },
    {
      id: 2,
      question: 'Are your cherry blossom tour packages private or group based?',
      answer: 'We specialize in private cherry blossom tour Japan experiences with customizable itineraries.'
    },
    {
      id: 3,
      question: 'Do you offer luxury cherry blossom tours in Japan?',
      answer: 'Yes, we provide premium 5-star hotel stays, private transport, and exclusive cultural experiences.'
    },
    {
      id: 4,
      question: 'Can I customize my sakura season Japan tour?',
      answer: 'Absolutely. All our japan cherry blossom tours can be tailored based on your travel dates and preferences.'
    },
    {
      id: 5,
      question: 'What cities are included in your japan cherry blossom tour packages?',
      answer: 'Tokyo, Kyoto, Osaka, Mount Fuji, and other top sakura viewing destinations.'
    },
    
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq" aria-label="Frequently Asked Questions">
      <div className="faq__container">
        <div className="faq__content">
          {/* Left Section */}
          <div className="faq__left">
          <h2 className="faq__title">FAQs About <span style={{ color: '#37937B' }}>Japan Cherry Blossom </span>Tours</h2>
            <p className="faq__description">
              Got questions? We've got answers. Explore everything you need to know in one place.
            </p>
          </div>

          {/* Right Section */}
          <div className="faq__right">
            <div className="faq__list">
              {faqs.map((faq, index) => (
                <div key={faq.id} className={`faq__item ${openIndex === index ? 'faq__item--open' : ''}`}>
                  <button
                    className="faq__question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={openIndex === index}
                    aria-controls={`faq-answer-${faq.id}`}
                  >
                    <span className="faq__question-text">{faq.question}</span>
                    <span className="faq__icon">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 4V16M4 10H16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </button>
                  <div
                    id={`faq-answer-${faq.id}`}
                    className="faq__answer"
                    aria-hidden={openIndex !== index}
                  >
                    <p className="faq__answer-text">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
