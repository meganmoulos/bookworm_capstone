import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {currentUserState} from '../atoms'

const defaultUser = {
    first_name:'',
    last_name:'',
    email:'',
    username:'',
    password:'',
    image:''
}

function Signup(props) {
    const [formData, setFormData] = useState(defaultUser)
    const [errors, setErrors] = useState([])
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState)
    const history = useHistory()

    function createUser(user){
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                username: user.username,
                password: user.password,
                image: user.image
            })
            })
            .then(res => {
                if(res.ok){
                    res.json().then(user => {
                        setCurrentUser(user)
                        history.push('/')
                    })
                } else {
                    res.json().then(json => setErrors(json.errors))
                }
            })
    }

    console.log(currentUser)
    
    function handleSubmit(e){
        e.preventDefault()
        createUser({
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            username: formData.username,
            password: formData.password,
            image: formData.image
        })
        setFormData(defaultUser)
    }

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input 
                    type="text" 
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                />
                <label>Last Name:</label>
                <input 
                    type="text" 
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                />
                <label>Email address:</label>
                <input 
                    type="text" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <label>Username:</label>
                <input 
                    type="text" 
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                />
                <label>Password:</label>
                <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                <label>Image URL:</label>
                <input 
                    type="text" 
                    name="image"
                    value={formData.image}
                    onChange={handleChange}
                />
                <button type='submit'>Sign Up</button>
            </form>
            {errors ? <div>{errors}</div> : null}
        </div>
    );
}

export default Signup;