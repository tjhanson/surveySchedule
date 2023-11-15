import React from 'react';
import { Droppable } from "react-beautiful-dnd";
import { useSelector } from 'react-redux';

import Chainman from './chainman';
import Calendar from './Calendar';

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "rgb(241, 242, 244)",
});

const ChainmanTable = () => {

    //const chainman = [{'id': 0, 'name': 'Raul'}, {'id': 1, 'name': 'Mike'}, {'id': 2, 'name': 'George'}, {'id': 3, 'name': 'Chris B'}, {'id': 4, 'name': 'Manny'}, {'id': 5, 'name': 'Paul'}, {'id': 6, 'name': 'Danny'}, {'id': 7, 'name': 'Alex'}, {'id': 8, 'name': 'Zenin'}, {'id': 9, 'name': 'Speiser'}, {'id': 10, 'name': 'Sandy'}, {'id': 11, 'name': 'Nick'}, {'id': 12, 'name': 'Chris P'}]
    const {chainmen} = useSelector((state) => state.surveyors)

    return (<>
        <Droppable droppableId={"chainmanTable"}>
                {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    className='m-1 border border-dark p-2'
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                    >
                        {chainmen.map((c,index) => (
                            <Chainman chainman={c} key={c._id} index={index} />
                        ))}
                        
                    {   provided.placeholder}
                    </div>
                )}
        </Droppable>
        <Calendar />
        </>);
}
 
export default ChainmanTable;