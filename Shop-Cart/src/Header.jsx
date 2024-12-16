import 'react-bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header(){
    return (
            <>
                <div className="header shadow-sm" style={{fontFamily: "'Nothing You Could Do', cursive"}}>
                    <div className="app-logo">
                        <img src="../src/assets/cart.png" alt="Shop Icon" className="logo" />
                        <h2 style={{fontFamily: "'Nothing You Could Do', cursive",color: '#a04a04'}}>Choco <span style={{color:'#10a702'}}>Shop Cart App</span></h2>
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#about">Shop</a></li>
                            <li><a href="#task">Cart</a></li>
                            <li><a href="#task">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </>
        )
}