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
    <nav className="flex items-center gap-4 p-4 bg-zinc-950 text-white border-b border-zinc-800">
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={`px-4 py-2 rounded-md text-sm transition font-medium
            ${pathname === link.href
              ? 'bg-blue-600 text-white'
              : 'text-zinc-300 hover:text-white hover:bg-zinc-800'}`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;