// Write your JS code here
import {Component} from 'react'
import Header from '../Header/index'
import './index.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="home">
          <div>
            <h1 className="home-header">Clothes That Get YOU Noticed</h1>
            <p className="home-para">
              Fashion is part of the daily air of self-expression and autonomy
              at a particular period and place and in a specific context, of
              clothing, footwear, lifestyle, accessories, makeup, hairstyle, and
              body posture. The term implies a look defined by the fashion
              industry as that which is trending. Fashion is a form of
              self-expression and autonomy at a particular period and place and
              in a specific context, of clothing, footwear, lifestyle,
              accessories, makeup, hairstyle, and body posture. The term implies
              a look defined by the fashion industry as that which is trending.
            </p>
            <button type="button" className="home-but">
              Shop Now
            </button>
          </div>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
