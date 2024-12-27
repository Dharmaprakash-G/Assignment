import React from 'react';
import Slider from 'react-slick';
import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';
import c5 from '../assets/c5.png';

const Clients = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-50 p-5">
      <div className="font-montserrat text-4xl flex items-center justify-center">
        Our Trusted Clients
      </div>
      <div className="mt-10 flex justify-center">
        <div className="w-full max-w-6xl px-4 sm:px-0">
          <Slider {...settings}>
            <div className="flex items-center justify-center p-4">
              <img src={c1} alt="Client 1" className="max-w-full rounded-lg" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src={c2} alt="Client 2" className="max-w-full rounded-lg" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src={c3} alt="Client 3" className="max-w-full rounded-lg" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src={c4} alt="Client 4" className="max-w-full rounded-lg" />
            </div>
            <div className="flex items-center justify-center p-4">
              <img src={c5} alt="Client 5" className="max-w-full rounded-lg" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Clients;
