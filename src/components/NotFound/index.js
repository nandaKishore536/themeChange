import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const light = () => (
        <div className="lightBg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="home"
          />
          <h1 className="NotFoundLight">Lost Your Way?</h1>
          <p className="NotFoundLightPar">
            We cannot seem to find the page you are looking for.
          </p>
        </div>
      )

      const dark = () => (
        <div className="darkBg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
            alt="not found"
            className="home"
          />
          <h1 className="NotFoundDark">Lost Your Way?</h1>
          <p className="NotFoundDarkPar">
            We cannot seem to find the page you are looking for.
          </p>
        </div>
      )

      return (
        <>
          {isDarkTheme ? (
            <>
              <Navbar />
              {dark()}
            </>
          ) : (
            <>
              <Navbar />
              {light()}
            </>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
