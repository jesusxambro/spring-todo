import logo from './image.svg';
import './App.css';
import NavBar from "./navigation/NavBar";
import Header from "./components/Header";
import axios from 'axios';
import {useEffect, useState} from "react";
import ListTasks from "./components/ListTasks";
import CreateATask from "./components/CreateATask";
import async from "async";
import {Button} from "@mui/material";


function App() {
    const [tasks, setTasks] = useState([]);



    async function GetTasks(){
        try{
            const res = await axios.get("http://localhost:8080/tasks/");

            setTasks([...res.data]);

        }catch (e) {
            console.log(e)
        }
    }



    useEffect(()=>{
        GetTasks().catch(console.error)

    },[])


  return (
    <div className="App">
      <header>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <NavBar />
          <Header />
          <h3>Add a task:</h3>
          <CreateATask refreshTaskList={GetTasks} />
          <h2>Tasks To Do:</h2>
          <ListTasks tasks={tasks}
                     refreshTaskList={GetTasks}
                    />
          <Button onClick={GetTasks}>Refresh</Button>
      </header>

      
    </div>
  );
}

export default App;
