import React, {useState, useEffect} from "react";
import './css/role.css';

const roles = ['Computer Science Graduate','UI/UX Designer','Frontend Developer', 'Graphic Designer'];

const RoleChanger = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
  
    useEffect(() => {
      const role = roles[currentRoleIndex];
      let timeout;
  
      if (isDeleting) {
        timeout = setTimeout(() => {
          setCurrentText(role.substring(0, currentText.length - 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setCurrentText(role.substring(0, currentText.length + 1));
        }, 100);
      }
  
      if (!isDeleting && currentText === role) {
        timeout = setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
  
      return () => clearTimeout(timeout);
    }, [currentText, isDeleting, currentRoleIndex]);
  
    return (
      <div className="role-changer m-0 p-0">
        <span className="role">A {currentText}</span>
        <span className="cursor">|</span>
      </div>
    );
  };
  
  export default RoleChanger;