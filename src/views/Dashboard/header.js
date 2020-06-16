import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import movie from "assets/img/movie.jpg";
import title from "assets/img/assorted-title-movie-case-lot-2398354.jpg";
import architecture from "assets/img/architecture-building-business-cinema-436413.jpg";
 
export default class App extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={3}
      >
        <Slider>
          <Slide index={0}><img src={architecture} style={{backgroundSize: "cover", backgrounRepeat:"no-repeat", maxWidth:"85vw"}} alt="architecture"/></Slide>
          <Slide index={1}><img src={title} style={{backgroundSize: "cover", backgrounRepeat:"no-repeat", maxWidth:"75vw"}}  alt="title"/></Slide>
          <Slide index={2}><img src={movie} style={{backgroundSize: "cover", backgrounRepeat:"no-repeat", maxWidth:"100vw"}}  alt="movie"/></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
