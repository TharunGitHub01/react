import React from "react";
import { Button } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css';
import 'animate.css';
function Eventhandle() {
    const clickfunction = () => {
        alert("Hello...! this is tharun kumar");
    }
    const notify = () => toast("Hello...! this is tharun kumar");
    return (
        <>
            <div>
                <Button style={{ margin: "10px" }} variant="contained" color="success" onClick={notify}>
                    Click Me
                </Button>
                <ToastContainer />
            </div>
            <div>
                <Button style={{ margin: "10px" }} variant="contained" color="error"
                    onMouseOver={() => {
                        Store.addNotification({
                            title: 'Notifycation',
                            message: 'Hello...! this is tharun kumar',
                            type: 'success',                         // 'default', 'success', 'info', 'warning'
                            // insert: "top",
                            container: "top-right",                // where to position the notifications
                            animationIn: ["animated", "fadeIn"],     // animate.css classes that's applied
                            animationOut: ["animated", "fadeOut"],   // animate.css classes that's applied
                            dismiss: {
                                duration: 0
                            }
                        })
                    }}>
                    tharun
                </Button>
                <ReactNotifications />
            </div>
            <Button style={{ margin: "10px" }} variant="contained" color="error" onMouseLeave={clickfunction}>
                tharun
            </Button>
            <Button style={{ margin: "10px" }} variant="contained" color="error" onMouseEnter={clickfunction}>
                tharun
            </Button>
            <Button style={{ margin: "10px" }} variant="contained" color="error" onMouseUp={clickfunction}>
                tharun
            </Button>
        </>
    )
}
export default Eventhandle;