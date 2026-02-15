import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { resolveMediaUrl } from '../utils/media';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="detail-card">
            <div className="detail-image">
                <img src={resolveMediaUrl(product.image)} alt={product.name} />
                <span className="detail-tag">{product.subCategory || 'General'}</span>
            </div>
            <div className="detail-info">
                <h3>{product.name}</h3>
                {product.description && <p className="detail-desc">{product.description}</p>}
                <Link to={`/product/${product.id}`} className="btn-inquire">
                    View Details <ArrowRight size={16} style={{ marginLeft: '6px' }} />
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
