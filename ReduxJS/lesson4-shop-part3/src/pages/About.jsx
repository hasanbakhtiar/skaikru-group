import React from 'react'
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
      </Helmet>
      <h2 className="pb-2 border-bottom">About us</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          </div>
          <h3 className="fs-2 text-body-emphasis">Our Story</h3>
          <p>Established in 2024, Best Shop was born out of a desire to [mention the inspiration or reason behind starting the shop]. What started as a small endeavor has since grown into a thriving business, thanks to the support of our loyal customers and the hard work of our dedicated team.</p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          </div>
          <h3 className="fs-2 text-body-emphasis">Our Mission</h3>
          <p>Our mission at Best Shop is simple: to [state your mission, such as providing high-quality products, exceptional customer service, or supporting a cause]. Every decision we make, from selecting products to interacting with customers, is guided by this mission.</p>
        </div>
        <div className="feature col">
          <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
          </div>
          <h3 className="fs-2 text-body-emphasis">Meet Our Team</h3>
          <p>Behind every successful business is a dedicated team, and Best Shop is no exception. Get to know the faces behind the brand and learn about the people who are passionate about bringing you the best products and service.</p>
        </div>
      </div>
    </div>

  )
}

export default About