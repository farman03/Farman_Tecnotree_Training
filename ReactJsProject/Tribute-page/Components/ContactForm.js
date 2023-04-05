import React from 'react';

function ContactForm() {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" required /><br></br>
      
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" required /><br></br>
      
      <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" required></textarea>
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
