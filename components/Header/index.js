// Write your JS code here
import './index.css'

const Header = () => (
  <div className="header">
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
        alt="website logo"
        className="logo"
      />
    </div>
    <ul className="header-container">
      <li className="list-item">Home</li>
      <li className="list-item">Products</li>
      <li className="list-item">Cart</li>
      <li className="item">Logout</li>
    </ul>
  </div>
)

export default Header
