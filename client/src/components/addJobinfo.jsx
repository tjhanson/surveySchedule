import React,{useState} from 'react';
import { Modal,Button, DropdownButton,Dropdown,Col,ProgressBar } from 'react-bootstrap';
import projectData from '../assets/fakeData.json'
import { updateRequestByID } from '../slices/surveyRequestsSlice';
import { useDispatch } from 'react-redux';


let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const JobInfoModal = ({req}) => {
    const dispatch = useDispatch()
    const [searchText, setSearch] = useState("");

    const calcBudgetToShow = () => {
        if (req.budget === 0){
            if (req.earned === 0)
                return (<div>
                    <ProgressBar now={100} label={''} variant='warning' />
                    <div>No Billing Data Available</div>
                </div>)
            return (<div>
                <ProgressBar now={100} label={''} variant='warning' />
                <div>No Budget Entered, {USDollar.format(req.earned)} billed</div>
            </div>)
        }
        const billPercent = req.budget === 0 ? 0 : Math.round(((req.earned/req.budget)*100)*10) /10;
        return(<div>
            {req.budget === 0 ? null :<ProgressBar now={billPercent} label={`${billPercent}%`} variant={`${billPercent>100 ? 'danger': 'success'}`} />}
            {req.budget !== 0 ? <div>{USDollar.format(req.earned)} / {USDollar.format(req.budget)}</div> : ""}
            </div>)
    }

    const setProjectData = (proj) => {
        console.log(proj)
        const updateData = {
            projectNum: projectData[proj][0].projNum,
            projectName:proj
        }
        dispatch(updateRequestByID(req._id,updateData))
    }

    const setTaskData = (task) => {
        const updateData = {
            taskNum: task.taskNum,
            taskName:task.taskName,
            budget: parseFloat(task.budget.replace(",","")),
            earned: parseFloat(task.earned.replace(",",""))
        }
        dispatch(updateRequestByID(req._id,updateData))
    }

    return ( <div className='d-flex'>
        <Col md={2} className=''>{req.name}</Col>
        <Col md={4}>
        {req.projectName !== "" ? <div>{req.projectNum} {req.projectName}</div> :
        <DropdownButton className="ms-2" size="sm" title="Add Job">
            <input placeholder='Search For Projects' onChange={event => setSearch(event.target.value)}></input>
                {Object.entries(projectData).filter(item => item[0].toUpperCase().includes(searchText.toUpperCase())).map((proj)=>(
                    <Dropdown.Item key={proj[0]} onClick={() => setProjectData(proj[0])}>{proj[0]}</Dropdown.Item>
                ))}
        </DropdownButton>}
        </Col>
        <Col md={4}>
        {req.projectNum === "" ? <></> : req.taskNum !== "" ? <div className='ms-1'> {req.taskNum} {req.taskName} </div> : 
        <DropdownButton className="ms-2" size="sm" title="Add Task">
            
                {projectData[req.projectName].map((task)=>(
                    <Dropdown.Item key={task.taskNum} onClick={() => setTaskData(task)}>{task.taskName} </Dropdown.Item>
                ))}
        </DropdownButton>}
        </Col>
        {/* {calcBudgetToShow()} */}
      </div> );
}
 
export default JobInfoModal;