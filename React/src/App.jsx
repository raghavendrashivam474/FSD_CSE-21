import React from 'react';
import Book from './components/book'; // Import the Book component

const App = () => {
  // Sample demo data with unique images and details
  const demoBook1 = {
    id: "1",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780061120084-L.jpg",
    price: 9.99,
    availableCopies: 3,
    totalCopies: 5,
    description: "The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it."
  };

  const demoBook2 = {
    id: "2",
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowling",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780590353427-L.jpg",
    price: 12.99,
    availableCopies: 2,
    totalCopies: 6,
    description: "A young wizard discovers his magical heritage and attends Hogwarts School of Witchcraft and Wizardry."
  };

  const demoBook3 = {
    id: "3",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowling",
    coverImage: "https://covers.openlibrary.org/b/isbn/9780439136365-L.jpg",
    price: 14.50,
    availableCopies: 4,
    totalCopies: 4,
    description: "Harry faces the escaped convict Sirius Black and encounters mysterious Dementors in his third year."
  };

  const handleBorrow = (book) => {
    alert(`Borrow process initiated for: ${book.title}`);
  };

  const handleViewDetails = (book) => {
    console.log("Viewing more info for: ", book);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', gap: '20px', flexWrap: 'wrap' }}>
      <Book 
        book={demoBook1} 
        onBorrow={handleBorrow} 
        onViewDetails={handleViewDetails} 
      />
      <Book 
        book={demoBook2} 
        onBorrow={handleBorrow} 
        onViewDetails={handleViewDetails} 
      />
      <Book 
        book={demoBook3} 
        onBorrow={handleBorrow} 
        onViewDetails={handleViewDetails} 
      />
    </div>
  );
};

export default App;