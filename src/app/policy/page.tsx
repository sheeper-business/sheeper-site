import React from 'react';

export default function Policy() {
  return (
    <div style={{ padding: '4rem' }}>
      <h2 style={{ marginBottom: '2rem' }}>Privacy Policy</h2>
      <p>
        This document sets forth the terms and conditions governing the use of the Sheeper mobile
        application. By accessing or using the Application, you agree to comply with and be bound by
        these terms.
      </p>
      <h3 style={{ marginBottom: '2rem', marginTop: '2rem' }}>User Information:</h3>
      <p style={{ marginTop: '1rem' }}>
        a. <strong>Location Permissions:</strong>
        The Application requests permission to access your device`s location services. This
        information is used to provide location-based services within the Application. By using the
        Application, you consent to the collection and use of your location data.
      </p>
      <p style={{ marginTop: '1rem' }}>
        b. <strong>User Data:</strong>
        The Application may collect and store the following user data:
        <span>First Name</span>
        <span>Last Name</span>
        <span>Email</span>
        <span>Image</span>
        This information is used for [indicate purpose, e.g., customization, account management,
        etc.]. By using the Application, you grant us the right to collect, process, and store these
        data.
      </p>
      <h3 style={{ marginBottom: '2rem' }}>Data Security:</h3>
      <p style={{ marginTop: '1rem' }}>
        We are committed to ensuring the security of your data. Your information is stored securely
        and will not be shared with third parties without your explicit consent, except as required
        by law.
      </p>
      <h3 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Opt-Out:</h3>
      <p style={{ marginTop: '1rem' }}>
        You have the right to opt out of location tracking and the collection of certain user data.
        You can manage these preferences in the Application´s settings.
      </p>
      <h3 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Changes to Terms:</h3>
      <p style={{ marginTop: '1rem' }}>
        We reserve the right to modify these terms at any time. The updated terms will be effective
        upon their posting in the Application. It is your responsibility to review these terms
        periodically.
      </p>
      <h3 style={{ marginBottom: '2rem', marginTop: '2rem' }}>Contact Information:</h3>
      <p>
        If you have any questions or concerns about these terms, please contact us via email at{' '}
        <a href="mailto:sheeper.business@gmail.com">sheeper.business@gmail.com</a>.
      </p>
      <p>
        By using the Application, you acknowledge that you have read, understood, and agreed to
        these terms and conditions.
      </p>
      <p style={{ marginTop: '2rem' }}>
        <strong>Note on Background Location Use as a Core Feature:</strong>
        The background location access is a core feature of the Sheeper application. It enables the
        application to notify you about deals you might like when you pass by them, enhancing your
        user experience by providing timely and relevant information based on your location. This
        feature is integral to the personalized service we offer and is designed with user privacy
        and security as a priority.
      </p>
    </div>
  );
}
