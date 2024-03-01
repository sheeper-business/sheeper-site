import React from 'react';
import css from './contacts.module.css';

export default function Contacts() {
  return (
    <div className={css.container}>
      <div className={css.contactSection}>
        <h2>Contact Us</h2>
        <p>For any questions or inquiries, feel free to reach out to us via email or phone.</p>
        <div className={css.contactDetails}>
          <p>Email: sheeper.business@gmail.com</p>
          <p>Phone: +351 916 884 784</p>
        </div>
      </div>
    </div>
  );
}
