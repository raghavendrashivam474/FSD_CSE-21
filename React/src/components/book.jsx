import React from 'react';
import './Book.css'; // <-- Add this line to load the styles

// Reusable Book Card Component
const Book = ({ book, onBorrow, onViewDetails }) => {
  // Destructuring properties from the book object with fallbacks
  const {
    title = 'Untitled Book',
    author = 'Unknown Author',
    coverImage = 'https://placeholder.com',
    price = 0.00,
    availableCopies = 0,
    totalCopies = 0,
    description = 'No description available for this book.'
  } = book;

  const isAvailable = availableCopies > 0;

  return (
    <div className="book-card">
      {/* Book Cover Image */}
      <div className="book-cover-container">
        <img 
          src={coverImage} 
          alt={`Cover of the book ${title}`} 
          className="book-cover"
        />
        {!isAvailable && (
          <div className="badge-out-of-stock">Out of Stock</div>
        )}
      </div>

      {/* Book Details Content */}
      <div className="book-content">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        
        <p className="book-description">
          {description.length > 100 ? `${description.substring(0, 95)}...` : description}
        </p>
        
        <div className="book-status">
          <span className="copies-count">
            {availableCopies} of {totalCopies} available
          </span>
        </div>
      </div>

      <hr className="book-divider" />

      {/* Actions and Pricing Footer */}
      <div className="book-footer">
        <span className="book-price">${price.toFixed(2)}</span>
        
        <div className="book-actions">
          {onViewDetails && (
            <button 
              className="btn-secondary" 
              onClick={() => onViewDetails(book)}
            >
              Details
            </button>
          )}
          <button 
            className="btn-primary" 
            disabled={!isAvailable}
            onClick={() => onBorrow(book)}
          >
            {isAvailable ? 'Borrow' : 'Unavailable'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
