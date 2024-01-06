import React from 'react';

function ChildTwo({ data, onDeleteTask }) {
    return (
        <div className="container mt-5 ">
            <div style={{ border: "3px solid rgb(24, 31, 31)", borderRadius: "10px", padding: "10px", marginTop: "10%" ,width:"60%"}}>
                <h3>lets get some work done</h3>

                <div className='container'>
                    {data.map((item, index) => (
                        
                        <div className='row'  style={{ border: "2px solid rgb(13, 112, 112)", borderRadius: "10px", marginBottom: "10px", padding: "10px" }}>
                            <h5 className ="col-10" key={index}>{item.task}</h5>
                            <button className ="col-2 button btn btn-dark " onClick={() => onDeleteTask(index)}>Delete</button>

                        </div>

                    ))}

                </div>
            </div>
        </div>
    );
}

export default ChildTwo;
