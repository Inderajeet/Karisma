import React, { useState } from 'react';
import './accordian.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing arrow icons

const Accordion = ({ title, content, onApply }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3>{title}</h3>
        <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span> {/* Toggle between up and down arrows */}
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
          <button className="apply-button third" onClick={onApply}>
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Accordion;
