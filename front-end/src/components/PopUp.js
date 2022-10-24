import React, {useState} from 'react';
import axios from "axios";
import {Button} from "@mui/material";

function PopUp (props){
    const [title, setTitle] = useState("");
    const [task, setTask] = useState("")


    function handleClick(){
       props.toggle();
    }

   async function handleSubmit(event) {

       try{
           const res = await axios.patch(`http://localhost:8080/tasks/${props.task.id}`,{
               title: title,
               task: task
           })
           if(res.status === 200){
               props.toggle();
               props.refreshTaskList();
           }else{
               console.log(res)
               console.log("Not fired")

           }

       }catch (e) {
           console.log(e)
       }
    }
    function onTitleChange(event) {
        setTitle(event.target.value);
    }
    function onTaskChange(event) {
        setTask(event.target.value);
    }


    return(
        <div className="modal">
            <div className="modal_content">
          <span className="close" onClick={handleClick}>
            &times;
          </span>

                <form>
                    <h3>Update Task:</h3>
                    <label>
                        Title:
                        <input type="text" placeholder="title"
                               value={title} onChange={onTitleChange} />
                    </label>
                    <br/>
                    <label>
                        Task:
                        <input type="text" placeholder="task"
                               value={task}
                               onChange={onTaskChange}
                        />
                    </label>
                    <br />
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                    {/*<input type="submit" onSubmit={handleSubmit}/>*/}
                </form>
            </div>
        </div>
    )


}


export default PopUp;