
import './App.css';
import {useState} from "react";
import UserTable from "./table/UserTable"
import AddUserForm from './forms/AddUserForm';
import EditUserForm from './forms/EditUserForm';
function App() {
  const userData=[
    {id:1,name:'dhinesh',username:'ndhinesh'},
    {id:2,name:'ramesh',username:'rramesh'},
    {id:3,name:'ganesh',username:'gganesh'},
  ];

  const addUser = (user)=>{
    user.id = users.length + 1;
    setUsers([...users,user])
  }

  const deleteUser = (id)=>{
    setUsers(users.filter((user)=>user.id!==id))
    setEditing(false);
  }
  const [users,setUsers] = useState(userData);
  const [editing,setEditing] = useState(false)
  const initialFormState = {id:null,name:"",username:""}
  const [currentUser,setCurrentUser] = useState(initialFormState)

  const editRow = (user)=>{
    setEditing(true);
    setCurrentUser({id:user.id,name:user.name,username:user.username});
  }

  const updateUser = (id,updateUser)=>{
    setEditing(false);
    setUsers(users.map((user=>(user.id===id?updateUser:user))))
  }
  return (
    <div className="container">
      <h2>CURD App with Hooks</h2>
      <div id ='curd' className='flex-row'>
        <div className="flex-large">
          {editing?(<div>
            <h2>Edit User</h2>
            <EditUserForm 
            setEditing={setEditing}
            currentUser={currentUser}
            updateUser={updateUser}
            />
          </div>):(<div> 
            <h3>add user</h3>
           <AddUserForm addUser={addUser} />

          </div>)
          }
          
        </div>
        <div className='flex-large'> <h3>view users</h3>
        <UserTable editRow={editRow} deleteUser={deleteUser} users={users} />
        </div>
      </div>
   
    </div>
  );
}

export default App;
