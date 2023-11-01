import { useEffect, useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import {useNavigate } from "react-router-dom";
import * as MaintenanceRequestService from '../services/MaintenanceRequestService';
import {
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
  } from '@mui/material';
  
export const RequestTable = () => {
    const [request, setRequests]= useState([]);
    const navigate = useNavigate();

    useEffect(()=> {
        MaintenanceRequestService.getAllRequests()
        .then(res => {
            setRequests(res.data);
        })
    }, [])

    function requestDataFromApi(){
        MaintenanceRequestService.getAllRequests()
        .then(res => {
            setRequests(res.data);
        })
    }
    const goToUpdate = (id) => {
        navigate(`/${id}`);
    }

    function deleteRequest (id){
        MaintenanceRequestService.deleteRequest(id)
        .then(()=>{
            requestDataFromApi();
        })
    }

    return (
        <div >
            <Table sx={{minWidth:700}}>
                <TableHead sx={{}}>
                <TableRow>
                    <TableCell>
                        Id
                    </TableCell>                        
                    <TableCell>
                        First Name
                    </TableCell>
                    <TableCell>
                        Last Name
                    </TableCell>
                    <TableCell>
                        Email
                    </TableCell>
                    <TableCell>
                        Apt Number
                    </TableCell>
                    <TableCell>
                        Description
                    </TableCell>
                    <TableCell>
                        Created At
                    </TableCell>
                    <TableCell align="right">
                        Actions
                    </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                    {
                        request.map((request)=> {
                            return(
                                <TableRow
                                    hover
                                    key={request.id}
                                >
                                    <TableCell>
                                        {request.id}
                                    </TableCell>
                                    <TableCell>
                                        {request.firstName}
                                    </TableCell>
                                    <TableCell>
                                        {request.lastName}
                                    </TableCell>
                                    <TableCell>
                                        {request.email}
                                    </TableCell>
                                    <TableCell>
                                        {request.aptNumber}
                                    </TableCell>
                                    <TableCell>
                                        {request.description}
                                    </TableCell>
                                    <TableCell>
                                        {request.createdAt}
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton component="a" onClick={()=> goToUpdate(request.id)}>
                                            <EditIcon />
                                        </IconButton>
                                        <IconButton component="a" onClick={()=> deleteRequest(request.id)}>
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ) 
                        })
                    }
                </TableBody>
            </Table>
        </div>
    )
}