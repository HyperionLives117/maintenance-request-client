import {RequestTable} from "../Components/RequestTable";
import Button from '@mui/material/Button';
import {useNavigate } from "react-router-dom";

export const Requests =() => {
    const navigate = useNavigate();

    function addUser(){
        navigate("/add")
    }

    return(
        <>
            <Button variant="outlined" onClick={e => addUser()}>Add Maintenance Request</Button>
            <RequestTable />
        </>
    )
}
