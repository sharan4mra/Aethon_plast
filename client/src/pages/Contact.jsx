import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { CONTACT_INFO, CONTACT_SUBJECTS } from '../utils/constants';
import useContentData from '../hooks/useContentData';
import { sendContactMessage } from '../services/contactApi';
import { trackEvent } from '../utils/analytics';
import './Pages.css';
import './Contact.css';

const fallbackContactContent = {
    pageTitle: 'Contact Us',
    pageDescription: 'Get in touch for quotes, product inquiries, and custom manufacturing solutions.',
    infoHeading: 'Get in Touch',
    infoSubheading: 'Our team is ready to assist you with your packaging requirements.',
    mapTitle: 'Headquarters',
    phoneTitle: 'Phone',
    emailTitle: 'Email',
    contactInfo: {
        phone: CONTACT_INFO.PHONE,
        whatsapp: '919000386555',
        email: CONTACT_INFO.EMAIL,
        address: CONTACT_INFO.ADDRESS,
        mapLink: CONTACT_INFO.MAP_LINK
    },
    subjects: CONTACT_SUBJECTS
};

const Contact = () => {
    const { data: contactContent } = useContentData('contactPage', fallbackContactContent);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        subject: fallbackContactContent.subjects[0],
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitState, setSubmitState] = useState({ type: '', text: '' });

    const resolvedContent = {
        ...fallbackContactContent,
        ...(contactContent || {}),
        contactInfo: {
            ...fallbackContactContent.contactInfo,
            ...(contactContent?.contactInfo || {})
        },
        subjects: Array.isArray(contactContent?.subjects) && contactContent.subjects.length > 0
            ? contactContent.subjects
            : fallbackContactContent.subjects
    };

    useEffect(() => {
        if (!resolvedContent.subjects.includes(formData.subject)) {
            setFormData((prev) => ({ ...prev, subject: resolvedContent.subjects[0] || '' }));
        }
    }, [resolvedContent.subjects, formData.subject]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitState({ type: '', text: '' });
        try {
            const response = await sendContactMessage(formData);
            const messageText = response?.message || 'Message sent successfully. We will contact you soon.';
            const isConfiguredWarning = /not configured/i.test(messageText);
            setSubmitState({ type: isConfiguredWarning ? 'error' : 'success', text: messageText });
            if (!isConfiguredWarning) {
                trackEvent('contact_submit', {
                    method: 'contact_form',
                    subject: formData.subject || '',
                });
            }
            setFormData((prev) => ({
                fullName: '',
                email: '',
                subject: resolvedContent.subjects[0] || prev.subject,
                message: ''
            }));
        } catch (error) {
            setSubmitState({ type: 'error', text: error.message || 'Failed to send message' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page">
            <div className="page-header">
                <div className="container">
                    <h1>{resolvedContent.pageTitle}</h1>
                    <p>{resolvedContent.pageDescription}</p>
                </div>
            </div>

            <div className="section">
                <div className="container">
                    <div className="contact-container">
                        <div className="contact-info">
                            <div style={{ textAlign: 'center' }}>
                                <h2>{resolvedContent.infoHeading}</h2>
                                <p style={{ marginBottom: '2rem', opacity: 0.9 }}>
                                    {resolvedContent.infoSubheading}
                                </p>
                            </div>

                            <div className="info-item">
                                <a href={resolvedContent.contactInfo.mapLink} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                    <MapPin size={32} />
                                </a>
                                <div>
                                    <h4>{resolvedContent.mapTitle}</h4>
                                    <a
                                        href={resolvedContent.contactInfo.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ color: 'inherit', textDecoration: 'none' }}
                                    >
                                        <p>{resolvedContent.contactInfo.address}</p>
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <a href={`https://wa.me/${resolvedContent.contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
                                    <Phone size={32} />
                                </a>
                                <div>
                                    <h4>{resolvedContent.phoneTitle}</h4>
                                    <a href={`https://wa.me/${resolvedContent.contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                        <p>{resolvedContent.contactInfo.phone}</p>
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <a href={`mailto:${resolvedContent.contactInfo.email}`} style={{ color: 'inherit' }}>
                                    <Mail size={32} />
                                </a>
                                <div>
                                    <h4>{resolvedContent.emailTitle}</h4>
                                    <a href={`mailto:${resolvedContent.contactInfo.email}`} style={{ color: 'inherit', textDecoration: 'none' }}>
                                        <p>{resolvedContent.contactInfo.email}</p>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-form-wrapper">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="John Doe"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email Address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="john@company.com"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <select
                                        className="form-control"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                    >
                                        {resolvedContent.subjects.map(subject => (
                                            <option key={subject}>{subject}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea
                                        className="form-control"
                                        placeholder="Tell us about your requirements..."
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                                    Send Message <Send size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                                </button>
                                {submitState.text && (
                                    <p style={{ marginTop: '0.75rem', color: submitState.type === 'error' ? '#c62828' : '#2e7d32' }}>
                                        {submitState.text}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
