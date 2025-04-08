import React, { useState } from 'react';
import './accordian.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Accordion = ({ title, content, onApply }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className='title'>{title}</h3>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          {content}
          <button className="apply-button third" onClick={onApply}>
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Accordion;