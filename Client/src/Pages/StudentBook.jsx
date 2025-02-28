import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../config";
import Button from "react-bootstrap/esm/Button";
import { ToastContainer, toast } from 'react-toastify';


const StudentBook=()=>{
    const {id} = useParams();
    const [docInfo, setDocInfo]= useState({});
    const [input, setInput] = useState({});
    const loadData=async()=>{
        let api=`${BASE_URL}/Student/TeacherData/?id=${id}`;
        try {
              const response= await axios.get(api);
              console.log(response.data);
              setDocInfo(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        loadData();
    }, [])

    const handleInput=(e)=>{
      let name= e.target.name ;
      let value= e.target.value;
      setInput(values=>({...values, [name]:value}));
      console.log(input);
    }


     const handleSubmit=async()=>{
           const api = `${BASE_URL}/Student/StudentSave`;
        try {
            const response = await axios.post(api, {docid:id, ...input});
            // alert("data save");
        toast.success(response.data.msg);

        } catch (error) {
             console.log(error);
        }
     }
  
    return(
        <>
          <h1 align="center"> Student Course Form : </h1>
           <h4 style={{color:"blue"}} align="center"> Your Teacher : {docInfo.name}  : {docInfo.subject}</h4>
          <Form style={{width:"400px", margin:"auto"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Student Name</Form.Label>
        <Form.Control type="text" name="name" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Enter Subject</Form.Label>
        <Form.Control type="text" name="subject" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmaila">
        <Form.Label>Enter City</Form.Label>
        <Form.Control type="text" name="city" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailc">
        <Form.Label>Enter Mobile no</Form.Label>
        <Form.Control type="text" name="mobile" onChange={handleInput}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmailb">
        <Form.Label>Enter email</Form.Label>
        <Form.Control type="email" name="email" onChange={handleInput} />
      </Form.Group>
      <Button onClick={handleSubmit}> Register!</Button>
    </Form>
    <br /> <br />
     <ToastContainer />

        </>
      )
}

export default StudentBook;