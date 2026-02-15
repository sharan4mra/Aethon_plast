import { useEffect, useState, useMemo, useRef } from 'react';
import { useParams, Link, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight } from 'lucide-react';
import './ProductList.css';
import { productData } from '../data/products';
import useContentData from '../hooks/useContentData';
import ProductCard from '../components/ProductCard';

const ProductList = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const queryCategory = searchParams.get('category');
    const querySearch = searchParams.get('search') || '';
    const { data: catalogData } = useContentData('productCatalog', productData);

    const industryData = useMemo(() => {
        return catalogData[id] || null;
    }, [id, catalogData]);

    const groupedData = useMemo(() => {
        if (!industryData || !industryData.categories) return {};

        let data = {};

        if (queryCategory && industryData.categories[queryCategory.toLowerCase()]) {
            const cat = industryData.categories[queryCategory.toLowerCase()];
            Object.entries(cat.subCategories).forEach(([subKey, subData]) => {
                data[subData.title] = subData.items;
            });
        } else {
            Object.values(industryData.categories).forEach(cat => {
                const groupTitle = cat.title;
                if (cat.subCategories) {
                    const subGroups = {};
                    Object.values(cat.subCategories).forEach(sub => {
                        subGroups[sub.title] = sub.items;
                    });
                    data[groupTitle] = subGroups;
                }
            });
        }
        return data;
    }, [industryData, queryCategory]);

    const hasData = Object.keys(groupedData).length > 0;

    const [activeSub, setActiveSub] = useState('All');
    const [expandedKeys, setExpandedKeys] = useState({});

    useEffect(() => {
        if (hasData) {
            const keys = {};
            Object.keys(groupedData).forEach(key => keys[key] = true);
            setExpandedKeys(keys);
        }
    }, [groupedData, hasData]);

    const toggleGroup = (key) => {
        setExpandedKeys(prev => {
            const isIsolated = Object.keys(prev).length === 1 && prev[key];

            if (isIsolated) {
                return {};
            }
            return { [key]: true };
        });
    };

    const [currentPage, setCurrentPage] = useState(1);
    const ITEMS_PER_PAGE = 12;

    const [searchQuery, setSearchQuery] = useState('');
    const [debouncedSearchQuery, setDebouncedSearchQuery] = useState('');

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedSearchQuery(searchQuery), 300);
        return () => clearTimeout(timer);
    }, [searchQuery]);

    useEffect(() => {
        if (querySearch && querySearch !== searchQuery) {
            setSearchQuery(querySearch);
        }
    }, [querySearch, searchQuery]);

    useEffect(() => {
        setCurrentPage(1);
    }, [activeSub, id, queryCategory, debouncedSearchQuery]);

    const allProducts = useMemo(() => {
        let products = [];
        Object.values(groupedData).forEach(subGroups => {
            Object.values(subGroups).forEach(items => {
                products = [...products, ...items];
            });
        });
        return products;
    }, [groupedData]);

    const displayedProducts = useMemo(() => {
        let filtered = [];

        if (activeSub === 'All') {
            filtered = allProducts;
        } else {
            Object.values(groupedData).forEach(subGroups => {
                if (subGroups[activeSub]) {
                    filtered = [...filtered, ...subGroups[activeSub]];
                }
            });
        }

        if (debouncedSearchQuery.trim()) {
            const lowerQuery = debouncedSearchQuery.toLowerCase();
            filtered = filtered.filter(item =>
                item.name.toLowerCase().includes(lowerQuery) ||
                (item.description && item.description.toLowerCase().includes(lowerQuery)) ||
                (item.subCategory && item.subCategory.toLowerCase().includes(lowerQuery)) ||
                (item.actualName && item.actualName.toLowerCase().includes(lowerQuery))
            );
        }
        return filtered;
    }, [activeSub, allProducts, groupedData, debouncedSearchQuery]);

    const totalPages = Math.ceil(displayedProducts.length / ITEMS_PER_PAGE);
    const paginatedProducts = displayedProducts.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (p) => {
        if (p >= 1 && p <= totalPages) setCurrentPage(p);
    };

    const handleSubClick = (parentKey, sub) => {
        setActiveSub(sub);
        setCurrentPage(1);
        setExpandedKeys({ [parentKey]: true });
    };

    const gridRef = useRef(null);
    useEffect(() => {
        if (currentPage > 1 || activeSub !== 'All') {
            gridRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, [currentPage, activeSub]);

    if (!industryData) {
        return (
            <div className="product-list-page container" style={{ padding: '100px 0', textAlign: 'center' }}>
                <h2>Industry or Category Not Found</h2>
                <Link to="/products" className="btn btn-primary" style={{ marginTop: '20px' }}>Back to Industries</Link>
            </div>
        );
    }

    return (
        <div className="product-list-page">
            <div className="product-list-header">
                <div className="container">
                    <div className="breadcrumb-nav">
                        <Link to="/products" className="breadcrumb-link">Products</Link>
                        <span className="breadcrumb-separator">»</span>
                        <span className="breadcrumb-current">{industryData.title}</span>
                    </div>
                    <h1>{industryData.title}</h1>
                    <p>{industryData.description}</p>
                </div>
            </div>

            <div className="container">
                <div className="product-layout-container" ref={gridRef}>
                    <aside className="product-sidebar">
                        <h3>Filter by Category</h3>
                        <nav className="sidebar-nav">
                            <button
                                className={`sidebar-link ${activeSub === 'All' ? 'active' : ''}`}
                                onClick={() => setActiveSub('All')}
                                style={{ fontWeight: 'bold', marginBottom: '10px' }}
                            >
                                All Products
                            </button>

                            {Object.entries(groupedData).map(([parentKey, subGroups]) => (
                                <div key={parentKey} className="sidebar-group">
                                    <button
                                        className={`sidebar-group-title accordion-trigger ${expandedKeys[parentKey] ? 'active' : ''}`}
                                        onClick={() => toggleGroup(parentKey)}
                                    >
                                        {parentKey}
                                        <span className="accordion-icon">
                                            {expandedKeys[parentKey] ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
                                        </span>
                                    </button>

                                    <div className={`sidebar-sub-list ${expandedKeys[parentKey] ? 'open' : ''}`}>
                                        {Object.keys(subGroups).map(sub => (
                                            <button
                                                key={sub}
                                                onClick={() => handleSubClick(parentKey, sub)}
                                                className={`sidebar-link ${activeSub === sub ? 'active' : ''}`}
                                            >
                                                {sub}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </nav>
                    </aside>

                    <main className="product-main-content">
                        <div className="product-search-bar">
                            <input
                                type="text"
                                placeholder={`Search ${industryData.title}...`}
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="search-input"
                            />
                        </div>

                        <div className="product-list-grid">
                            {paginatedProducts.length > 0 ? (
                                paginatedProducts.map(item => (
                                    <ProductCard key={item.id} product={item} />
                                ))
                            ) : (
                                <p className="no-products-msg">No products found matching your criteria.</p>
                            )}
                        </div>

                        {totalPages > 1 && (
                            <div className="pagination-controls">
                                <button className="page-btn prev" disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
                                    <ArrowLeft size={16} style={{ marginRight: '5px' }} /> Previous
                                </button>
                                <span className="page-info">Page {currentPage} of {totalPages}</span>
                                <button className="page-btn next" disabled={currentPage === totalPages} onClick={() => handlePageChange(currentPage + 1)}>
                                    Next <ArrowRight size={16} style={{ marginLeft: '5px' }} />
                                </button>
                            </div>
                        )}
                    </main>
                </div>
            </div>
        </div>
    );
};

export default ProductList;
