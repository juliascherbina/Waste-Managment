import React from "react";






export const Connect=()=>{
    return <>
     <section className='connect' id="connect">
        <h1 className='connect-header'> Connect with us</h1>
        <form className='connect-form'>
          <label for='fname'>First name:</label>
          <input type='text' id='fname' name='fname' value='Enter your name'></input>

          <label for='lname'>Last name:</label>
          <input type='text' id='lname' name='lname' value='Enter your last name'></input>

          <label for='email'>Email</label>
          <input type='text' id='email' name='email' value='Enter your email' ></input>
          <button>Want to connect</button>
        </form>
      </section>
    </>
}