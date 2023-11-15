import React from 'react';
import { Row } from 'react-bootstrap';
import { Draggable } from "react-beautiful-dnd";


const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
      userSelect: "none",
  
      // change background colour if dragging
      background: isDragging ? "lightgreen" : "rgb(241, 242, 244)",
  
      // styles we need to apply on draggables
      ...draggableStyle
      });

const Chainman = ({chainman,index}) => {

    return ( 
        <Draggable
            draggableId={"chain"+chainman._id}
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
                    className='m-2'
                >
                    <div>
                        {chainman.name}
                    </div>

                    </div>
                    
                
            )}
        </Draggable>
    )
}
 
export default Chainman;