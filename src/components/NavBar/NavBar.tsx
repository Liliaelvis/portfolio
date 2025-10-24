'use client'
import React from 'react'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import { House, CircleUser, Briefcase } from 'lucide-react';

//TODO: Update NavBar component
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: Event) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('touchstart', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('touchstart', handleClickOutside);
        };
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };
  return (
    <div className="fixed z-40 flex justify-center mx-autoflex w-full inset-x-0">
      <nav id="navbar" className="w-full  max-w-340 p-4 flex flex-wrap shadow-sm shadow-primary-dark-foreground backdrop-blur-xs z-50 bg-accent/90 dark:bg-secondary-dark text-primary-foreground dark:text-primary-dark-foreground rounded-full mt-4 min-h-16">
        {/* Large Screen*/}
        <div className="hidden grow lg:flex lg:items-center lg:w-auto space-x-4">
          <div>
            <a href="/cv.pdf" download="Hector Lazcano CV.pdf" className="inline-block text-md px-4 py-2 leading-none border rounded hover:text-primary-foreground border-primary hover:border-transparent hover:bg-primary mt-4 lg:mt-0">
              Download CV
            </a>
          </div>
          <div className="text-md space-x-3">
            <Link href="/projects" className="block lg:inline-block lg:mt-0 font-bold text-primary-foreground dark:text-primary-dark-foreground">
              <Briefcase className="inline-block hover:bg-gray-100/75 hover:text-black rounded-full py-0 p-1 w-10 h-10" aria-label="Go to Projects"/>
            </Link>            
          </div>
        </div>

        {/* Small screens */}
        <div className="block lg:hidden" ref={menuRef}>
          <button 
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 mt-2 border rounded text-slate-200 border-white hover:border-primary hover:text-white transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
          {/* Small screen menu */}
          <div className={`bg-accent absolute left-0 top-full mt-0.5 shadow-xl rounded-lg py-2 px-4 w-36 ml-0.5 z-50 border border-accent transition-all duration-300 ${
            isMenuOpen ? 'block opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-2'
          }`}>
            <Link 
              href="/projects" 
              className="block text-sm py-2 text-primary-foreground dark:text-primary-dark-foreground"
              onClick={closeMenu}
              aria-label="Open Projects"
            >
              Projects
            </Link>
            <div className="border-t border-primary my-2"></div>
            <a 
              href="/cv.pdf" 
              download="Hector Lazcano CV.pdf" 
              className="inline-block text-sm px-2 py-2 leading-none border rounded hover:text-primary-foreground border-primary hover:border-transparent hover:bg-primary transition-colors duration-300"
              onClick={closeMenu}
              aria-label="Download CV"
            >
              Download CV
            </a>
          </div>
        </div>
        {/* Home link */}
        <div className="flex items-center grow justify-end mr-1">
          <Link href="/contact" className="block lg:inline-block lg:mt-0 font-bold text-primary-foreground dark:text-primary-dark-foreground">
            <CircleUser className="inline-block hover:bg-gray-100/75 hover:text-black rounded-full py-0 p-1 w-10 h-10" aria-label="Go to Contact"/>
          </Link>
          <Link href="/">
            <House className="inline-block hover:bg-gray-100/75 hover:text-black rounded-full py-0 p-1 w-10 h-10" aria-label="Go to Home"/>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default NavBar