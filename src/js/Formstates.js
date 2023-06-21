import { Button, Input } from '@mui/material';
import React, { useState } from 'react';

function Formstates() {
    const [list, setList] = useState([]);
    const [message, setMessage] = useState({
        text: "",
        id: ""
    });
    const [edititem, setEdititem] = useState({
        id: "",
        isedit: false
    })
    const changemessage = (e) => {
        setMessage({
            ...message,
            text: e.target.value,
        });
    };
    const submit = (e) => {
        e.preventDefault();
        let newtodo = {
            text: message.text,
            id: new Date().getTime().toString()
        };
        
        if ( newtodo.text === "") {
            alert("enter data");
        }
        else {
            setList([...list, newtodo]);
            setMessage({
                text: "",
                id: ""
            });
        }
    };

    const deleterecord = (id) => {
        let newtodo = list.filter((eachobj) => {
            return eachobj.id !== id
        });
        setList(newtodo);
    };

    const editrecord = (id) => {
        setEdititem({
            id: id,
            isedit: true
        });
        let editrecorditem = list.find((eachobj) => eachobj.id === id)
        setMessage({
            ...message,
            text: editrecorditem.text,
            id: editrecorditem.id
        });
        console.log(editrecorditem);
    };

    const changeedit = (e) => {
        e.preventDefault();
        let newtodos = list.map((eachobj) => {
            if (eachobj.id === edititem.id) {
                return {
                    text: message.text,
                    id: edititem.id
                }
            } else {
                return eachobj;
            }
        });
        setList(newtodos);
        setMessage({
                text: "",
                id: ""
        });
        setEdititem({
            id: "",
            isedit:false
        });
    }
    return (
        <div>
            <form>
                <Input
                    value={message.text}
                    type='text'
                    placeholder='Enter some text'
                    onChange={changemessage}
                />
                {/* <input
                    value={message.text}
                    type='text'
                    placeholder='Enter some text'
                    onChange={changemessage}
                /> */}
                {
                    edititem.isedit ?
                        (<Button type='submit' style={{ margin: "10px" }} variant="contained" color='success' onClick={changeedit}>edit</Button>)
                        :
                        (<Button type='submit' style={{ margin: "10px" }} variant="contained" color='success' onClick={submit}>add</Button>)
                }
                {/* <Button type='submit' style={{ margin: "10px" }} variant="contained" color='success' onClick={submit}>add</Button> */}
            </form>
            <hr />
            <div>

                <table border={1}>
                    <tr>
                        <th>name</th>
                        <th>id</th>
                        <th colSpan={2}>Operations</th>

                    </tr>
                    {
                        list.length === 0 &&
                        <tr >
                            <td colspan={4}>No Data In The Table</td>
                        </tr>
                    }
                    {
                        list.map((eachobj) => {
                            const { text, id } = eachobj;
                            return (

                                <tr>
                                    <td>{text}</td>
                                    <td>{id}</td>
                                    <td><Button style={{ margin: "10px" }} variant="contained" color='success' onClick={() => editrecord(id)}>Edit</Button></td>
                                    <td><Button style={{ margin: "10px" }} variant="contained" color='success' onClick={() => deleterecord(id)}>Delete</Button></td>
                                </tr>
                            )
                        })
                    }
                </table>

            </div>
        </div>
    )
}
export default Formstates;