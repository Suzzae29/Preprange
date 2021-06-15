export default function Validation(values){
    let errors = {}

    if (!values.email){
        errors.email = "email required";
    }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "email address is invalid"
    }

    if (!values.password){
        errors.password = "password required";
    } else if (values.password !== values.password){
      errors.password = "password do not match"
    }

 return errors;
}




