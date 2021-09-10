import React, { useState } from "react";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterForm() {
  /*
    const initalState = {
        userName: "",
        password: "",
        confirmPassword: "",
        isSuccess: null
    }
    */

  const [state, setState] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    isSuccess: null,
  });

 

  const handleInput = (e) => {
    const { id, value } = e.target;
    setState((emrahState) => ({
      /*
            prevState : {
                email: "",
                password: "",
                confirmPassword:"",
                isSuccess: null
            }
            */
      ...emrahState,
      [id]: value,
    }));
  };

  const handleButton = (e) => {
      e.preventDefault();
      setSubmitted(true);
      if(state.password === state.confirmPassword) {
            //api call et 
            postData();

      }else {
        console.log("password patlak");
      }
  }

  const postData = () => {
        if(state.email.length && state.password.length) {

            const data = {
                "email" : state.email,
                "password" : state.password
            }
      
       // post<T = any, R = AxiosResponse<T>>(url: string, data?: any, config?: AxiosRequestConfig): Promise<R>;

        axios.post("test.com/api",data).then(function(response) {
               
        }
        )

    }



  }

  const [submitted, setSubmitted] = useState(false);
  console.log("test");

  return (
    <div>
      <form>

        <div className="form-group"> 
        
        <label htmlFor="inputEmail">Email</label>
        <input
          type="email" 
          id="email"
          placeholder="Email@"
          value={state.email}
          onChange={handleInput} 
          className= {'form-control' + (submitted && !state.email ? 'is-invalid' : '')} /> {
            submitted && !state.email &&  <div className='invalid'>Email lazim</div>
          }
        
        <label htmlFor="InputPassword">Password</label>
        <input 
            type="password"
            className="form-control"
            id="password"
            placeholder="Pass"
            value={state.password}
            onChange={handleInput}
        />
        
        <label htmlFor="InputConfirm">Confirm</label>
        <input 
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Pass"
            value={state.confirmPassword}
            onChange={handleInput}
        /> 

        <button
            type="submit"
            className="btn btn-danger"
            onClick={handleButton}
        >Kayıt ol</button>


       </div>
      </form>
    </div>
  );
}

export default RegisterForm;
