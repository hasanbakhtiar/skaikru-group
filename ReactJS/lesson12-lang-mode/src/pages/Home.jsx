import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Slider from "react-slick";
import {Helmet} from "react-helmet";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ApiContext } from '../context/ApiContext';
const Home = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [data] = useContext(ApiContext);
  return (
    <>
      <div className="px-4 py-5 my-5 text-center">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Home page</title>
        </Helmet>
        <h1 className="display-5 fw-bold text-body-emphasis">WELCOME TO BEST SHOP</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">At Best shop, we're more than just a store. We're a community of individuals passionate about. From our humble beginnings to where we are now, our journey has been fueled by our dedication to providing exceptional products and outstanding service to our customers.</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <Link to="/products" className="btn btn-dark btn-lg ">Shop now</Link>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <Slider {...settings}>
          {data.map(item => (
            <div>
              <img height={300} src={item.image} style={{ "width": "100%", "objectFit": "contain" }} alt="" />
            </div>

          ))}

        </Slider>
      </div>
    </>

  )
}

export default Home