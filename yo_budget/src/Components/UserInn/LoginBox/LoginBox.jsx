import { Form } from "../../Form/Form";

export const LoginBox = () => {
    return (
        <div className="user-login" >
            <i className="fa-solid fa-user-check userinn-icon login"></i>
            <div className="userinn-title-box">
                <hr />
                <h3 className='inn-title'>Login</h3>
                <hr />
            </div>
            <form className='login-form' name='login' onSubmit={submitHandler}>
                <div className="form-ctr">
                    <i className="fa-solid fa-envelope"></i>
                    <input type="email" name='username' placeholder='Email' onChange={e => setUserLoginData({ ...userLoginData, username: e.target.value })} value={userLoginData.username} />
                </div>
                <div className="form-ctr">
                    <i className="fa-solid fa-lock"></i>
                    <input type="password" name='password' placeholder='Password' onChange={e => setUserLoginData({ ...userLoginData, password: e.target.value })} value={userLoginData.password} />
                </div>
                <div className="form-ctr">
                    <input className='btn-login' type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}
