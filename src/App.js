import React, { useState } from 'react';
import { Link } from 'react-scroll';



function Navbar({ cartCount }) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <Link className="navbar-brand" to="home" smooth={true} duration={500}>
            Start Bootstrap
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <Link className="nav-link" to="home" smooth={true} duration={500}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" smooth={true} duration={500}>
                  About
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="products" smooth={true} duration={500}>
                      All Products
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="popular" smooth={true} duration={500}>
                      Popular Items
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="new-arrivals" smooth={true} duration={500}>
                      New Arrivals
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <form className="d-flex">
              <button className="btn btn-outline-dark" type="submit">
                <i className="bi-cart-fill me-1"></i>
                Cart
                <span className="badge bg-dark text-white ms-1 rounded-pill">{cartCount}</span>
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }

function Header() {
  return (
    <header className="bg-dark py-5">
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center text-white">
          <h1 className="display-4 fw-bolder">Shop in style</h1>
          <p className="lead fw-normal text-white-50 mb-0">With this shop homepage template</p>
        </div>
      </div>
    </header>
  );
}

function ProductCard({ imageSrc, name, price, pricebefore, setCartCount }) {
    const [isAddedToCart, setIsAddedToCart] = useState(false);
    const [rating, setRating] = useState(0);
    const maxRating = 5;
  
    const handleAddToCart = () => {
      setIsAddedToCart(true);
      setCartCount((prevCount) => prevCount + 1);
    };
  
    const handleRemoveFromCart = () => {
      setIsAddedToCart(false);
      setCartCount((prevCount) => prevCount - 1);
    };
  
    const handleRatingChange = (selectedRating) => {
      setRating(selectedRating);
    };
  
    const renderStars = () => {
      const stars = [];
  
      for (let i = 1; i <= maxRating; i++) {
        const starClass = i <= rating ? 'bi-star-fill' : 'bi-star';
        stars.push(
          <i
            key={`star_${i}`}
            className={`bi ${starClass} text-warning`}
            onClick={() => handleRatingChange(i)}
          ></i>
        );
      }
  
      return stars;
    };
  
    return (
      <div className="col mb-5">
        <div className="card h-100">
          <img className="card-img-top" src={imageSrc} alt="..." />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{name}</h5>
              <span style={{ textDecoration: 'line-through' }}>{pricebefore}</span>
              {price}
            </div>
          </div>
          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <div className="mb-2">{renderStars()}</div>
              {isAddedToCart ? (
                <button className="btn btn-outline-dark mt-auto" onClick={handleRemoveFromCart}>
                  Remove from cart
                </button>
              ) : (
                <button className="btn btn-outline-dark mt-auto" onClick={handleAddToCart}>
                  Add to cart
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
  

function Section({ setCartCount }) {
  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3">
          <ProductCard
            imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            name="Fancy Product"
            price="$40.00-$80.00"
            pricebefore=""
            setCartCount={setCartCount}
            rating={4.5}
          />
          <ProductCard
            imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            name="Special Item"
            price="$18.00"
            pricebefore="$20.00"
            setCartCount={setCartCount}
            isOnSale={true}
          />
          <ProductCard
            imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            name="Sale Item"
            price="$25.00"
            pricebefore="$50.00"
            setCartCount={setCartCount}
          />
          <ProductCard
            imageSrc="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
            name="Popular Item"
            price="$40.00"
            pricebefore=""
            setCartCount={setCartCount}
            isOnSale={true}
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-5 bg-light">
      <div className="container px-4 px-lg-5">
        <div className="small text-center text-muted">
          &copy; {new Date().getFullYear()} Your Website. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Header />
      <Section setCartCount={setCartCount} />
      <Footer />
    </div>
  );
}

export default App;
