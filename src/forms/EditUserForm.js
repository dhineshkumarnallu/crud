import {useEffect, useState} from "react"
const EditUserForm = (props)=>{
 const [user,setUser] =  useState(props.currentUser)

 useEffect(()=>{
 setUser(props.currentUser)
 },[props])

 const handleInputChange = (event)=>{
    const {name,value} = event.target
    setUser({...user,[name]:value})
}
return (
    <form onSubmit={
        event => {
            event.preventDefault();
            if(!user.name|| !user.username) return;
            props.updateUser(user.id,user);
        
        }
    }>
        <label>name</label>
        <input type="text" onChange={handleInputChange} name="name" value={user.name} />
        <label>Username</label>
        <input type="text" onChange={handleInputChange} name="username" value={user.username} />
        <button>update user</button>
        <button className="button muted-button" onClick={()=>{
         props.setEditing(false)   

        }}>cencel</button>
    </form>
)
}
export default EditUserForm;