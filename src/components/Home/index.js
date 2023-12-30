import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const light = () => (
        <div className="lightBg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
            alt="home"
            className="home"
          />
          <h className="homeHeadingLight">Home</h>
        </div>
      )

      const dark = () => (
        <div className="darkBg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
            alt="home"
            className="home"
          />
          <h className="homeHeadingDark">Home</h>
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

export default Home
