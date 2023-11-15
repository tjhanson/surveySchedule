import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector,useDispatch } from 'react-redux';
import { updateCurrentDate } from '../slices/surveyRequestsSlice';

const Calendar = () => {
    const dispatch = useDispatch();
    const {currentDay} = useSelector((state) => state.surveyRequests)

    const updateDate = (date) =>{
        date.setHours(12)
        dispatch(updateCurrentDate(date.toJSON().split("T")[0]))
    }
    
    return (<>{currentDay === "" ? <></> : <DatePicker
    selected={new Date(currentDay.replace(new RegExp('-','g'),","))}
    onChange={(date) => updateDate(date)}
    inline
    dateFormat="eeee, M/d/yy"
/> } </>);
}
 
export default Calendar;