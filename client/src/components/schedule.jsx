import React,{useEffect} from 'react';
import { Container,Row,Col,Stack, Navbar} from 'react-bootstrap';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch,useSelector } from 'react-redux';

import CrewChiefTable from '../components/CrewChiefTable';
import ChainmanTable from '../components/chainmanTable';
import RequestsTable from '../components/requestsTable';

import { updateRequestByID,setRequestQueue,updateCurrentDate } from '../slices/surveyRequestsSlice';
import { setSurveyors } from '../slices/surveyorSlice';


const Schedule = () => {
    const dispatch = useDispatch()
    const {currentDay,requests} = useSelector((state) => state.surveyRequests)

    useEffect(() => {
        const d = new Date()
        dispatch(setRequestQueue())
        dispatch(setSurveyors())
        //console.log(d.toJSON())
        dispatch(updateCurrentDate(d.toJSON().split("T")[0]))
    }, []);

    function onDragEnd(result) {
        console.log(result)

        //dragging chainman
        if (result.draggableId.startsWith("chain")){
            if( result.destination.droppableId.startsWith("chief")){
                
            }
        }
        //dragging task
        else{
            //request from crewchief to table
            if (result.destination.droppableId === "requestsTable"){
                dispatch(updateRequestByID(result.draggableId,{crewChief:"",scheduledDate:null}))
            }
            else if( result.destination.droppableId.startsWith("chief")){
                //request from table to crewchief
                //request from crewchief to crewchief
                dispatch(updateRequestByID(result.draggableId,{crewChief:result.destination.droppableId.replace("chief",""),scheduledDate:currentDay}))
            }
        }
        
        
        
        
    }

    return ( 
        <DragDropContext onDragEnd={onDragEnd}>
            <Col className='bg-light' md={7}>
                <CrewChiefTable dayRequests={requests.filter(r => r.scheduledDate !== null && r.scheduledDate.split('T')[0] === currentDay.split('T')[0])}/>
            </Col>
            <Col className="" md={2}>
                <ChainmanTable />
            </Col>
            <Col className="bg-light" md={3}>
                <RequestsTable />
            </Col>
        </DragDropContext>
     );
}
 
export default Schedule;