import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex items-center justify-center md:justify-start">
        <span className="font-poppins font-bold text-6xl leading-tight">LOGO</span>        </div>
        <div>
          <h5 className="font-bold mb-4">Column 1</h5>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Link 1</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Link 2</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Link 3</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Column 2</h5>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Link 1</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Link 2</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Link 3</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold mb-4">Column 3</h5>
          <ul>
            <li className="mb-2"><a href="#" className="hover:underline">Link 1</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Link 2</a></li>
            <li className="mb-2"><a href="#" className="hover:underline">Link 3</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
