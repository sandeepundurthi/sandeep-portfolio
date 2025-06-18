import React from 'react';

export function Contact() {
  return (
    <section className="px-6 py-16 bg-gray-900" id="contact">
      <h2 className="text-3xl font-bold text-teal-400 mb-6">Contact</h2>
      <p className="text-gray-300 mb-4">You can reach me at:</p>
      <ul className="text-teal-300">
        <li>Email: <a href="mailto:sandy.undurthi@gmail.com" className="underline">sandy.undurthi@gmail.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com/in/sandeep-undurthi" className="underline" target="_blank">linkedin.com/in/sandeep-undurthi</a></li>
        <li>GitHub: <a href="https://github.com/sandeepundurthi" className="underline" target="_blank">github.com/sandeepundurthi</a></li>
      </ul>
    </section>
  );
}