import { useState } from 'react';
import { motion } from 'framer-motion';

interface AccordionItem {
  title: string;
  content: React.ReactNode;
  iconInactive: string;
  iconActive: string;
}

interface CustomAccordionProps {
  items: AccordionItem[];
}

const CustomAccordion: React.FC<CustomAccordionProps> = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="py-10">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden">
          <button
            className="w-full flex py-3"
            onClick={() => toggleAccordion(index)}
          >
            <motion.div
              className={`flex w-full items-center ${expandedIndex === index ? 'flex-row-reverse' : ''}`}
              layout
              transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
            >
              <motion.div
                className="flex-shrink-0"
                layout
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                <img
                  src={expandedIndex === index ? item.iconActive : item.iconInactive}
                  alt="Accordion Icon"
                  className={expandedIndex === index ? "w-20" : "w-10"}
                />
              </motion.div>
              <motion.span
                className={expandedIndex === index ? 
                  "flex-grow text-left font-bold text-xl mx-5 bg-customOrange py-2 px-7 text-white italic"
                   : 
                  "flex-grow text-left font-bold text-xl mx-5 bg-[#D9D9D9] py-2 px-7 text-customBlue italic hover:bg-customOrange hover:text-white"} 
                layout
                transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
              >
                {item.title}
              </motion.span>
            </motion.div>
          </button>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: expandedIndex === index ? 'auto' : 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
            className="overflow-hidden"
          >
            <div className="py-4 px-1 md:px-5 text-xl">
              {item.content}
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default CustomAccordion;