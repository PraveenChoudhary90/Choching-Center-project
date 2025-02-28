
import Carousel from 'react-bootstrap/Carousel';
const About = ()=>{
    return(
        <>
        <h1>About page</h1>
        <Carousel>
      <Carousel.Item>
        <img src="./photo4.jpg" alt="" style={{width:"100%"}} />
        <Carousel.Caption>
          <h3>First slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./photo2.jpg" alt=""  style={{width:"100%"}} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="./photo3.jpg" alt=""  style={{width:"100%"}} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        </>
    )
}

export default About;