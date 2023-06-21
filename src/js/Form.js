import React, { useState } from 'react';
import { Button, Tab, Table, TableBody, TableCell, TableHead, TableRow, easing } from '@mui/material';
import '../../src/css/form.css'
function Form() {
    // const studentdetails = [
    //     {
    //         name: "Tharun kumar Gampala",
    //         rollno: 523,
    //         branch: "CSE",
    //         section: 'A'
    //     },
    //     {
    //         name: "Mahendra Gampala",
    //         rollno: 524,
    //         branch: "CSE",
    //         section: 'A'
    //     }
    // ];

    const [array, setArray] = useState([])
    const [massege, setMassage] = useState({
        name: "",
        rollno: "",
        branch: "",
        section: ''
    });
    const [edit, setEdit] = useState({
        id: '',
        isedit: false
    });

    const changemessage = (e) => {
        const value = e.target.value;
        setMassage({
            ...massege,
            [e.target.name]: value
        });
    };
    const submit = (e) => {
        e.preventDefault();
        let newdata = {
            name: massege.name,
            rollno: massege.rollno,
            branch: massege.branch,
            section: massege.section
        };
        if (newdata.name === "" || newdata.rollno === "" || newdata.branch === "" || newdata.section === "") {
            alert("Fill the form completely");
        }
        else if (array.find((eachobj) => eachobj.rollno === newdata.rollno)) {
            alert("Student already registered");
        }
        else {
            setArray([...array, newdata]);
            setMassage({
                name: "",
                rollno: "",
                branch: "",
                section: ''
            });
        }
    };

    const editrecord = (rollno) => {
        setEdit({
            rollno: rollno,
            isedit: true
        });
        let newdata = array.find((eachobj) => eachobj.rollno === rollno)
        setMassage({
            ...massege,
            name: newdata.name,
            rollno: newdata.rollno,
            branch: newdata.branch,
            section: newdata.section
        });
        console.log(newdata);
    };
    const deleterecord = (rollno) => {
        console.log(rollno);
        let newdata = array.filter((eachobj) => {
            return eachobj.rollno !== rollno;
        })
        setArray(newdata);
    };
    const updaterecord = (e) => {
        e.preventDefault();
        let newdataupdate = array.map((eachobj) => {
            if (eachobj.rollno === edit.rollno) {
                return {
                    name: massege.name,
                    rollno: massege.rollno,
                    branch: massege.branch,
                    section: massege.section
                }
            }
            else {
                return eachobj;
            }

        });
        setArray(newdataupdate);
        setMassage({
            name: "",
            rollno: "",
            branch: "",
            section: ''
        });
        setEdit({
            id: "",
            isedit: false
        })
    };
    const [search, setSearch] = useState('');
    return (
        <div>
            <form className='stateform'>
                <fieldset>
                    <legend>Student Registration</legend>
                    <input name="name" type='text' value={massege.name} onChange={changemessage} placeholder='name' /><br />
                    <input name="rollno" type='text' value={massege.rollno} onChange={changemessage} placeholder='rollno' /><br />
                    <input name="branch" type='text' value={massege.branch} onChange={changemessage} placeholder='branch' /><br />
                    <input name="section" type='text' value={massege.section} onChange={changemessage} placeholder='section' /><br />
                    {/* <button type='submit' onClick={submit}>submit</button> */}
                    {
                        edit.isedit ?
                            (<Button style={{ margin: "", padding: "10 15px 10 15px" }} variant="contained" color='success' onClick={updaterecord}>update</Button>) :
                            (<Button style={{ margin: "", padding: "10 15px 10 15px" }} variant="contained" color='success' onClick={submit}>submit</Button>)
                    }
                    {/* <Button style={{ margin: "", padding: "10 15px 10 15px" }} variant="contained" color='success' onClick={submit}>submit</Button> */}
                </fieldset>
            </form>
            <Table border={1}>
                <TableHead>
                    <TableRow>
                        <TableCell align='right' colSpan={6} l>
                            <input
                                type='text'
                                onChange={(e) => setSearch(e.target.value)}
                            />
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell align='center' >Name</TableCell>
                        <TableCell align='center' >Rollno</TableCell>
                        <TableCell align='center' >Branch</TableCell>
                        <TableCell align='center' >Section</TableCell>
                        <TableCell align='center' colSpan={2}>Operations</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        array.length === 0 &&
                        <TableRow>
                            <TableCell align='center' colSpan={6}>
                                Empty Data
                            </TableCell>
                        </TableRow>
                    }
                    {
                        array.filter((eachobj) => eachobj.name.toLowerCase().includes(search.toLocaleLowerCase()) || eachobj.rollno.toLowerCase().includes(search.toLocaleLowerCase()) || eachobj.branch.toLowerCase().includes(search.toLocaleLowerCase())).map((eachobj, index) => {
                            const { name, rollno, branch, section } = eachobj;
                            return (
                                <TableRow>
                                    <TableCell align='center' >{name}</TableCell>
                                    <TableCell align='center' >{rollno}</TableCell>
                                    <TableCell align='center' >{branch}</TableCell>
                                    <TableCell align='center' >{section}</TableCell>
                                    <TableCell align='center' ><Button style={{ margin: "10px" }} variant="contained" color='success' onClick={() => editrecord(rollno)}>Edit</Button></TableCell>
                                    <TableCell align='center' ><Button style={{ margin: "10px" }} variant="contained" color='success' onClick={() => deleterecord(rollno)}>Delete</Button></TableCell>
                                </TableRow>

                            )
                        })
                    }
                </TableBody>


            </Table>
        </div >
    )
}

export default Form