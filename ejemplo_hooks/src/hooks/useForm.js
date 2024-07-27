import { useState } from 'react'

export const useForm = (initualForm = {}) => {
    
    const [ formState, setFormState ] = useState(initualForm)

    const onInputChange = ({target}) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    return {
        formState,
        onInputChange
    }
}
