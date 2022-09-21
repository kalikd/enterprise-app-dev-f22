import { useFormik } from 'formik'


const initialValues = {
    name: '',
    email: ''
}
const onSubmit = (values) => {
   console.log(values)
}
const validate = (values) => {
    const errors = {}

    if(!values.name){
        errors.name = "Name is Required!"
    }

    if(!values.email){
        errors.email = "Email is Required!"
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
        errors.email = 'Invalid Email'
    }

    return errors;
}
function SignupForm(){
    const formik = useFormik({
        initialValues,
        onSubmit, 
        validate
    })

    return (<>
        {/* <span>{JSON.stringify(formik.touched)}</span> */}
        <form onSubmit={formik.handleSubmit}>
            <div style={{marginTop:10}}>
                <label>Full Name</label>
                <input type="text" name="name" id="name" placeholder="Full Name" onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} />
                {(formik.errors.name && formik.touched.name) && <span style={{color:'red'}}>{formik.errors.name} </span>}
            </div>
            <br/>
            <div>
                <label>Email</label>
                <input type="email" name="email" id="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} />
                {(formik.errors.email && formik.touched.email) && <span style={{color:'red'}}>{formik.errors.email} </span>}
            </div>
            <input type="submit" value="Signup"/>
        </form>
        {/* <h4>Error:</h4>
        <p>{JSON.stringify(formik.errors)}</p> */}
    </>)
}

export default SignupForm;