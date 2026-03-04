import React from "react";
import "./WhatsAppButton.css";

interface WhatsAppButtonProps {
  message?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  message = "Hello, I am interested in your Japan Cherry Blossom tour packages. Please share details."
}) => {
  const phoneNumber = "818083572662"; // +81 80-8357-2662 (without +, spaces, -)

  const encodedMessage = encodeURIComponent(message);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleClick} aria-label="Chat on WhatsApp">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="28"
        height="28"
        fill="white"
      >
        <path d="M16 .4C7.6.4.8 7.2.8 15.6c0 2.8.7 5.5 2.1 7.8L.4 31.6l8.4-2.2c2.2 1.2 4.7 1.8 7.2 1.8 8.4 0 15.2-6.8 15.2-15.2S24.4.4 16 .4zm0 27.6c-2.3 0-4.6-.6-6.6-1.8l-.5-.3-5 1.3 1.3-4.9-.3-.5c-1.3-2.1-2-4.5-2-6.9C2.9 8.3 8.3 2.9 16 2.9S29.1 8.3 29.1 15.6 23.7 28 16 28zm7.1-9.8c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.6-.2-.9.2-.3.4-1 1.2-1.3 1.4-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1-2-2.3-2.2-2.7-.2-.4 0-.6.2-.9.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.3-3-.3-.7-.6-.6-.9-.6h-.7c-.2 0-.7.1-1.1.6-.4.5-1.4 1.3-1.4 3.3 0 1.9 1.4 3.8 1.6 4.1.2.3 2.7 4.2 6.5 5.8.9.4 1.6.6 2.2.7.9.3 1.7.3 2.3.2.7-.1 2.3-.9 2.7-1.8.3-.9.3-1.7.2-1.8-.1-.2-.4-.3-.8-.5z"/>
      </svg>
    </button>
  );
};

export default WhatsAppButton;