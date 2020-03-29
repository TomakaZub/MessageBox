import React, { useState } from "react"

const ProfilForm = ({ handleSubmit, handleChange, values }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nom :</label>
        <textarea name='nom' onChange={handleChange} values={values} />
        <label>Prénom :</label>
        <textarea name='prenom' onChange={handleChange} />
        <label>Email :</label>
        <textarea name='email' onChange={handleChange} />
        <button type='submit' onChange={handleChange}>
          Enregistrer
        </button>
      </form>
    </div>
  )
}

export default ProfilForm
