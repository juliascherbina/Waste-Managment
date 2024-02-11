import React, { useState } from "react";






export const Connect = () => {
  const [form, setForm] = useState('')
  function saveValue(event) {
    setForm(event.target.value)
  }
  return <>
    <section className='connect' id="connect">
      <h1 className='connect-header'> Connect with us</h1>
      <form className='connect-form'>
        <label for='fname'>First name:</label>
        <input type='text' id='fname' name='fname' placeholder='Enter your name' onChange={()=>saveValue}></input>

        <label for='lname'>Last name:</label>
        <input type='text' id='lname' name='lname' placeholder="Enter your last name" onChange={e => setForm(e.target.value)}></input>

        <label for='email'>Email</label>
        <input type='text' id='email' name='email' placeholder='Enter your email' onChange={e => setForm(e.target.value)} ></input>
        <button>Want to connect</button>
      </form>
    </section>
  </>
}