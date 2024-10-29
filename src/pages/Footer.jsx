import React from 'react';

import { Button } from '@/components/ui/button';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background border-t py-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Link to="/" className="text-lg font-semibold">
            <span>Company Name</span>
          </Link>
          <Separator orientation="vertical" className="hidden md:block" />
          <nav className="flex gap-4 text-muted-foreground text-sm">
            <Link
              to="/"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              to="/services"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className="transition-colors hover:text-foreground hover:underline underline-offset-4"
            >
              Contact
            </Link>
          </nav>
        </div>
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            size="icon"
            className="transition-transform transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
          >
            <Facebook className="h-5 w-5" />
            <span className="sr-only">Facebook</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="transition-transform transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
          >
            <Twitter className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="transition-transform transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
          >
            <Instagram className="h-5 w-5" />
            <span className="sr-only">Instagram</span>
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            className="transition-transform transform hover:scale-110 hover:bg-primary hover:text-primary-foreground"
          >
            <Linkedin className="h-5 w-5" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
