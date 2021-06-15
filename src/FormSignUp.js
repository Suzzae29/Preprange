import useForm from './userForm'
import validate from './Validation'
import './Form.css';

const FormSignUp = (submitForm) => {
  const { handleChange, values, handleSubmit, errors} = useForm(submitForm, validate);

    return ( 
        <div className="form-content">
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-inputs">
                    <input type="email" 
                    name= "email"
                    className="form-input"
                    placeholder= "Email/PIN"
                    value={values.email}
                    onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>

                <div className="form-inputs">
                    <input type="password" 
                    name= "password"
                    className="form-input"
                    placeholder= "Password"
                    value={values.password}
                    onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>

                <button className="form-input-btn" 
                type="Sumbit">
                    Submit
                </button>
            </form>
        </div>
     );
}
 
export default FormSignUp;