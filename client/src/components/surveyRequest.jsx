import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { Draggable } from "react-beautiful-dnd";
import JobInfoModal from './addJobinfo';

const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
      userSelect: "none",
  
      // change background colour if dragging
      background: isDragging ? "lightgreen" : "rgb(241, 242, 244)",
  
      // styles we need to apply on draggables
      ...draggableStyle
      });

const SurveyRequest = ({req,index}) => {

    return ( 
        <Draggable
            draggableId={(req._id).toString()}
            index={index}
        >
            {(provided, snapshot) => (
                <div
                
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={getItemStyle(
                    snapshot.isDragging,
                    provided.draggableProps.style
                    )}
                    className='m-1'
                >
                    <Row className=''>
                        
                        <JobInfoModal req={req}/>
                    </Row>

                    </div>
                    
                
            )}
        </Draggable>
    )
}
 
export default SurveyRequest;