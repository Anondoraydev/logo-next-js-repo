"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import Image from 'next/image';
import Logo from '../../public/image/logo.png'

const Header = () => {
  const pathname = usePathname();

  const navLink = (
    <>
      <li>
        <Link
          href="/pages/home"
          className={`${pathname === '/pages/home' ? '!text-[#FD6F00] font-semibold border-b-2 border-blue-500' : 'text-[#959595]'
            } hover:text-blue-500`}
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href="/pages/services"
          className={`${pathname === '/pages/services' ? '!text-[#FD6F00] font-semibold border-b-2 border-blue-500' : 'text-[#959595]'
            } hover:text-blue-500`}
        >
          Services
        </Link>
      </li>
      <li>
        <Link
          href="/pages/about"
          className={`${pathname === '/pages/about' ? '!text-[#FD6F00] font-semibold border-b-2 border-blue-500' : 'text-[#959595]'
            } hover:text-blue-500`}
        >
          About me
        </Link>
      </li>
      <li>
        <Link
          href="/pages/portfolio"
          className={`${pathname === '/pages/portfolio' ? '!text-[#FD6F00] font-semibold border-b-2 border-blue-500' : 'text-[#959595]'} hover:text-blue-500`}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link
          href="/pages/contact"
          className={`${pathname === '/pages/contact' ? '!text-[#FD6F00] font-semibold border-b-2 border-blue-500' : 'text-[#959595]'} hover:text-blue-500`}
        >
          Contact me
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-7xl mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLink}
          </ul>
        </div>
        <Image src={Logo} alt='Logo'/>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Header;
