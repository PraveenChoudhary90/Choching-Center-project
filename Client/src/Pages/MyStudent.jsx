
import axios from "axios";
import { useState, useEffect } from "react";
import BASE_URL from "../config";
import Table from 'react-bootstrap/Table';
const MyStudents=()=>{
    const [mydata, setMydata] = useState([]);

    const loadData=async()=>{
        const api = `${BASE_URL}/Teacher/StudentList/?docid=${localStorage.getItem("docid")}`;
        const response = await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    }, []);


    const ans= mydata.map((key)=>{
         return(
            <>
              <tr>
                <td>{key.name}</td>
                <td>{key.subject}</td>
                <td>{key.city}</td>
                <td>{key.mobile}</td>
                <td>{key.email}</td>
              </tr>
            
            </>
         )
    })


    return(
        <>
          <h1> Student Data List</h1>
          <hr />
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Subject</th>
          <th>City</th>
          <th>Mobile no.</th>
          <th> Email</th>
        </tr>
      </thead>
      <tbody>
         {ans}
        </tbody>
        </Table>

        
        </>
    )
}

export default MyStudents;