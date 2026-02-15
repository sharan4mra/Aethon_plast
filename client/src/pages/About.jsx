import './Pages.css';
import './About.css';
import useContentData from '../hooks/useContentData';

const fallbackAboutContent = {
    pageTitle: 'About Us',
    pageDescription: 'We are committed to delivering reliable, compliant, and cost-effective packaging products.',
    whoWeAreTitle: 'Who We Are',
    whoWeAreHighlight: 'Aethon Plast Pvt Ltd is a premier manufacturer of high-quality plastic packaging solutions based in Hyderabad, Telangana.',
    whoWeAreParagraphOne: 'We specialize in serving the pharmaceutical, cosmetic, healthcare, and FMCG industries with precision-molded HDPE, LDPE, and PET containers. Our facility is designed to support scalable production, catering to everyone from innovative startups to established large enterprises.',
    whoWeAreParagraphTwo: 'Quality and compliance are at the core of our operations. We follow strict quality control processes and hygienic manufacturing practices to ensure product safety, durability, and performance.',
    visionTitle: 'Our Vision',
    visionText: 'To become a globally trusted partner in plastic packaging through innovation and operational excellence.',
    missionTitle: 'Our Mission',
    missionText: "To provide compliant, high-quality, and cost-effective packaging solutions that support our clients' growth."
};

const About = () => {
    const { data: aboutContent } = useContentData('aboutPage', fallbackAboutContent);
    const resolved = { ...fallbackAboutContent, ...(aboutContent || {}) };

    return (
        <div className="about-page">
            <div className="page-header">
                <div className="container">
                    <h1>{resolved.pageTitle}</h1>
                    <p>{resolved.pageDescription}</p>
                </div>
            </div>

            <div className="container section">
                <div className="about-content">
                    <div className="about-main">
                        <h2>{resolved.whoWeAreTitle}</h2>
                        <p className="text-primary" style={{ fontWeight: 600, marginBottom: '1rem' }}>
                            {resolved.whoWeAreHighlight}
                        </p>
                        <p>
                            {resolved.whoWeAreParagraphOne}
                        </p>
                        <br />
                        <p>
                            {resolved.whoWeAreParagraphTwo}
                        </p>
                    </div>
                    <div className="vision-mission">
                        <div className="vm-card">
                            <h3>{resolved.visionTitle}</h3>
                            <p>{resolved.visionText}</p>
                        </div>
                        <div className="vm-card">
                            <h3>{resolved.missionTitle}</h3>
                            <p>{resolved.missionText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
