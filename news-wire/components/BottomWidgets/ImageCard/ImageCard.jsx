import SingleImageCard from '@/components/NewsPreviews/SingleImageCard/SingleImageCard'
import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const responsiveWidget = {
  all: {
    breakpoint: { max: 4000, min: 0 },
    items: 1
  }
}

const ImageCard = ({widget= false, articles}) => {
  return (
    <div>
      <Carousel responsive={widget? responsiveWidget : responsive}>
        {articles && articles?.map((article) => <SingleImageCard article={article}/>)}
      </Carousel>
    </div>
  )
}

export default ImageCard