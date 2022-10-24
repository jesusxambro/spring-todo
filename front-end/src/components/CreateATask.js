import React, {useState} from 'react';
import {Button, Grid, Paper, TextField} from "@mui/material";
import axios from "axios";


function CreateATask(props) {
const[title, setTitle] = useState("");
const [task, setTask] = useState("");


    function onTitleChange(event) {
        setTitle(event.target.value);
    }
    function onTaskChange(event) {
        setTask(event.target.value);
    }
    async  function onAddSubmit(){
        try{
            const res = await axios.post("http://localhost:8080/tasks/",{
                title: title,
                task: task
            })
            if(res.status != 200){
                console.log(res)
            }else{
                setTask("");
                setTitle("");
                props.refreshTaskList();
            }
        }catch (e) {
            console.log(e)
        }


    }

    return (
        <div>
            <Paper style={{ margin: 16, padding: 16 }}>
                <Grid container>
                    <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                        <TextField
                            placeholder="Title"
                            value={title}
                            onChange={onTitleChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
                        <TextField
                            placeholder="Add Todo here"
                            value={task}
                            onChange={onTaskChange}
                            fullWidth
                        />
                    </Grid>
                    <Grid xs={2} md={1} item>
                        <Button
                            fullWidth
                            color="primary"
                            variant="outlined"
                            onClick={onAddSubmit}
                        >
                            Add
                        </Button>
                    </Grid>
                </Grid>
            </Paper>

        </div>
    )

}


export default CreateATask;