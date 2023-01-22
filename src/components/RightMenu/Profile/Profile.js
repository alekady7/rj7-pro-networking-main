import React, { useState } from 'react'

function Profile() {
  const [formValue, setformValue] = useState({
    username: '',
    password: '',
  })
  return (
    <div className='profile'>
      <div className='form'>
        <form>
          <label>
            Name
            <input type='text' name='username' value={formValue.username} placeholder='Your name' />
          </label>
          <br />
          <label>
            Password
            <input type='password' name='password' value={formValue.password} placeholder='Enter password' />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Profile