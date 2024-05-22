import React from 'react'
import Slider from 'react-slick'
import Image1 from './Pic/VolleyBall.png'
import Image2 from './Pic/BeachVolleyBall.png'
import Image3 from './Pic/Olympics.png'
import Image4 from './Pic/international.png'

const SliderSlide = [
  {
      id: 1,
      img: Image1,
      subtitle: "Canada one step closer to Paris after victory over Thailand",
      title:"VolleyBall",
      title2: "News",
  },
  {
      id: 2,
      img: Image2,
      subtitle: "Caminati returns to international stage with Madrid Futures gold",
      title:"Beach VolleyBall",
      title2: "News",
  },
  {
      id: 3,
      img: Image3,
      subtitle: "Coach Blain announces 2024 Japanese national team call-ups",
      title:"Olympics",
      title2: "News",
  },
  {
    id: 4,
    img: Image4,
    subtitle: "Fantastic Koga inspires Japan to huge upset of Türkiye",
    title:"International",
    title2: "News",
  },
];

const Slide = () => {

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover:false,
    pauseOnFocus:true,
    };

  return (
    <div className='container mt-8'>
      <div className='overflow-hidden min-h-[500px] sm:min-h-[600px] bg-secondary flex justify-center items-center'>
        <div className='container pb-8 sm:pb-0'>
        <Slider {...settings}> 
            {
                SliderSlide.map((data) => (
                    <div key={data.id}>
                      <div className="grid grid-cols-1 sm:grid-cols-2">
                        {/*image */}
                        <div className="order-1 sm:order-2 mt-10">
                          <div>
                            <img src={data.img} alt="" className="w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto relative z-40"
                            />
                          </div>
                        </div>
                        {/*text content */}
                        <div className="flex flex-col justify-center gap-4 sm:pl-3 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                          <h1 className="text-2xl text-primary sm:text-6xl lg:text-3xl font-bold">{data.title2}</h1>
                          <h1 className="text-5xl sm:text-6xl lg:text-5xl font-semibold">{data.title}</h1>
                          <h1 className="text-5xl uppercase text-primary sm:text-[50px] md:text-[50px] xl:text-[50px] font-bold">{data.subtitle}</h1>
                        </div>
                      </div>
                    </div>
                ))
            }
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default Slide
