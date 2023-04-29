
const UserTable = (props)=>(
    <table>
        <thead>
            <tr>
                <th>name</th>
                <th>username</th>
                <th>action</th>
            </tr>
        </thead>
        <tbody>
            {props.users.length>0?(
                props.users.map((user)=>(
                    <tr key={user.id}>
                    <td>{user.name}</td>
                    <td> {user.username}</td>
                    <td>
                        <button onClick={()=>{
                            props.editRow(user)
                        }} className="button muted-button">edit</button>
                        <button onClick={()=>props.deleteUser(user.id)} className="button muted-button">delete</button>
                    </td>
                </tr>
                ))
            ):(
                <tr>
                    <td colSpan={3}>no users</td>
                </tr>
            )
            }
          
        </tbody>
    </table>
    
);
export default UserTable;