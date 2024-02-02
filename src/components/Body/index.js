import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      return (
        <div className="body">
          {showLeftNavbar ? (
            <div className="unorderedBodyLeft">
              <h1 className="navHeading">Left Navbar Menu</h1>
              <ul className="unorderedBodyLeft">
                <li className="listItemNavbar navItempara">Item 1</li>
                <li className="listItemNavbar navItempara">Item 2</li>
                <li className="listItemNavbar navItempara">Item 3</li>
                <li className="listItemNavbar navItempara">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="contentContainer">
              <h1 className="navHeading">Content</h1>
              <p className="navItempara">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}
          {showRightNavbar ? (
            <div className="unorderedBodyRight">
              <h1 className="navHeading">Right Navbar Menu</h1>
              <div className="rightNavbarBoxes">
                <p className="navItempara">Ad 1</p>
              </div>
              <div className="rightNavbarBoxes">
                <p className="navItempara">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
