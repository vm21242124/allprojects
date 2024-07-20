import { useState } from "react";
import styled from "styled-components";
import PrimaryButton from "../common/PrimaryButton";
import PropTypes from 'prop-types'
import ErrorLable from "../common/ErrorLable";
import { DoctorService } from "../../service/doctorservice";
import SuccessLable from "../common/SuccessLable";

const DoctorLoginContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LoginContainer = styled.div`
  width: 40%;
  margin: 20px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 80%;
    margin: 0;
    min-height: 100vh;
  }
`;

const InputBox = styled.input`
  width: 68%;
  padding: 10px;
  margin: 10px 1%;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 78%;
    margin: 10px 1%;
  }
`;

const SelectionList = styled.select`
  width: 70%;
  padding: 10px;
  margin: 10px 1%;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 78%;
    margin: 10px 1%;
  }
`;

const ChangeFormSpan = styled.span`
  margin: 1rem;
  color: blue;
  cursor: pointer;
`;

const RegisterForm = styled.form`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const validateForm = (form) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (!emailRegex.test(form.email)) {
      return "Invalid email format.";
  }

  if (!passwordRegex.test(form.password)) {
      return "Password must be at least 8 characters long and contain both letters and numbers.";
  }
  return null;
};

export default function DoctorLogin() {
  const [isLoginPage,setIsLoginPage]=useState(true);
  const [isError, setError]=useState('');
  const [ isSuccess, setSuccess]=useState('');
  return (
    <DoctorLoginContainer>
      {isError!=='' && 
        <ErrorLable errormessage={isError} setError={setError}/>
      }
      {isSuccess!=='' && 
        <SuccessLable successMessage={isSuccess} setSuccess={setSuccess}/>
      }
      <LoginContainer>
        { isLoginPage ?
          <LoginDoctor setIsLoginPage={setIsLoginPage} setError={setError} setSuccess={setSuccess}/>  :  <RegisterDoctor setError={setError} setIsLoginPage={setIsLoginPage} setSuccess={setSuccess}/>
        }
      </LoginContainer>
    </DoctorLoginContainer>
  );
}



const RegisterDoctor = (props) => {

  // const specializationList=["Select Specialization",'Cardiology', 'Neurology', 'Pediatrics', 'General Surgery'];
  // const DegreeList=["Select Degree",'MD', 'DO', 'MBBS', 'BDS'];
 
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    specialization: "",
    degree: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const validationError = validateForm(form);
    if (validationError) {
        props.setError(validationError);
    } else {
        props.setError('');
        const { name,age,email,password }= form;
        const data={name,age,email,password};
        try {
          const res=await DoctorService.RegisterDoctor(data);
          if(res.status===200){
            props.setSuccess('Doctor Registration Done');
          }
       } catch (error) {
         if(error.response.status===403){
            props.setError("Doctor Already Exits");
          }else{
            props.setError("something went wrong with our services");
          }
        }
        
    }
  };
  return (
    <RegisterForm onSubmit={handleSubmit}>
      <InputBox
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />
      <InputBox
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <InputBox
        type="number"
        name="age"
        placeholder="Age"
        value={form.age}
        onChange={handleChange}
      />
      <InputBox
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      {/* <SelectionList
        name="specialization"
        value={form.specialization}
        onChange={handleChange}
      >
        {specializationList.map((item ,key )=>(
          <option key={key} value={item}>{item}</option>
        ))}
        
      </SelectionList>
      <SelectionList name="degree" value={form.degree} onChange={handleChange}>
        {DegreeList.map((item, key )=>(
          <option key={key} value={item}>{item}</option>
        ))}
      </SelectionList> */}
      <div style={{ width: "100%", display: "flex", justifyContent: "center"}}>
        <PrimaryButton text="Register" handleClick={handleSubmit} />
      </div>
        <ChangeFormSpan onClick={()=>props.setIsLoginPage(true)}>Already have an account? Login Here</ChangeFormSpan>
    </RegisterForm>
  );
};
RegisterDoctor.propTypes={
  setIsLoginPage:PropTypes.bool,
  setError:PropTypes.string,
  setSuccess:PropTypes.string
}

const LoginDoctor = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const validationError = validateForm(form);
    if (validationError) {
        props.setError(validationError);
    } else {
        props.setError('');
        const { email,password }= form;
        const data={email,password};
        try {
          const res=await DoctorService.LoginDoctor(data);
          if(res.status===200){
            const user = res.data;
            sessionStorage.setItem('auth-token',user.token);
            props.setSuccess('Login success');
          }
       } catch (error) {
         if(error.response.status===403){
            props.setError("Wrong Credentials");
          }else{
            props.setError("something went wrong with our services");
          }
        }
        
    }
  };

  return (
    <RegisterForm onSubmit={handleSubmit}>
      <InputBox
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />
      <InputBox
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />
      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <PrimaryButton text="Login" handleClick={handleSubmit} />
      </div>
        <ChangeFormSpan onClick={()=>props.setIsLoginPage(false)}>Not Have an Account ? Register here </ChangeFormSpan>
    </RegisterForm>
  );
};
LoginDoctor.propTypes={
  setIsLoginPage:PropTypes.bool,
  setError:PropTypes.string,
  setSuccess:PropTypes.string
}