import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

// This is the main collapsible section component.
const CollapsibleSection = () => {
  // Sample data for the collapsible items.
  const faqData = [
    {
      question: "Benefits of Wearing Rudraksha",
      answer: "These are numerous benefits of Rudraksha for the wearer as these are riddled with magical properties. Before being offered, these beads are subjected to a rigorous procedure to give it a distinctive appearance. Some of the major benefits are listed below:",
      sublist: [
        "Gridded with powerful energy: Before being offered, these beads are infused with positive energies, giving them a distinctive appearance.",
        "Energy bubble: These sacred beads form a protective cocoon, safeguarding you from negative influences.",
        "A sense of pure joy: Every user experiences a sense of pure joy, peace and calmness from within.",
        "Receptivity to Grace: Rudraksha nurtures spiritual growth and enhances your receptivity to grace."
      ]
    },
    {
      question: "How to Care for Your Rudraksha",
      answer: "To ensure your Rudraksha beads remain effective and beautiful for a long time, follow these simple care instructions. Keep them away from harsh chemicals and extreme temperatures. It's recommended to take them off during showers or while swimming.",
    },
    {
      question: "The Significance of Different Mukhis",
      answer: "The number of mukhis, or faces, on a Rudraksha bead determines its specific properties and spiritual benefits. Each mukhi is associated with a different deity and provides unique advantages to the wearer. For example, the one-mukhi bead is very rare and is associated with Lord Shiva himself.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-yellow-500/20 py-12 px-4 sm:px-6 lg:px-8 font-[Inter]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-extrabold text-red-800 text-center mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <button
                className="flex justify-between items-center w-full px-6 py-4 text-left text-lg font-semibold text-red-900 bg-red-900/10 hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={() => toggleItem(index)}
              >
                <span>{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-red-900 transition-transform duration-200" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-red-900 transition-transform duration-200" />
                )}
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 bg-yellow-500/20 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 text-gray-600 leading-relaxed">
                  <p className="mb-2">{item.answer}</p>
                  {item.sublist && (
                    <ul className="list-disc list-inside space-y-1 ml-4">
                      {item.sublist.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollapsibleSection;
