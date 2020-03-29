import React from 'react';
import ProfilForm from './ProfilForm';
import useForm from '../hooks/useForm';
import validateMessage from '../utils/validateMessage';

const INITIAL_STATE = {
    nom: '',
    prenom: '',
    email: ''
}

const CreateProfil = () => {

    const handleCreateProfil = () => {
        const { nom, prenom, email } = values
        const newProfil = {
            nom,
            prenom,
            email,
            createAt : Date.now()
        }
    }

    const { handleSubmit, handleChange, values } = useForm(INITIAL_STATE, validateMessage, handleCreateProfil)
    return (
        <ProfilForm handleSubmit={handleSubmit} handleChange={handleChange} values={values} />
    )
}

export default CreateProfil