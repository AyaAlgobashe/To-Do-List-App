import ChildOne from "./childeOne";
import { useState } from "react";
import { todata } from "./todoData";
import ChildTwo from "./secChild";

function ParentCard() {
  const [doData, setDoData] = useState(todata);

  const handleAddTask = (newTask) => {
    const newDoTask=(prefData)=>{
      return(
        [...prefData,{task:newTask}]
      )
    }
    setDoData(newDoTask);
    console.log(doData)
  };
  const handleDeleteTask = (index) => {
    const deletList=doData.filter((_,i)=>i!==index)
    setDoData(deletList);
  };


  return (
    <div style={{ backgroundColor: "rgb(13, 112, 112)", height: "300px" }}>
      <div className="container justify-content-end ">
        <div className="row">
          <div className="col">
           
            <ChildOne onAddTask={handleAddTask} />
            <ChildTwo data={doData} onDeleteTask={handleDeleteTask}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ParentCard;
