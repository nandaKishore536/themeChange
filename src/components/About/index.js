import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const light = () => (
        <div className="lightBg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
            alt="about"
            className="home"
          />
          <h className="homeHeadingLight">About</h>
        </div>
      )

      const dark = () => (
        <div className="darkBg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
            alt="about"
            className="home"
          />
          <h className="homeHeadingDark">About</h>
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

export default About
