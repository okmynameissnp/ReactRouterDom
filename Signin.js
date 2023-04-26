import React from 'react'
import img4 from '../Assets/img4.jpeg';
export const Signin = () => {
  return (
    <div>

<div class="wrapper fadeInDown">
  <div id="formContent">
  


    <div class="fadeIn first">
      <img src={img4} id="icon" alt="User Icon" />
    </div>

    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login"/>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password"/>
      <input type="submit" class="fadeIn fourth" value="Log In"/>
    </form>


    <div id="formFooter">
     
    </div>

  </div>
</div>
    </div>
  )
}
