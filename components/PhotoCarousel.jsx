import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Carousel } from 'react-responsive-carousel'

const PhotoCarousel = () => {
  return (
    <Carousel
      className="h-[600px]"
      showThumbs={false}
      autoPlay={true}
      interval={1500}
      transitionTime={1000}
      infiniteLoop={true}
      showStatus={false}
      showIndicators={false}
      stopOnHover={false}
    >
      <div>
        <img src="/c1.jpg" className="h-[600px]" />
      </div>
      <div>
        <img src="/c2.jpg" className="h-[600px]" />
      </div>
      <div>
        <img src="/c3.jpg" className="h-[600px]" />
      </div>
    </Carousel>
  )
}

export default PhotoCarousel