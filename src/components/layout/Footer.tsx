import Link from 'next/link';
import { Camera, Trophy, Heart, HelpCircle, Flag, Settings } from 'lucide-react';

const footerLinks = {
  explore: [
    { href: '/photos', label: 'Photo Gallery' },
    { href: '/photos/competition', label: 'Photo Competition' },
    { href: '/leaderboard', label: 'Shop Leaderboard' },
    { href: '/offers', label: 'Deals & Offers' },
  ],
  community: [
    { href: '/community', label: 'Community Hub' },
    { href: '/community/charities', label: 'Local Charities' },
    { href: '/ask', label: 'Ask a Local' },
    { href: '/report', label: 'Submit a Report' },
  ],
  account: [
    { href: '/settings/profile', label: 'Profile Settings' },
    { href: '/settings/notifications', label: 'Notifications' },
  ],
};

export function Footer() {
  return (
    <footer className="bg-oyster-900 text-oyster-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-ocean-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="font-semibold text-white">whitstable.shop</span>
            </Link>
            <p className="text-sm text-oyster-400">
              Your guide to everything Whitstable. Discover local shops, events, and community.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h3 className="font-semibold text-white mb-3">Explore</h3>
            <ul className="space-y-2">
              {footerLinks.explore.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold text-white mb-3">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h3 className="font-semibold text-white mb-3">Account</h3>
            <ul className="space-y-2">
              {footerLinks.account.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-oyster-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-oyster-500">
            &copy; {new Date().getFullYear()} whitstable.shop. Made with love in Whitstable.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/report"
              className="text-sm text-oyster-400 hover:text-white transition-colors flex items-center gap-1"
            >
              <Flag className="h-4 w-4" />
              Report an Issue
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
