import './index.css'

import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const UnSelectLeftNavbar = () => {
        console.log('left')
        onToggleShowLeftNavbar()
      }
      const UnSelectContent = () => {
        console.log('content')
        onToggleShowContent()
      }
      const UnSelectRightNavbar = () => {
        console.log('right')
        onToggleShowRightNavbar()
      }
      return (
        <div className="layoutContainer">
          <h1 className="Heading white">Layout</h1>
          <div className="unordered">
            {showContent ? (
              <li className="listItem">
                <input
                  type="checkbox"
                  id="showContent"
                  checked
                  onChange={UnSelectContent}
                />
                <label htmlFor="showContent" className="labelElement">
                  Content
                </label>
              </li>
            ) : (
              <li className="listItem">
                <input
                  type="checkbox"
                  id="showContent"
                  onChange={UnSelectContent}
                />
                <label htmlFor="showContent" className="labelElement">
                  Content
                </label>
              </li>
            )}
            {showLeftNavbar ? (
              <li className="listItem">
                <input
                  type="checkbox"
                  id="left"
                  checked
                  onChange={UnSelectLeftNavbar}
                />
                <label htmlFor="left" className="labelElement">
                  Left Navbar
                </label>
              </li>
            ) : (
              <li className="listItem">
                <input
                  type="checkbox"
                  id="left"
                  onChange={UnSelectLeftNavbar}
                />
                <label htmlFor="left" className="labelElement">
                  Left Navbar
                </label>
              </li>
            )}
            {showRightNavbar ? (
              <li className="listItem">
                <input
                  type="checkbox"
                  id="right"
                  checked
                  onChange={UnSelectRightNavbar}
                />
                <label htmlFor="right" className="labelElement">
                  Right Navbar
                </label>
              </li>
            ) : (
              <li className="listItem">
                <input
                  type="checkbox"
                  id="right"
                  onChange={UnSelectRightNavbar}
                />
                <label htmlFor="right" className="labelElement">
                  Right Navbar
                </label>
              </li>
            )}
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
