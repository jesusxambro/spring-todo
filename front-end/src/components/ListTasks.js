import React, {useState} from 'react';
import Task from "./Task";
import {List, Paper} from "@mui/material";


const ListTasks = ((props) => {
    // const [updated, setUpdated] = useState(props.updated)

    // if (props.tasks[0]) {
    //     return (
    //         <>{props.tasks.map((task,index) =>{
    //             return(
    //                 <Task key={index} task={task}/>
    //             )
    //         })}</>
    //     );
    // } else {
    //
    //     return (
    //         <>Empty List</>
    //     );
    // }
    return (<>
        {
            props.tasks.length > 0 && (
                <Paper style={{margin: 16}}>
                    <List style={{overflow: 'scroll'}}>
                        {props.tasks.map((todo, idx) => (
                            <Task
                                task={todo}
                                key={`TodoItem.${idx}`}
                                divider={idx !== props.tasks.length - 1}
                                refreshTaskList={props.refreshTaskList}
                                // onCheckBoxToggle={() => props.onItemCheck(idx)}
                            />
                        ))}
                    </List>
                </Paper>
            )
        }
        </>
        )


})


export default ListTasks;