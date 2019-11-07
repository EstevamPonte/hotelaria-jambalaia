import React from 'react';
import { Carousel } from 'react-bootstrap'

const CarrosselAnimado = (props) => {
  let key=0
  return (
    <Carousel>
      {props.photo.map(item => {
        key += 1
        return(
          <Carousel.Item key={key}>
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