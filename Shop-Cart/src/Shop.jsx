import { Button } from 'react-bootstrap';
//import Cart from './Cart.jsx';
import { faAngleDoubleLeft, faAngleDoubleRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PropTypes from 'prop-types';

export default function Shop({ cakes, addItem,cart, removeItem, addQuantity, reduceQuantity }) {
  let totalItems = 0;

  let totalPrice = cart.reduce((total, item) => total + item.totalQuantity, 0);

  function scrollleft() {
    var left = document.querySelector('.testimonial');
    left.scrollBy(390, 0);
  }

  function scrollright() {
    var right = document.querySelector('.testimonial');
    right.scrollBy(-390, 0);
  }

  return (
    <>
      <div className="header" style={{ fontFamily: "'Nothing You Could Do', cursive" }}>
        <div className="app-logo">
          <img src="../src/assets/cart.png" alt="Shop Icon" className="logo" />
          <h2 style={{ fontFamily: "'Nothing You Could Do', cursive", color: '#a04a04' }}>Choco <span style={{ color: '#070707' }}>Shop Cart App</span></h2>
        </div>

        <div className="menu">
          <ul>
            <li><a href="/">Shop</a></li>
            <li><a href="/cart"><i className="fas fa-cart-plus">Cart</i></a></li>
            <li><a href="#task">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="shop-list">
        <h1 style={{ fontFamily: "'Nothing You Could Do', cursive", fontSize: '1.5rem', fontWeight: 'bold' }}>Welcome to Choc&#39;s Shop</h1>

        <div className="testimonial-container">
          <div className="scroll-button">
            <Button variant="success" className="icon" onClick={scrollright}>
              <FontAwesomeIcon icon={faAngleDoubleLeft} />
            </Button>
          </div>

          <div className="testimonial">
            {
              cakes.map(cake => (
                <div key={cake.id} className="testimonial-text">
                  <div className="testimonial-image">
                    <img src={`../src/assets/${cake.image}.jpg`} alt={`${cake.name}`} className="test-image" />
                  </div>

                  <div className="test-text">
                    <h3 className="text-center fw-bold" style={{ fontFamily: "'Nothing You Could Do', cursive", color: '#070707', fontSize: '1.2rem' }}>
                      {`${cake.name}`}
                    </h3>
                    <p className="text-center" style={{ maxWidth: '150px', fontSize: '0.85rem' }}>
                      {cake.description}
                    </p>
                    <p className="text-center fw-bold">
                      {`Ksh. ${cake.price}.00`}
                    </p>

                    {/* Add Item Button */}
                    <Button className="shop-icon" onClick={() => addItem(cake)}>
                      <FontAwesomeIcon icon={faCartShopping} />
                    </Button>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="scroll-button ms-2">
            <Button variant="success" className="icon" onClick={scrollleft}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Button>
          </div>
        </div>

        {/* Cart Summary */}
        {totalItems > 0 && (
          <div className="Cart">
            <h1>Your Cart</h1>
            <p style={{ fontFamily: "'Nothing You Could Do', cursive", color:'green' }}>{totalItems} Items</p>
          </div>
        )}

        {/* Cart Items */}
        <div className="cart">
          {
            cart.length === 0 ? (
              <h1 style={{ fontFamily: "'Nothing You Could Do', cursive" }}>Your cart is empty.</h1>
            ) : (
              cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  {/* Item Display */}
                  <img className="cart-image" src={`../src/assets/${item.image}.jpg`} alt={item.description} />
                  <h1 style={{ fontFamily: "'Nothing You Could Do', cursive" }}>{item.name}</h1>

                  {/* Price and Quantity Display */}
                  <p>
                    <span style={{ fontFamily: "'Nothing You Could Do', cursive",fontSize:'1.2rem',fontWeight:'bold'}}>Price:</span>
                    <br/> 
                    Ksh.{item.price}.00
                  </p>

                  <p>
                    <span style={{ fontFamily: "'Nothing You Could Do', cursive",fontSize:'1.2rem',fontWeight:'bold'}}>
                      Quantity:
                      <br/>
                    </span> 
                    {item.quantity}
                  </p>

                  <p><span style={{ fontFamily: "'Nothing You Could Do', cursive",fontSize:'1.2rem',fontWeight:'bold'}}>Total:</span><br/> Ksh.{item.totalQuantity}.00</p>

                  {/* Quantity Controls */}
                  <button onClick={() => { 
                    {if(item.quantity === 1){ item.quantity === 1 ? removeItem(item.id):reduceQuantity(item.id)}else{reduceQuantity(item.id), totalItems = cart.reduce((total, item) => total + item.quantity, 0), totalPrice = cart.reduce((total, item) => total + item.totalQuantity, 0)}}
                      }} style={{padding:'4px 20px',color:'white',background:'green',border:'none',borderRadius:'4px',margin:'auto 20px',fontWeight:'bold'}}>
                    -
                  </button>

                  {item.quantity}

                  <button onClick={() => {addQuantity(item.id), totalItems = cart.reduce((total, item) => total + item.quantity, 0), totalPrice = cart.reduce((total, item) => total + item.totalQuantity, 0)}} style={{padding:'4px 20px',color:'white',background:'green',border:'none',borderRadius:'4px',margin:'auto 20px',fontWeight:'bold'}}>
                    +
                  </button>

                  {/* Remove Item Button */}
                  <button onClick={() => removeItem(item.id)} style={{padding:'4px 20px',color:'white',background:'#bc080a',border:'none',borderRadius:'4px',margin:'auto 20px',fontWeight:'bold'}}>Remove</button>
                </div>
              ))
            )
          }
        </div>

        {/* Total Price Display */}
        { cart.length > 0 ? (<div>
            <h1 style={{ fontFamily: "'Nothing You Could Do', cursive" }}>
              Total: Ksh. {totalPrice}.00</h1>
            </div>) :
          null
        }
          
        
      </div>

      {/* <div className="cartPage">
        <Cart cart={cart} totalItems={totalItems} totalPrice={totalPrice} removeItem={removeItem} addQuantity={addQuantity} reduceQuantity={reduceQuantity}/>
      </div> */}
      
    </>
  );
}

// Define PropTypes for Shop component
Shop.propTypes = {
  cakes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired,
  addItem: PropTypes.func.isRequired,
  cart: PropTypes.array.isRequired,
  totalItems: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired, // Expecting totalPrice to be a number
  removeItem: PropTypes.func.isRequired, // Expecting removeItem to be a function
  addQuantity: PropTypes.func.isRequired, // Expecting addQuantity to be a function
  reduceQuantity: PropTypes.func.isRequired // Expecting reduceQuantity to be a function
};


