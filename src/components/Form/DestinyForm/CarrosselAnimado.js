import React from 'react';
import { Carousel } from 'react-bootstrap'

const CarrosselAnimado = (props) => {
  return (
    <Carousel>
      {props.photo.map(item => {
        return (

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={item}
              alt="First slide"
            />
          
          </Carousel.Item>
        )
      })}
      
    </Carousel>
  )
}
export default CarrosselAnimado