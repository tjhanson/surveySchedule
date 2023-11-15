import React,{useCallback} from 'react';
import { Droppable } from "react-beautiful-dnd";
import {useDropzone} from 'react-dropzone'
import { useSelector } from 'react-redux';
import {Button, Col,Row} from 'react-bootstrap';
import SurveyRequest from './surveyRequest';

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "rgb(241, 242, 244)",
});

const RequestsTable = () => {
    const {requests} = useSelector((state) => state.surveyRequests)

    const onDrop = useCallback(acceptedFiles => {
        console.log(acceptedFiles)
      }, [])
const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    return (<div className='d-flex flex-column'>
    <Row className='m-0 fw-bold'>
            
                <Col md={2}>Name</Col>
                <Col md={4}>Job Info</Col>
                <Col md={4}>Task Info</Col>
            
        </Row>
        <Droppable droppableId={"requestsTable"}>
                {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    className='m-1 border border-dark p-2 flex-grow-1 h-100'
                    style={getListStyle(snapshot.isDraggingOver)}
                    {...provided.droppableProps}
                    >
                        {requests.filter(r => r.scheduledDate === null).map((c,index) => (
                            <SurveyRequest req={c} key={c._id} index={index} />
                        ))}
                        
                    {   provided.placeholder}
                    </div>
                )}
        </Droppable>
        <Button>Add Task</Button>
        <div className='m-1 border border-dark' {...getRootProps()}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <p>Drop Outlook File here</p>
      }
    </div>
        </div>
    );
}
 
export default RequestsTable;