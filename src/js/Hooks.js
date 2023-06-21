import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React, { useState } from "react";

// function Usestate() {
//     const [count, setfirst] = useState(0);

//     const decrement = () => {
//         setfirst((pervalue) => pervalue - 1);
//     }

//     const increment = () => {
//         setfirst((pervalue) => pervalue + 1);
//     }
//     return (
//         <>
//             <Button style={{ margin: "10px" }} variant="contained" color="success" onClick={decrement}>-</Button>
//             <Button style={{ margin: "10px" }} variant="outlined" color="success" >{count}</Button>
//             <Button style={{ margin: "10px" }} variant="contained" color="success" onClick={increment}>+</Button>
//         </>
//     )
// }

function Usestate1() {
    const data = [
        {
            id:0,
            firstname: 'Tharunkumar',
            lastname: 'Gampala',
            age: '21'
        },
        {
            id: 1,
            firstname: 'mahendra',
            lastname: 'Gampala',
            age: '18'
        },
        {
            id:2,
            firstname: 'Tharunkumar',
            lastname: 'Gampala',
            age: '21'
        },
        
    ];
    const [first, setfirst] = useState(data);
    const deleterecord = (idw) => {
        const filterData = data.filter((eachitemu) => {
            return eachitemu.id !== idw;
        });
        setfirst(filterData);
        console.log(filterData);

    };
    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Index</TableCell>
                        <TableCell>Firstname</TableCell>
                        <TableCell>Lastname</TableCell>
                        <TableCell>Age</TableCell>
                        <TableCell>Operations</TableCell>
                    </TableRow>    
                </TableHead>
                <TableBody>
                    {
                        data.map((eachitem, idw) => {
                            const { firstname, lastname, age ,id} = eachitem;
                            return (
                                <TableRow key={idw}>
                                    
                                    <TableCell>{idw}</TableCell>
                                    <TableCell>{firstname}</TableCell>
                                    <TableCell>{lastname}</TableCell>
                                    <TableCell>{age}</TableCell>
                                    <TableCell>
                                        <Button variant="contained" color="success" onClick={() => deleterecord(id)}>Delete</Button>
                                    </TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
            <ul>
                {
                    data.map((eachitem, index) => {
                        const { firstname, lastname, age,id } = eachitem;
                        return (<>
                            <li>firstname:{firstname}</li>
                            <li>lastname:{lastname}</li>
                            <li>age:{age}</li>
                            <li>
                                <Button variant="contained" color="success" onClick={() => deleterecord(id)}>Delete</Button>
                            </li>
                        </>
                        )
                    })
                }
            </ul>
        </>
    )
}
export default Usestate1;