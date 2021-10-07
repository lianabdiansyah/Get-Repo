import React from 'react'
import './index.css'
function FormLogin() {
    return (
        <div>
            <h3 className="judul">Form Login</h3>
            <form className="form">
                <label for="email">Email</label>
                <input className="input" type="text" id="email" name="email" placeholder="Masukkan E-mail" />
                <label for="password">Password</label>
                <input type="password" id="password" name="password" placeholder="Masukkan Password" />
                <button>Login</button>
            </form>
        </div>
    )
}

export default FormLogin
