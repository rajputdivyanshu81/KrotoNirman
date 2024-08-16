// src/components/FAQ.jsx
import React, { useState } from 'react';


// now to code to made the questions what have to write in the faq section of the website
const faqs = [
  {
    question: 'How do I get started with Kroto?',
    answer: 'Sign up for an account, choose your plan, and follow our step-by-step guide to create your first educational video.',
  },
  {
    question: 'Can I use AI-generated content in my videos?',
    answer: 'Yes, our platform provides AI-generated suggestions and content to enhance your educational videos.',
  },
  {
    question: 'Is there a free trial available?',
    answer: 'We offer a 14-day free trial for all new users to explore our features and tools.',
  },
  {
    question: 'How does the AI content suggestion work?',
    answer: 'Our AI analyzes your video content and suggests relevant topics, questions, and additional information to enrich your educational materials.',
  },
  {
    question: 'Can I upgrade or downgrade my plan?',
    answer: 'Yes, you can change your plan at any time. The changes will be reflected in your next billing cycle.',
  },
  {
    question: 'Do you offer support for technical issues?',
    answer: 'Absolutely! We provide email support for all plans, and priority support with screen sharing for Pro and Enterprise plans.',
  },
  {
    question: 'Is my content secure on your platform?',
    answer: 'Yes, we use industry-standard encryption and security measures to protect your content and personal information.',
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-600 dark:text-blue-400">Frequently Asked Questions</h2>
        <div className="space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md transform transition duration-300 hover:scale-105">
              <button
                className="w-full text-left p-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{faq.question}</span>
                  <span className="text-2xl">{activeIndex === index ? '−' : '+'}</span>
                </div>
              </button>
              {activeIndex === index && (
                <div className="p-4 pt-0 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                  <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;