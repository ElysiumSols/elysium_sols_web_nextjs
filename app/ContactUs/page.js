"use client";
import React from "react";

function ContactUs() {
  const htmlContentWithScript = `
    <script type="text/javascript" src="https://form.jotform.com/jsform/223421865801049"></script>
  `;
  return (
    <div>
      <div
        className="pt-16"
        dangerouslySetInnerHTML={{ __html: htmlContentWithScript }}
      />
    </div>
  );
}

export default ContactUs;
