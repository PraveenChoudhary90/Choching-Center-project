import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config';
import { ToastContainer, toast } from 'react-toastify';
import axios from "axios"

const TeacherRagistraction = ()=>{

      const [show, setShow] = useState(false);
      const [input , setInput] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


   const handelInput = (e)=>{
    let name = e.target.name;
    let value = e.target.value;
    setInput(values=>({...values, [name]:value}));
    console.log(input);
   }


   const handelSubmit = async(e)=>{
    e.preventDefault();
    const api = `${BASE_URL}/Teacher/TeacherRegistred`;
    try {
        const response = await axios.post(api, input)
        console.log(response.data)
        toast.success(response.data.msg);
        setShow(false);
    } catch (error) {
        console.log(error)        
    }
   }


    return(
        <>
        {/* <h1>TeacherRagistraction page</h1> */}
         <Button variant="primary" style={{marginLeft:"400px"}} onClick={handleShow}>
       Teacher Registered here
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Teacher Ragistraction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            
               <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter  Name</Form.Label>
        <Form.Control type="text" name='name'  onChange={handelInput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter Email</Form.Label>
        <Form.Control type="text" name='email'  onChange={handelInput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Enter Address</Form.Label>
        <Form.Control type="text" name='address'  onChange={handelInput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmailc">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name='city'  onChange={handelInput} />
      </Form.Group>

       <Form.Group className="mb-3" controlId="formBasicEmaild">
        <Form.Label>Enter Contact Number</Form.Label>
        <Form.Control type="text" name='number'  onChange={handelInput}  />
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

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password'  onChange={handelInput} />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={handelSubmit}>
        Submit
      </Button>
  </Form> 
            
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
      </Modal>
     <ToastContainer />


        </>
    )
}

export default TeacherRagistraction;


