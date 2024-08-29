import React, { useEffect, useState, useRef } from 'react';
import './css/skills.css';

const RoleCard = ({ title, details, skills }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(cardRef.current); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card col-md p-3 text-center rounded-5 m-2 role-card ${isVisible ? 'show' : ''}`}
    >
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
        <p className='card-text text2 text-justify'>{details}</p>
      </div>
      <div className="card-body">
        {skills.map((skill, index) => (
          <div className="progress mb-2" key={index}>
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${skill.percentage}%` }}
              aria-valuenow={skill.percentage}
              aria-valuemin="0"
              aria-valuemax="100"
            >
              {skill.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoleCard;
