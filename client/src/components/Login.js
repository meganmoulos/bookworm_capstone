import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'
import {useRecoilState} from 'recoil'
import {currentUserState} from '../atoms'

function Login(props) {
    const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

    const [formData, setFormData] = useState({
        username:'',
        password:''
    })
    const [errors, setErrors] = useState([])
    const history = useHistory()
    const {username, password} = formData

    console.log(currentUser)

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
        <div>
            <h1>Bookworm</h1>
            <form onSubmit={onSubmit}>
                <label>Username</label>
                <input type='text' name='username' value={username} onChange={handleChange} />
                <label>Password</label>
                <input type='text' name='password' value={password} onChange={handleChange} />
                <input type='submit' value='Log In' />
            </form>
            {errors ? <div>{errors}</div> : null}
        </div>
    );
}

export default Login;