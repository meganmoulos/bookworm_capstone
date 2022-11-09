import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete'

function User({currentUser, setCurrentUser}) {
    const [errors, setErrors] = useState([])
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const history = useHistory()

    function handleSubmit(e){
        e.preventDefault()
        const userUpdate = {
            first_name: firstName,
            last_name: lastName,
            username: username,
            email: email,
            password: password,
            image: image
        }
        const id = currentUser.id
        fetch(`/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userUpdate)
        })
        .then(res => {
            if(res.ok){
                console.log("ok")
            } else {
                res.json().then(json => setErrors(json.errors))
            }
        })
    }

    function handleDelete(){
        const id = currentUser.id
        fetch(`/users/${id}`, {
            method: 'DELETE'
        })
        .then(setCurrentUser(null))
        .then(history.push('/signup'))
    }

    return (
        <Container>
            <Avatar
                sx={{ width: 100, height: 100 }}
                alt='profile pic'
                src={currentUser ? currentUser.image : null}
            />
            <h1>Hello, {currentUser.username}!</h1>
            
            <Container sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <p>Update your details:</p>
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
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />

                        <label>Last Name:</label>
                        <input 
                            type="text" 
                            name="last_name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label>Email address:</label>
                        <input 
                            type="text" 
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                        <label>Username:</label>
                        <input 
                            type="text" 
                            name="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                        <label>Password:</label>
                        <input 
                            type="password" 
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <label>Image URL:</label>
                        <input 
                            type="text" 
                            name="image"
                            value={image}
                            onChange={e => setImage(e.target.value)}
                        />
                        <Button variant='contained' type='submit'>Update</Button>
                    </Box>
                </form>
                {errors ? <div>{errors}</div> : null}
                <Box padding={3}>
                <Button variant="outlined" onClick={handleDelete} startIcon={<DeleteIcon />}>Delete your account</Button>
                </Box>
            </Container>
        </Container>
    );
}

export default User;