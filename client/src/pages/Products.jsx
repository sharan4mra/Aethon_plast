
import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import useContentData from '../hooks/useContentData';
import { resolveMediaUrl } from '../utils/media';
import { productData, getAllProductsFromCatalog } from '../data/products';
const pharmaImg = '/assets/segment_pharma_1769615897321.png';
const nutraImg = '/assets/segment_nutra_1769616067190.png';
const cosmeticImg = '/assets/pharma_banner_bottles_1769614352905.png';
const fmcgImg = '/assets/pharma_banner_production_retry_1769615616299.png';
import './Products.css';

const fallbackCategories = [
    {
        id: 'pharmaceuticals',
        name: 'Pharmaceuticals',
        image: pharmaImg,
        description: 'Regulatory-compliant packaging solutions ensuring safety, hygiene, and precision.',
        tag: 'Industry Standard'
    },
    {
        id: 'nutraceuticals',
        name: 'Nutraceuticals',
        image: nutraImg,
        description: 'Protective packaging for supplements combining shelf appeal with safety.',
        tag: 'Health & Wellness'
    },
    {
        id: 'cosmetics',
        name: 'Cosmetics',
        image: cosmeticImg,
        description: 'Aesthetically pleasing and functional containers for beauty and personal care.',
        tag: 'Premium Design'
    },
    {
        id: 'fmcg',
        name: 'FMCG',
        image: fmcgImg,
        description: 'Durable, cost-effective packaging solutions for fast-moving consumer goods.',
        tag: 'High Volume'
    }
];

const fallbackProductsPage = {
    headerTitle: 'Market Segments',
    headerDescription: 'Explore our specialized packaging solutions across key industries.',
    ctaTitle: 'Need a Custom Solution?',
    ctaDescription: 'We specialize in custom molding to meet your specific requirements.',
    ctaButtonText: 'Contact Us'
};

const Products = () => {
    const { data } = useContentData('marketSegments', fallbackCategories);
    const { data: productsPage } = useContentData('productsPage', fallbackProductsPage);
    const { data: catalogData } = useContentData('productCatalog', productData);
    const resolvedPage = { ...fallbackProductsPage, ...(productsPage || {}) };
    const categories = Array.isArray(data) ? data : fallbackCategories;
    const [searchQuery, setSearchQuery] = useState('');
    const [searchMessage, setSearchMessage] = useState('');
    const navigate = useNavigate();

    const suggestions = useMemo(() => {
        const query = searchQuery.trim().toLowerCase();
        if (!query) return [];
        const allProducts = getAllProductsFromCatalog(catalogData);
        const matches = allProducts.filter((item) =>
            (item.name || '').toLowerCase().includes(query) ||
            (item.actualName || '').toLowerCase().includes(query) ||
            (item.description || '').toLowerCase().includes(query) ||
            (item.subCategory || '').toLowerCase().includes(query)
        );
        const seen = new Set();
        const unique = [];
        for (const item of matches) {
            const key = `${item.id || ''}-${item.name || ''}`;
            if (seen.has(key)) continue;
            seen.add(key);
            unique.push(item);
            if (unique.length >= 5) break;
        }
        return unique;
    }, [catalogData, searchQuery]);

    const handleSearch = (event) => {
        event.preventDefault();
        const query = searchQuery.trim();
        if (!query) return;
        const allProducts = getAllProductsFromCatalog(catalogData);
        const lowerQuery = query.toLowerCase();
        const match = allProducts.find((item) =>
            (item.name || '').toLowerCase().includes(lowerQuery) ||
            (item.actualName || '').toLowerCase().includes(lowerQuery) ||
            (item.description || '').toLowerCase().includes(lowerQuery) ||
            (item.subCategory || '').toLowerCase().includes(lowerQuery)
        );
        if (match?.industryId) {
            setSearchMessage('');
            navigate(`/products/${match.industryId}?search=${encodeURIComponent(query)}`);
        } else {
            setSearchMessage('No matching products found.');
        }
    };

    return (
        <div className="products-page">
            <div className="products-header">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                        <div>
                            <h1>{resolvedPage.headerTitle}</h1>
                            <p>{resolvedPage.headerDescription}</p>
                        </div>
                        <form onSubmit={handleSearch} style={{ minWidth: '260px', position: 'relative' }}>
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => {
                                    setSearchQuery(e.target.value);
                                    setSearchMessage('');
                                }}
                                style={{
                                    width: '100%',
                                    padding: '10px 12px',
                                    borderRadius: '8px',
                                    border: '1px solid #d0d7e2'
                                }}
                            />
                            {suggestions.length > 0 && (
                                <div style={{
                                    position: 'absolute',
                                    top: 'calc(100% + 6px)',
                                    left: 0,
                                    right: 0,
                                    background: '#fff',
                                    border: '1px solid #d0d7e2',
                                    borderRadius: '8px',
                                    boxShadow: '0 10px 30px rgba(15, 23, 42, 0.12)',
                                    zIndex: 10
                                }}>
                                    {suggestions.map((item) => (
                                        <button
                                            key={item.id}
                                            type="button"
                                            onClick={() => {
                                                const query = item.name || item.actualName || '';
                                                setSearchQuery(query);
                                                setSearchMessage('');
                                                if (item.industryId) {
                                                    navigate(`/products/${item.industryId}?search=${encodeURIComponent(query)}`);
                                                }
                                            }}
                                            style={{
                                                display: 'block',
                                                width: '100%',
                                                textAlign: 'left',
                                                padding: '10px 12px',
                                                border: 'none',
                                                background: 'transparent',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <div style={{ fontWeight: 600 }}>{item.name || item.actualName}</div>
                                            <div style={{ fontSize: '12px', color: '#64748b' }}>
                                                {item.subCategory || item.categoryTitle || item.industryTitle || 'Product'}
                                            </div>
                                        </button>
                                    ))}
                                </div>
                            )}
                            {searchMessage && (
                                <div style={{ marginTop: '6px', color: '#b91c1c', fontSize: '12px' }}>
                                    {searchMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>

            <div className="container products-section">
                <div className="products-grid">
                    {categories.map((product) => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-wrapper">
                                <img src={resolveMediaUrl(product.image)} alt={product.name} />
                                <span className="product-tag">{product.tag}</span>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.description}</p>
                                <Link to={`/products/${product.id}`} className="btn-product-view">View Products <ArrowRight size={16} /></Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="container cta-section">
                <h2>{resolvedPage.ctaTitle}</h2>
                <p>{resolvedPage.ctaDescription}</p>
                <Link to="/contact" className="btn btn-primary">{resolvedPage.ctaButtonText} <ArrowRight size={18} /></Link>
            </div>
        </div>
    );
};

export default Products;
