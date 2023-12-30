import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const webLogo = () => (
        <>
          {isDarkTheme ? (
            <Link to="/" className="x">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
                className="webLogo"
                alt="website logo"
              />
            </Link>
          ) : (
            <Link to="/" className="x">
              <img
                src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
                className="webLogo"
                alt="website logo"
              />
            </Link>
          )}
        </>
      )

      const middle = () => (
        <>
          {isDarkTheme ? (
            <div className="mBg">
              <Link to="/" className="x">
                <h1 className="h1 ">Home</h1>
              </Link>

              <Link to="/about" className="x">
                <h1 className="h1">About</h1>
              </Link>
            </div>
          ) : (
            <div className="mBg">
              <Link to="/" className="x">
                <h1 className="h2 ">Home</h1>
              </Link>

              <Link to="/about" className="x">
                <h1 className="h2">About</h1>
              </Link>
            </div>
          )}
        </>
      )

      const theme = () => {
        const onTap = () => toggleTheme()

        return (
          <>
            {isDarkTheme ? (
              <button
                type="button"
                className="btn"
                onClick={onTap}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                  className="lightTheme"
                  alt="theme"
                />
              </button>
            ) : (
              <button
                type="button"
                className="btn"
                onClick={onTap}
                data-testid="theme"
              >
                <img
                  src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                  className="lightTheme"
                  alt="theme"
                />
              </button>
            )}
          </>
        )
      }

      return (
        <>
          {isDarkTheme ? (
            <div className="navBgDark">
              {webLogo()}
              {middle()}
              {theme()}
            </div>
          ) : (
            <div className="navBgLight">
              {webLogo()}
              {middle()}
              {theme()}
            </div>
          )}
        </>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
