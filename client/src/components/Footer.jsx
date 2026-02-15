
import { Phone, Mail, MapPin, Instagram, Linkedin, Facebook } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO, SOCIAL_LINKS, NAV_LINKS, COMPANY_NAME } from '../utils/constants';
import useContentData from '../hooks/useContentData';
import { resolveMediaUrl } from '../utils/media';
import './Footer.css';

const fallbackSiteSettings = {
    companyName: COMPANY_NAME,
    logoPath: '/transperent aethon.png',
    logoAlt: 'Aethon Plast',
    footerDescription: 'Leading manufacturer of high-quality plastic packaging solutions. We serve industries globally with innovation and integrity.',
    socialLinks: SOCIAL_LINKS,
    navLinks: NAV_LINKS,
    developerName: '@Semixon',
    developerUrl: 'https://semixon.com'
};

const fallbackContactContent = {
    contactInfo: {
        phone: CONTACT_INFO.PHONE,
        whatsapp: '919000386555',
        email: CONTACT_INFO.EMAIL,
        address: CONTACT_INFO.ADDRESS,
        mapLink: CONTACT_INFO.MAP_LINK
    }
};

const Footer = () => {
    const { data: siteSettings } = useContentData('siteSettings', fallbackSiteSettings);
    const { data: contactPage } = useContentData('contactPage', fallbackContactContent);
    const navLinks = Array.isArray(siteSettings?.navLinks) && siteSettings.navLinks.length
        ? siteSettings.navLinks
        : NAV_LINKS;
    const socials = {
        ...SOCIAL_LINKS,
        ...(siteSettings?.socialLinks || {})
    };
    const contactInfo = {
        ...fallbackContactContent.contactInfo,
        ...(contactPage?.contactInfo || {})
    };
    const whatsappDigits = String(contactInfo.whatsapp || '').replace(/[^\d]/g, '');

    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <Link to="/" className="footer-logo">
                        <img src={resolveMediaUrl(siteSettings?.logoPath || fallbackSiteSettings.logoPath)} alt={siteSettings?.logoAlt || fallbackSiteSettings.logoAlt} style={{ height: '60px', width: 'auto' }} />
                    </Link>
                    <p>
                        {siteSettings?.footerDescription || fallbackSiteSettings.footerDescription}
                    </p>
                </div>

                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul className="footer-links">
                        {navLinks.map(link => (
                            <li key={link.name}>
                                <Link
                                    to={link.path}
                                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-section footer-contact-info">
                    <h3>Contact Info</h3>
                    <ul className="footer-links">
                        <li style={{ display: 'flex', gap: '15px' }}>
                            <a
                                href={contactInfo.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ width: '40px', display: 'flex', justifyContent: 'flex-start', paddingLeft: '4px', flexShrink: 0, marginTop: '2px', color: 'inherit' }}
                            >
                                <MapPin size={32} className="text-primary" />
                            </a>
                            <a
                                href={contactInfo.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ color: 'inherit', textDecoration: 'none', lineHeight: '1.5' }}
                            >
                                {contactInfo.address}
                            </a>
                        </li>
                        <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <a
                                href={`https://wa.me/${whatsappDigits}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ width: '40px', display: 'flex', justifyContent: 'flex-start', paddingLeft: '4px', flexShrink: 0, color: 'inherit' }}
                            >
                                <Phone size={24} className="text-primary" />
                            </a>
                            <a href={`https://wa.me/${whatsappDigits}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{contactInfo.phone}</a>
                        </li>
                        <li style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                            <a
                                href={`mailto:${contactInfo.email}`}
                                style={{ width: '40px', display: 'flex', justifyContent: 'flex-start', paddingLeft: '4px', flexShrink: 0, color: 'inherit' }}
                            >
                                <Mail size={24} className="text-primary" />
                            </a>
                            <a href={`mailto:${contactInfo.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>{contactInfo.email}</a>
                        </li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Follow Us On</h3>
                    <div className="social-links" style={{ marginTop: '0' }}>
                        <a href={socials.FACEBOOK} target="_blank" rel="noopener noreferrer" className="social-icon"><Facebook size={24} /></a>
                        <a href={socials.INSTAGRAM} target="_blank" rel="noopener noreferrer" className="social-icon"><Instagram size={24} /></a>
                        <a href={socials.LINKEDIN} target="_blank" rel="noopener noreferrer" className="social-icon"><Linkedin size={24} /></a>
                    </div>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>&copy; {new Date().getFullYear()} {siteSettings?.companyName || fallbackSiteSettings.companyName}. All rights reserved.</p>
                <p className="developer-credit">dev by <a href={siteSettings?.developerUrl || fallbackSiteSettings.developerUrl} target="_blank" rel="noopener noreferrer">{siteSettings?.developerName || fallbackSiteSettings.developerName}</a></p>
            </div>
        </footer >
    );
};

export default Footer;
