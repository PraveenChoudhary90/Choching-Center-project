import { useEffect, useState } from "react";
import BASE_URL from "../config";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";

const Home = ()=>{
  const [mydata, setmydata] = useState([]);
  const navigate = useNavigate()

  const loaddata = async()=>{
    const api = `${BASE_URL}/Teacher/TeacherDisplay`;
    try {
        const response = await axios.post(api)
        console.log(response.data);
        setmydata(response.data);
    } catch (error) {
        console.log(error)
    }
  }

  useEffect(()=>{
    loaddata()
  },[])


  const BookStudent=(id)=>{
    navigate(`/mybook/${id}`)
}

  const ans = mydata.map((key)=>{
    return(
        <>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="./pic1.jpg" />
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Title>{key.subject}</Card.Title>
        <Card.Text>
          Eamil:{key.email}<br></br>
          City:{key.city}<br></br>
          Number:{key.number}<br></br>
          Address:{key.address}

        </Card.Text>
        <Button variant="primary" onClick={()=>{BookStudent(key._id)}}>Book Your Course</Button>
      </Card.Body>
    </Card>
        </>
    )
  })

    return(
        <>
        <h1>Home page</h1>
        <Carousel>
      <Carousel.Item>
        <img src="./photo1.jpg" alt="" style={{width:"100%"}} />
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



      <h1 style={{textAlign:"center", backgroundColor:"aqua"}} >Book Your Course here</h1>
        <div id="card">
            {ans}
        </div>
        </>
    )
}

export default Home;