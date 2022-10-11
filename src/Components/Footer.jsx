import React from "react";

function Footer() {
  const year = new Date().toLocaleDateString();
  return (
    <footer>
      <p>{year}</p>
    </footer>
  );
}

export default Footer;
