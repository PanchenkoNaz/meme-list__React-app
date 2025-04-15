'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const links = [
    { href: '/table', label: 'Table View' },
    { href: '/list', label: 'List View' },
  ];

  return (
    <nav className="flex gap-4 p-4 bg-gray-100 border-b border-gray-300">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-3 py-2 rounded ${
            pathname === link.href
              ? 'bg-blue-600 text-white'
              : 'text-blue-600 hover:bg-blue-100'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
