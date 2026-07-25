import React from 'react'
import "./FloatingButton.css";
import { MessageCircle } from "lucide-react";
import { CONTACT } from "../../data/config";

const FloatingButton = () => {
  return (
    <button className="floating-button">
      
      
      <a href={`https://wa.me/${CONTACT.phoneCel || '85999025454'}`} target="_blank" rel="noopener noreferrer">
      <MessageCircle size={24} />
      </a>
    </button>
  )
}

export default FloatingButton;