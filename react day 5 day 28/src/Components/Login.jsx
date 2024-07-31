import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

function Login() {
 
    const [UserDetail,setUserDetails] = useState({name:"",email:"",password:""})

    const navigate = useNavigate();
    
    
    function handleSubmit(e){
        e.preventDefault();
        console.log(UserDetail);
        setUserDetails({...UserDetail,name:"",email:"", password:""})
        navigate('/welcome')
    }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder='Name' value={UserDetail.name}  onChange={(e)=> setUserDetails({...UserDetail,name: e.target.value})}/>
            </div>
            <div>
                    <input type="email" placeholder='Email Address' value={UserDetail.email} onChange={(e) => setUserDetails({ ...UserDetail, email: e.target.value })}  />
            </div>
            <div>
                    <input type="password" placeholder='Password' value={UserDetail.password} onChange={(e) => setUserDetails({ ...UserDetail, password: e.target.value })} />
            </div>
            <div>
                <button type='submit'>Submit</button>
            </div>
            <Link to={'/'}>I am home</Link>
        </form>
    </div>
  )
}

export default Login

//     const name = useRef(null);
// const email = useRef(null);
// const password = useRef(null);


// function handleSubmit(e) {
//     e.preventDefault()
//     console.log(e)

//     console.log(name.current.value)
//     console.log(email.current.value)
//     console.log(password.current.value);
// }