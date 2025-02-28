import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from "../config";
import axios from "axios";
import Table from 'react-bootstrap/Table';

const Search = ()=>{
    const [input, setInput] = useState({});
    const [mydata, setMydata]= useState([]);

      const handelInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
   }


    const handleSubmit=async(e)=>{
        e.preventDefault();
            const api = `${BASE_URL}/Teacher/SearchTeacher`;
        const response = await axios.post(api, input);
        console.log(response.data);
        setMydata(response.data);
     }

     const ans=mydata.map((key)=>{
      return(
        <>
          <tr>
            <td>{key.name} </td>   
            <td>{key.address} </td>       
            <td>{key.city} </td>   
            <td>{key.email} </td>
            <td>{key.number} </td>
            <td>{key.subject} </td>   
           
          </tr>
        </>
      )
})

    return(
        <>
        <h1>Search Teacher Page by Name and Subject</h1>
            <Form style={{width:"50%", margin:"auto"}}>
       <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter  Name</Form.Label>
        <Form.Control type="text" name='name'  onChange={handelInput} />
      </Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmaile">
        <Form.Label>select Subject</Form.Label>
        <Form.Select aria-label="Default select example"  name='subject'  onChange={handelInput}  >
          <option>Open this select menu</option>
          <option value="HTML">HTML</option>
          <option value="CSS">CSS</option>
          <option value="JAVA SCRIPT">JAVA SCRIPT</option>
          <option value="REACT JS">REACT JS</option>
          <option value="EXPRESS JS">EXPRESS JS</option>
          <option value="NODE JS">NODE JS</option>
          <option value="MONGODB ">MONGODB</option>
          <option value="FIGMA">FIGMA</option>
          <option value="GITHUB">GITHUB</option>
          <option value="GIRA">GIRA</option>
    </Form.Select>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Search
      </Button>
    </Form>

    <hr  size="4" color="red" />

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>Teacher name</th>
          <th>Address</th>
          <th>City</th>
          <th>Email</th>
          <th>Number</th>
          <th>Subject</th>
        </tr>
      </thead>
      <tbody>
          {ans}
        </tbody>
        </Table>


        </>
    )
}

export default Search;