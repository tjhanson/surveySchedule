import React, {forwardRef} from 'react';
import { Container, Navbar,Button,Nav} from 'react-bootstrap';
import { userLogout } from '../slices/userSlice';
import {useNavigate } from "react-router-dom";
import { useSelector,useDispatch } from 'react-redux';





function SiteNavbar() {
    const dispatch = useDispatch();
    let navigate = useNavigate();

    
    const logoutUser = () => {
        dispatch(userLogout());
        navigate("/", { replace: true });
                   
      };

      const adminBoard = () => {
        //dispatch(userLogout());
        navigate("/admin", { replace: true });            
      };
      const projectBoard = () => {
        //dispatch(userLogout());
        navigate("/projects", { replace: true });            
      };
      const projectMap = () => {
        //dispatch(userLogout());
        navigate("/map", { replace: true });            
      };
//       const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => {
//         //console.log(value)
//         return(
//         <Button className="dateA" onClick={onClick} ref={ref}>
//           {"Current Date: "+value }
//         </Button>)
// });


    return(
        <Navbar bg='secondary'>        
            <Container fluid>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="/fuscoe.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    Survey Schedule
                </Navbar.Brand>
                <Nav className="me-auto ms-4" >

                </Nav>
                <div className='d-flex'>
                  
                </div>
            </Container>
        </Navbar>
    )
}

export default SiteNavbar;