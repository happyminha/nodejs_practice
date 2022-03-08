import React, {useState} from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { useParams, useLocation, useNavigate} from 'react-router-dom';

function LoginPage(props) {
      const dispatch = useDispatch();
      const navigate = useNavigate(); // navigate('/') 이런식으로 이동
      const params = useParams(); // params.id 이런식으로 파라미터 접근
      const location = useLocation(); // location.pathname 이런식으로 주소접근

      const [Email, setEmail] = useState("")
      const [Password, setPassword] = useState("")
      

      const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
      }

      
      const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
      }

      
      const onSubmitHandler = (event) => {
        event.preventDefault();



        let body ={
            email: Email,
            password:Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess) {
                    navigate(-1);
                } else {
                    alert('Error"')
                }
             })

  }

  return (
    <div style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      ,width: '100%', height: '100vh' 
      }}>
        
        <form style = {{display : 'flex', flexDirection: 'column'}}
          onSubmit = {onSubmitHandler}
          >
          <label>Email</label>
          <input type ="email" value = {Email} onChange = {onEmailHandler} />
          
          


          <label>Password</label>
          <input type ="password" value = {Password} onChange = {onPasswordHandler} />

          


          <br />
          <button type ="submit">
              Login
          </button>
        </form>


    </div>
  )
}

export default LoginPage
