import React from 'react';
import { Carousel } from 'react-bootstrap'
import imagem from '../../../Utils/Images/HomeBackground.png'

const CarrosselAnimado = (props) => {
  return (
    <Carousel>
      
          <Carousel.Item key={0}>
            <img
              className="d-block w-100"
              src={imagem}
              alt="First slide"
            />
          
          </Carousel.Item>
          <Carousel.Item key={1}>
            <img
              className="d-block w-100"
              src={imagem}
              alt="First slide"
            />
          
          </Carousel.Item>
          <Carousel.Item key={2}>
            <img
              className="d-block w-100"
              src={imagem}
              alt="First slide"
            />
          
          </Carousel.Item>
          <Carousel.Item key={3}>
            <img
              className="d-block w-100"
              src={imagem}
              alt="First slide"
            />
          
          </Carousel.Item>
          <Carousel.Item key={4}>
            <img
              className="d-block w-100"
              src={imagem}
              alt="First slide"
            />
          
          </Carousel.Item>

        
      
    </Carousel>
  )
}
export default CarrosselAnimado