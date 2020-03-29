import { useState, useEffect } from 'react';

const useForm = (initialState, validate, next) => {

    const [values, setValues] = useState(initialState)
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    useEffect(() => {
        if(isSubmitting) {
            const isErrors = Object.keys(errors).length !== 0
            if(isErrors) {
                setIsSubmitting(false)
            } else {
                next()
                setIsSubmitting(false)
                setValues(initialState)
            }
        }
    }, [errors, next, isSubmitting, initialState])

    const handleChange = event => {
        event.persist() // pour que l'event ne change pas avant d'être utilisé
        setValues(prevValues => ({
            ... prevValues, // on reprend les valeurs précédentes de values
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = event => {
        event.preventDefault()
        const errors = validate(values)
        setErrors(errors)
        setIsSubmitting(true)
    }

    return {
        handleSubmit,
        handleChange,
        values,
        errors
    }
}

export default useForm