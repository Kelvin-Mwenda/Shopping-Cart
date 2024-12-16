import PropTypes from 'prop-types';
import './App.css';

export default function Cart({ cart, totalItems, totalPrice, removeItem, addQuantity, reduceQuantity }) {

  return (
    <>
      {/* Cart Summary */}
      <div>
        <p style={{ fontFamily: "'Nothing You Could Do', cursive", color:'green' }}>{totalItems} Items</p>
      </div>

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
                  <p><span style={{ fontFamily: "'Nothing You Could Do', cursive",fontSize:'1.2rem',fontWeight:'bold'}}>Price:</span><br/> Ksh.{item.price}.00</p>
                  <p><span style={{ fontFamily: "'Nothing You Could Do', cursive",fontSize:'1.2rem',fontWeight:'bold'}}>Quantity:</span> {item.quantity}</p>
                  <p><span style={{ fontFamily: "'Nothing You Could Do', cursive",fontSize:'1.2rem',fontWeight:'bold'}}>Total:</span><br/> Ksh.{item.totalQuantity}.00</p>

                  {/* Quantity Controls */}
                  <button onClick={() => reduceQuantity(item.id)} style={{padding:'4px 20px',color:'white',background:'green',border:'none',borderRadius:'4px',margin:'auto 20px',fontWeight:'bold'}}>-</button>
                  {item.quantity}
                  <button onClick={() => addQuantity(item.id)} style={{padding:'4px 20px',color:'white',background:'green',border:'none',borderRadius:'4px',margin:'auto 20px',fontWeight:'bold'}}>+</button>

                  {/* Remove Item Button */}
                  <button onClick={() => removeItem(item.id)} style={{padding:'4px 20px',color:'white',background:'red',border:'none',borderRadius:'4px',margin:'auto 20px',fontWeight:'bold'}}>Remove</button>
                </div>
              ))
            )
          }
        </div>

      {/* Total Price Display */}
      <div>
        <h1 style={{ fontFamily: "'Nothing You Could Do', cursive" }}>Total: Ksh. {totalPrice}.00</h1>
      </div>
    </>
  );
}

// Define PropTypes for Cart component
Cart.propTypes = {
  cart: PropTypes.array.isRequired, // Expecting cart to be an array
  totalItems: PropTypes.number.isRequired, // Expecting totalItems to be a number
  totalPrice: PropTypes.number.isRequired, // Expecting totalPrice to be a number
  removeItem: PropTypes.func.isRequired, // Expecting removeItem to be a function
  addQuantity: PropTypes.func.isRequired, // Expecting addQuantity to be a function
  reduceQuantity: PropTypes.func.isRequired // Expecting reduceQuantity to be a function
};
