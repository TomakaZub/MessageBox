import React from "react"

const MessageForm = ({ handleSubmit, handleChange, values, errors, user }) => {
  return (
    <form
      onSubmit={handleSubmit}
      onKeyDown={event =>
        event.keyCode === 13 && event.ctrlKey && handleSubmit(event)
      }
      className='message-form-container'
    >
      <div className='message-form'>
        <div>
          <img src={user.photoURL} alt='profil' className='profil-picture' />
        </div>
        <textarea
          name='message'
          placeholder='Quoi de neuf ?'
          onChange={handleChange}
          value={values.message}
        />
      </div>
      {errors.message && <p>{errors.message}</p>}
      <footer>
        <p>{280 - values.message.length}</p>
        <button
          type='submit'
          disabled={values.message.length > 280 || values.message.length === 0}
        >
          Tweeter
        </button>
      </footer>
    </form>
  )
}

export default MessageForm
