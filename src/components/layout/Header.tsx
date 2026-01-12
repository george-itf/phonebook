'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Search, User, Camera, Heart, Trophy, HelpCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui';

const navLinks = [
  { href: '/photos', label: 'Photos', icon: Camera },
  { href: '/leaderboard', label: 'Leaderboard', icon: Trophy },
  { href: '/community', label: 'Community', icon: Heart },
  { href: '/offers', label: 'Offers', icon: null },
  { href: '/ask', label: 'Ask a Local', icon: HelpCircle },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-oyster-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-ocean-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">W</span>
            </div>
            <span className="font-semibold text-oyster-900 hidden sm:block">
              whitstable.shop
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-oyster-600 hover:text-oyster-900 hover:bg-oyster-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="p-2 text-oyster-600 hover:text-oyster-900 hover:bg-oyster-50 rounded-lg transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <Link href="/photos/submit">
              <Button size="sm" leftIcon={<Camera className="h-4 w-4" />}>
                Submit Photo
              </Button>
            </Link>
            <Link href="/settings/profile">
              <button className="p-2 text-oyster-600 hover:text-oyster-900 hover:bg-oyster-50 rounded-lg transition-colors">
                <User className="h-5 w-5" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-oyster-600 hover:text-oyster-900 hover:bg-oyster-50 rounded-lg transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300',
            isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          )}
        >
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-oyster-600 hover:text-oyster-900 hover:bg-oyster-50 rounded-lg transition-colors"
              >
                {link.icon && <link.icon className="h-4 w-4" />}
                {link.label}
              </Link>
            ))}
            <hr className="my-2 border-oyster-200" />
            <Link
              href="/photos/submit"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-ocean-600 hover:bg-ocean-50 rounded-lg transition-colors"
            >
              <Camera className="h-4 w-4" />
              Submit Photo
            </Link>
            <Link
              href="/settings/profile"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-oyster-600 hover:text-oyster-900 hover:bg-oyster-50 rounded-lg transition-colors"
            >
              <User className="h-4 w-4" />
              Account
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
