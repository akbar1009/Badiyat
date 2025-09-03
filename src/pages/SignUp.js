import { Link, useNavigate } from 'react-router-dom'
import signImg from '../imgs/signup img.png'
import { useState } from 'react'

export default function SignUp(){
    const navigate = useNavigate()
    const [form, setForm] = useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        password:""
    })
    const handleChange =(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
        
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(!form.email || !form.password){
            alert("Email yoki password kiritilmadi!")
            return;
        }
        localStorage.setItem('user',JSON.stringify(form))
        alert("Siz muvaffaqiyatli ro'yxatdan o'tdingiz!")
        // window.location.href = "/"
        navigate("/")
        console.log(form);
        
    }

    return(
        <div className="SignUp">
            <div className="row">
                <div className="col-6 bgimg">
                    <img src={signImg}/>
                </div>
                <div className="col-6">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign up</h1>
                        <p>Already have an account?<Link to={"/signin"}>Sign in</Link></p>
                        <input type='text' name='fname'  placeholder='First name' onChange={handleChange} />
                        <input type='text ' name='lname' placeholder='Last name'  onChange={handleChange} />
                        <input type='number' name="number" placeholder='Phone' onChange={handleChange} />
                        <input type='email' name='email' placeholder='Email'  onChange={handleChange} />
                        <input type='password' name='password' placeholder='Password'  onChange={handleChange} />
                        <button className='signUp-btn' type='submit'>Next step</button>
                    </form>
                </div>
            </div>
        </div>
    )
}