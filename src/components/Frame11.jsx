import React from "react";
import { Accordion } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FAQSection = () => {
  const faqItems = [
    {
      question: "Is UMRA only for chronic conditions?",
      answer:
        "No, UMRA is a comprehensive health monitoring platform for everyone. While it excels at managing chronic conditions, its features, such as medication logs, AI-powered advice, and mobile medical records, are beneficial for general health and wellness.",
    },
    {
      question: "Is my data safe?",
      answer:
        "Yes, data security is our top priority. We use military-grade encryption and comply with international standards like HIPAA and GDPR. Your data is never shared without your explicit consent and is stored in secure, geographically-distributed data centers.",
    },
    {
      question: "How accurate are the AI recommendations?",
      answer:
        "Our AI-powered recommendations are a result of extensive research and are continuously refined by a team of medical experts. While they provide insightful guidance, they should not replace professional medical advice. Always consult with your doctor for a definitive diagnosis or treatment plan.",
    },
    {
      question: "What devices are compatible with UMRA?",
      answer:
        "UMRA is designed to be compatible with a wide range of devices. It integrates seamlessly with popular smartwatches, blood pressure monitors, glucose meters, and other health trackers to provide a holistic view of your health data.",
    },
    {
      question: "How much does UMRA cost?",
      answer:
        "We offer a range of subscription plans to fit your needs. Our basic plan is free to use and provides essential features. For advanced monitoring and premium services, we have affordable monthly and yearly subscription options. Please check our pricing page for more details.",
    },
    {
      question: "Can I share my data with my doctor?",
      answer:
        "Yes, absolutely. The platform allows you to securely share specific health data or your complete medical history with your healthcare provider with a single click. This feature ensures your doctor has real-time insights into your health for better-informed consultations.",
    },
  ];

  return (
    <div id="faq"
      className="container-fluid py-5"
      style={{ backgroundColor: "#F8F9FA" }}
    >
      <div className="container text-center py-5">
        <h2 className="fw-bold">Frequently Asked Questions</h2>
        <p
          className="text-secondary mx-auto mb-5"
          style={{ maxWidth: "600px" }}
        >
          Everything you need to know about UMRA
        </p>

        <Accordion
          defaultActiveKey="0"
          className="mx-auto"
          style={{ maxWidth: "800px" }}
        >
          {faqItems.map((item, index) => (
            <Accordion.Item
              key={index}
              eventKey={index.toString()}
              className="mb-3 rounded-3 shadow-sm border-0"
              style={{ backgroundColor: "#FFF" }}
            >
              <Accordion.Header className="py-3 px-4">
                <span className="fw-bold">{item.question}</span>
              </Accordion.Header>
              <Accordion.Body>
                <p className="text-secondary mb-0">{item.answer}</p>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

      <div className="container text-center mt-5">
        <p className="text-secondary mb-2">
          Still have questions? We're here to help.
        </p>
        <a
          href="#contact"
          className="text-primary fw-bold text-decoration-none"
        >
          Contact our support team
        </a>
      </div>
    </div>
  );
};

export default FAQSection;
