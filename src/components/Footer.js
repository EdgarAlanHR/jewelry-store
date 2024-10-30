import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold">Contact Us</h4>
          <p>Email: info@jewelrystore.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h4 className="text-lg font-bold">Follow Us</h4>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-gray-400">Facebook</a>
            <a href="https://twitter.com" className="hover:text-gray-400">Twitter</a>
            <a href="https://instagram.com" className="hover:text-gray-400">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
