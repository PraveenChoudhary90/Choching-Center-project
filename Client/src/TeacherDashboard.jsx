import { useEffect } from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
import Button from 'react-bootstrap/Button';
const DashBoard=()=>{

   const navigate = useNavigate();

   useEffect(()=>{
      if (!localStorage.getItem("name"))
      {
         navigate("/");
      }
   }, []);


   const logout=()=>{
     localStorage.clear();
     navigate("/");
  }



    return(
        <>
          <div style={{backgroundColor:"lightgrey", padding:"40px"}}>  
            
                <h1 style={{textAlign:"center", paddingTop:"20px" ,textTransform:"uppercase"}} > Welcome To Teacher Admin Panel</h1>
                
             </div>
             <div style={{textAlign:"right", backgroundColor:"aqua", padding:"20px", color:"blue"}}>
               <h3>
                   Welcome : {localStorage.getItem("name")}<br></br>          
               </h3> 
                <h3>  
                   Email : {localStorage.getItem("email")}<br></br>
                  
                </h3>
                  <Button variant="primary" onClick={logout}>Logout</Button>
             </div>
          <div id="dotordashboard">
               <div id="docleftmenu" style={{textAlign:"center"}}>
             <Link to="mystudent" >  
                      <Button variant="primary" > My All Students Data Here</Button>    
             </Link>   
                  <br />
                  <br />
                 
                
                 </div>
                <div id="dashboarddata">
                  
                   <Outlet/>
                  
                   </div>
          </div>
        </>
    )
}


export default DashBoard;