import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus } from 'lucide-react';

export default function FAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };


  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-[#2f365b]">
          Questions fréquentes
        </h2>
        
        <p className="text-center text-gray-600 mb-12">
          Découvrez comment notre SIRH peut transformer la gestion de vos ressources humaines
        </p>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={faq.id}
              className={`border rounded-lg shadow transition-all duration-300 ${activeIndex === index ? 'bg-orange-600/10 opac' : 'bg-white'}`}
            >
              <button
                className="flex justify-between items-center w-full p-5 text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-medium text-[#2f365b]">
                  {faq.question}
                </h3>
                <span 
                  className={`flex items-center justify-center h-8 w-8 rounded-full transition-colors ${
                    activeIndex === index 
                      ? 'bg-[#ea532c] text-white' 
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {activeIndex === index ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 pt-0">
                  <div className="p-4 rounded-lg bg-white border border-gray-100">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <a 
            href="/demo" 
            className="flex items-center px-6 py-3 bg-[#ea532b] hover:bg-orange-600 text-white font-medium rounded-lg transition-colors duration-300"
          >
            <Plus className="mr-2 h-5 w-5" />
            Demander une démo
          </a>
        </div>
      </div>
    </section>
  );
}