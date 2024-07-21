import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';
const footerLinks = [
  { name: 'Home', href: '/' },
  { name: 'Men', href: '/test' },
  { name: 'Women', href: '/test' },
  { name: 'Children', href: '/test' },
  { name: 'Contact', href: '/test' }
];

export default function Footer() {
  return (
    <footer className="bg-white shadow-sm">
      {/* <div className="max-w-7xl mx-auto px-8 lg:px-12 py-8"> */}
       
       
        <div className=" mt-12 border-t-4 border-zinc-200 pt-8 text-center ">
          <p className="text-gray-400">&copy; 2024 Mati Ur Rehman. All rights reserved.</p>
        </div>
        
    </footer>
  );
}
