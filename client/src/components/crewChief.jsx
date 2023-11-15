import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Droppable } from "react-beautiful-dnd";

import SurveyRequest from './surveyRequest';


const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "rgb(241, 242, 244)",
});

const CrewChief = ({chief,requests}) => {

    return ( 
        <Droppable droppableId={"chief"+chief._id}>
                {(provided, snapshot) => (
                    <Row
                    ref={provided.innerRef}
                    className='m-1 border border-dark p-1'
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                    >
                        <Col md={2} className='my-auto'>{chief.name}</Col>
                        <Col md={10}>{requests.map((r,index) => (
                            <SurveyRequest req={r} key={r._id} index={index} />
                        ))}
                        </Col>

                        
                    {   provided.placeholder}
                    </Row>
                )}
        </Droppable>
    )
}
 
export default CrewChief;