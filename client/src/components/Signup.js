import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {currentUserState} from '../atoms'
import Image from '../assets/booksbg2.jpg'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button'


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
                        console.log(currentUser)
                    })
                    .then(history.push('/home'))
                } else {
                    res.json().then(json => setErrors(json.errors))
                }
            })
    }

    
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
        <Paper sx={{ backgroundImage: `url(${Image})`, height: 1350 }}>
            <Container sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <form onSubmit={handleSubmit}>
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
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
                        <Button variant='contained' type='submit'>Sign Up</Button>
                    </Box>
                </form>
                {errors ? <div>{errors}</div> : null}
            </Container>
        </Paper>
    );
}

export default Signup;