import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { NAV_LINKS } from '../utils/constants';
import useContentData from '../hooks/useContentData';
import { resolveMediaUrl } from '../utils/media';
import './Navbar.css';

const fallbackSiteSettings = {
  logoPath: '/transperent aethon.png',
  logoAlt: 'Aethon Plast',
  navLinks: NAV_LINKS
};

const fallbackMarketSegments = [];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState(null);
  const location = useLocation();
  const { data: siteSettings } = useContentData('siteSettings', fallbackSiteSettings);
  const { data: marketSegments } = useContentData('marketSegments', fallbackMarketSegments);
  const navLinks = Array.isArray(siteSettings?.navLinks) && siteSettings.navLinks.length
    ? siteSettings.navLinks
    : NAV_LINKS;
  const productDropdown = Array.isArray(marketSegments)
    ? marketSegments
        .filter((segment) => segment && segment.id && segment.name)
        .map((segment) => ({
          name: segment.name,
          path: `/products/${segment.id}`,
        }))
    : [];
  const resolvedNavLinks = navLinks.map((link) => {
    if (String(link.name || '').toLowerCase() !== 'products') return link;
    return { ...link, dropdown: productDropdown };
  });
  const logoPath = siteSettings?.logoPath || fallbackSiteSettings.logoPath;
  const logoAlt = siteSettings?.logoAlt || fallbackSiteSettings.logoAlt;

  useEffect(() => {
    setIsOpen(false);
    setMobileSubmenu(null);
  }, [location]);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="logo">
          <img src={resolveMediaUrl(logoPath)} alt={logoAlt} />
        </Link>
        <div className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {resolvedNavLinks.map((link) => (
            <li key={link.name} className={link.dropdown ? 'has-dropdown' : ''}>
              {link.dropdown ? (
                <>
                  <div className="link-wrapper">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        isActive || window.location.pathname.startsWith(link.path) ? 'active' : ''
                      }
                      onClick={() => setIsOpen(false)}
                      end={link.path === '/'}
                    >
                      {String(link.name || '').toUpperCase()}
                    </NavLink>
                    <span
                      className="dropdown-toggle"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setMobileSubmenu(mobileSubmenu === link.name ? null : link.name);
                      }}
                    >
                      {mobileSubmenu === link.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </div>
                  <ul className={`dropdown-menu ${mobileSubmenu === link.name ? 'open' : ''}`}>
                    {(link.dropdown || []).map((subLink) => (
                      <li key={subLink.name}>
                        <Link
                          to={subLink.path}
                          onClick={() => {
                            setIsOpen(false);
                            setMobileSubmenu(null);
                          }}
                        >
                          {subLink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <NavLink
                  to={link.path}
                  className={link.path === '/contact' ? 'nav-btn-highlight' : ''}
                  onClick={() => setIsOpen(false)}
                  end={link.path === '/'}
                >
                  {String(link.name || '').toUpperCase()}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
