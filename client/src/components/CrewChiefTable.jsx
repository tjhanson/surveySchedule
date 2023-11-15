import React from 'react';
import { DragDropContext } from "react-beautiful-dnd";
import { Col,Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import CrewChief from './crewChief';


const CrewChiefTable = ({dayRequests}) => {
    //const {data} = useSelector((state) => state.surveyRequests)
    //const crewChiefs = [{'id': 0, 'name': 'JJ'}, {'id': 1, 'name': 'Ed'}, {'id': 2, 'name': 'Vuong'}, {'id': 3, 'name': 'Jason'}, {'id': 4, 'name': 'Doug'}, {'id': 5, 'name': 'Brian'}, {'id': 6, 'name': 'Eric'}, {'id': 7, 'name': 'John B'}, {'id': 8, 'name': 'Rick'}, {'id': 9, 'name': 'Mark'}, {'id': 10, 'name': 'Dustin'}, {'id': 11, 'name': 'Jeff'}]
    const {crewChiefs} = useSelector((state) => state.surveyors)
    
    return ( 
    <div>
        <Row className='m-0 fw-bold'>
            <Col md={2}>Crew Chief</Col>
            <Col md={10} className='d-flex'>
                <Col md={2}>Name</Col>
                <Col md={4}>Job Info</Col>
                <Col md={4}>Task Info</Col>
            </Col>
        </Row>
        {crewChiefs.map(c => (
            <CrewChief chief={c} key={c._id} requests={dayRequests.filter(req => req.crewChief === c._id)}/>
        ))}
        </div>
     );
}
 
export default CrewChiefTable;