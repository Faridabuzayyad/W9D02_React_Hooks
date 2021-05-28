import React, {useState} from 'react';


// jsx
const App = () => {
  const [posts, setPosts] = useState([{userId : 1, id: 101, title: "Milan", body: "The best club in the history"},
  {userId : 2, id: 103, title: "Juventus", body: "The worst club in the history"}])
  const [userId, setUserId] = useState(0);
  const [id, setId] = useState(100);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const userIdUpdate = (e) => setUserId(e.target.value);
  const idUpdate = (e) => setId(e.target.value);
  const titleUpdate = (e) => setTitle(e.target.value);
  const bodyUpdate = (e) => setBody(e.target.value);
  return <>

  <div>
    <h1>Blog App</h1>
    {posts.map((element, index) => {
      return <div> <h1 key = {index}> {element.title} {element.body} </h1> </div>
    })}
    <button>Add</button>
    <input onChange={userIdUpdate} type= 'text' placeholder='Enter userId Here'></input>
    <input onChange={idUpdate} type= 'text' placeholder='Enter id Here'></input>
    <input onChange={titleUpdate} type= 'text' placeholder='Enter title Here'></input>
    <input onChange={bodyUpdate} type= 'text' placeholder='Enter body Here'></input>
    </div>
  

  </>
};

export default App