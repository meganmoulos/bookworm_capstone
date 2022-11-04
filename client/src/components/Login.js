import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {currentUserState} from '../atoms'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper';
import Image from '../assets/booksbg2.jpg'

function Login(props) {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const {username, password} = formData

    function onSubmit(e){
        e.preventDefault()
        const user = {
            username,
            password
        }

        fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    setCurrentUser(user)
                    history.push('/home')
                })
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

    function handleChange(e){
        const {name, value} = e.target
        setFormData({...formData, [name]: value})
    }

    return (
        <Paper sx={{ backgroundImage: `url(${Image})`, height: 1350 }}>
        <Container sx={{
            marginTop: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h1>Login</h1>
            <Container>
                <form onSubmit={onSubmit}>
                    <Box
                        sx={{
                            marginTop: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <label>Username</label>
                        <input type='text' name='username' value={username} onChange={handleChange} />
                        <label>Password</label>
                        <input type='text' name='password' value={password} onChange={handleChange} />
                        <input type='submit' value='Log In' />
                    </Box>
                </form>
                {errors ? <div>{errors}</div> : null}
            </Container>
        </Container>
        </Paper>
    );
}

export default Login;