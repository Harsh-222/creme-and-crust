import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Heart, Menu, X, LogOut } from 'lucide-react';
import Logo from '@/components/Logo';
import { navLinks } from '@/data/site';
import { useAuth } from '@/hooks/useAuth';
import { useLikedItems } from '@/hooks/useLikedItems';
import { buttonClasses } from '@/lib/buttonStyles';

function isLinkActive(to: string, pathname: string, hash: string) {
  const [path, anchor] = to.split('#');
  if (path !== pathname) return false;
  if (anchor) return hash === `#${anchor}`;
  return pathname !== '/about' || hash !== '#contact';
}

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const { user, signOut } = useAuth();
  const { likedIds } = useLikedItems();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === '/';
  const solid = scrolled || !isHome || menuOpen;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const textTone = solid ? 'text-espresso' : 'text-cream';

  const favouritesLink = (
    <Link
      to="/menu#liked"
      onClick={closeMenu}
      aria-label={`Your favourites, ${likedIds.length} saved`}
      className={`relative flex h-11 w-11 items-center justify-center rounded-full transition hover:bg-beige-100/20 ${textTone}`}
    >
      <Heart size={22} fill={likedIds.length > 0 ? 'currentColor' : 'none'} aria-hidden="true" />
      {likedIds.length > 0 && (
        <span className="absolute right-0 top-0 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-caramel-700 px-1 text-[11px] font-semibold leading-none text-white">
          {likedIds.length}
        </span>
      )}
    </Link>
  );

  const linkClass = (to: string) => {
    const active = isLinkActive(to, pathname, hash);
    return `relative py-2 text-sm font-medium transition-colors duration-300 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-px after:origin-left after:bg-caramel-700 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      active ? 'after:scale-x-100' : 'after:scale-x-0'
    } ${textTone}`;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? 'bg-cream/95 shadow-soft backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Main navigation" className="container-page flex h-20 items-center justify-between">
        <Link to="/" aria-label="Crème & Crust home" onClick={closeMenu}>
          <Logo tone={solid ? 'dark' : 'light'} />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link to={link.to} className={linkClass(link.to)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          {favouritesLink}
          {user ? (
            <>
              <span className={`text-sm font-medium ${textTone}`}>Hi, {user.name.split(' ')[0]}</span>
              <button
                type="button"
                onClick={signOut}
                className={buttonClasses(solid ? 'secondary' : 'light', 'px-5 py-2.5')}
              >
                <LogOut size={16} aria-hidden="true" />
                Sign out
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className={buttonClasses(solid ? 'primary' : 'light', 'px-6 py-2.5')}
            >
              Login
            </Link>
          )}
        </div>

        <div className="flex items-center gap-1 lg:hidden">
        {favouritesLink}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className={`flex h-11 w-11 items-center justify-center rounded-full transition ${textTone}`}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`grid overflow-hidden bg-cream transition-[grid-template-rows,opacity,visibility] duration-500 ease-out lg:hidden ${
          menuOpen ? 'grid-rows-[1fr] opacity-100 shadow-soft' : 'invisible grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0 max-h-[calc(100svh-5rem)] overflow-y-auto">
          <div className="container-page flex flex-col gap-1 pb-6 pt-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.to}
                onClick={closeMenu}
                className="rounded-xl px-3 py-3 text-base font-medium text-espresso transition hover:bg-beige-100"
              >
                {link.label}
              </NavLink>
            ))}
            <div className="mt-4">
              {user ? (
                <button
                  type="button"
                  onClick={() => {
                    closeMenu();
                    signOut();
                  }}
                  className={buttonClasses('secondary', 'w-full')}
                >
                  <LogOut size={16} aria-hidden="true" />
                  Sign out ({user.name.split(' ')[0]})
                </button>
              ) : (
                <Link to="/login" onClick={closeMenu} className={buttonClasses('primary', 'w-full')}>
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
