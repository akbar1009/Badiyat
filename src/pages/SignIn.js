import { Link, useNavigate } from 'react-router-dom';
import signinImg from '../imgs/Frame.png';
import { useState } from 'react';

export default function SignIn(){
    const navigate = useNavigate()
    const [form,setForm] = useState({
        email:"",
        password:""
    })
  
    const handleChange= (e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        console.log(form);
        
    }
    const savedUser = JSON.parse(localStorage.getItem('user'));
  const handleSubmit = (e) =>{
e.preventDefault();
if(savedUser.email === form.email && savedUser.password ===form.password){
    alert('Muvaffaqiyatli kirdingiz!')
    navigate("/")
}
else alert("Siz notogri email yoki parol kiritdingiz")
    }

    return(
        <div className="SignUp">
            <div className="row">
                <div className="col-6 bgimg">
                    <img src={signinImg}/>
                </div>
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign in</h1>
                        <p>Do not you have an account?<Link to={"/signup"}>Sign up</Link></p>
                        <input type='email' name='email' placeholder='Email'  onChange={handleChange} />
                        <input type='password' name='password' placeholder='Password'  onChange={handleChange} />
                        <button className='signUp-btn' type='submit'>Next step</button>
                    </form>
                </div>
            </div>
        </div>
    )
}