import { useEffect, useRef } from 'react'
import { useForm } from '../hooks/useForm'

export const FormsComponent = () => {

    const initialForm = {
        username: "",
        email: "",
        password: ""
    }

    const { formState, onInputChange } = useForm(initialForm)

    const { username, password } = formState

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)            // logica para mandar informacion al backend
    }

    const focusRef = useRef()

    useEffect(() => {
        focusRef.current.focus()
    })

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="1">
                    <label htmlFor="username" className="form-label">usuario</label>
                    <input
                        ref={focusRef}
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        value={username}
                        onChange={onInputChange}
                    />
                </div>
                <div className="2">
                    <label htmlFor="password" className="form-label">contraseña</label>
                    <input
                        type="text"
                        className="form-control"
                        id="password"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    />
                </div>
                <button type="submit" className="buton">enviar</button>
            </form>
        </>
    )
}
