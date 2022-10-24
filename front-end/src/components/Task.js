import React, {useState} from 'react';
import {Checkbox, ListItem, ListItemSecondaryAction, ListItemText} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {DeleteOutlined} from "@mui/icons-material";
import axios from "axios";
import EditIcon from '@mui/icons-material/Edit';
import PopUp from "./PopUp";

function Task(props) {


    const [seen, setSeen] = useState(false);


    async function handleDelete() {
        try {

            const res = await axios.delete(`http://localhost:8080/tasks/${props.task.id}`)

            if (res.status === 204) {
                props.refreshTaskList();
            } else {
                alert("Error!")
            }
        } catch (e) {
            console.log(e)
        }
    }


    const togglePop = () => {
        setSeen(!seen);
    }

    async function handleEdit() {
        togglePop();

    }


    return (<div>
        {seen ? <PopUp toggle={togglePop}
                       refreshTaskList={props.refreshTaskList}
                       task={props.task}
        /> : null}
            <ListItem divider={props.divider}>
                <ListItemText primary={props.task.title}/>
                <ListItemText primary={props.task.task}/>

                    <EditIcon aria-label="Edit Todo" onClick={handleEdit}>
                    </EditIcon>

                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete Todo" onClick={handleDelete}>
                        <DeleteOutlined/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>)

}

export default Task;