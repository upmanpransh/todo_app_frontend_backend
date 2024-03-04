import { useState } from "react";

export function CreateTodo(){
const [title,setTitle]=useState("");
const [description,setDescription]=useState("");

    return <div>
        <input id="title" style={{padding:30,margin:10}} type="text" placeholder="title" onChange={function(e){
            setTitle(e.target.value);
        }}></input><br />
        <input id="description" style={{padding:30,margin:10}} type="text" placeholder="description" onChange={function(e){
            setDescription(e.target.value);
        }}></input><br />
        <button style={{padding:30,margin:10}}
        onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method:"POST",
                body:JSON.stringify({
                    title:title,
                    description:description
                }),
                headers:{
                    "content-Type":"application/json"
                }
            })
            .then(async function(res){
                const json=await res.json();
                alert("Todo added");
            })
        }}>Add a button</button>
    </div>
}