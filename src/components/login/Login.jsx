import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import FormInput from "./FormInput";
import "./Signup-login.css";

const Login = () => {
  const initialState = {
    email: "",
    password: "",
    uid: "",
  };
  const { loginUser } = useAuth();
  const history = useHistory();
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUid = async () => {
      try {
        const response = await fetch(
          "https://devapi.dhakai.com/api/v2/deviceuid"
        );
        const data = await response.json();
        setValues({
          ...values,
          uid: data.result.deviceUuid,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchUid();

    return () => {};
  }, []);

  const inputs = [
    {
      id: 1,
      name: "email",
      type: "email",
      placeholder: "email",
      label: "Email",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      plaholder: "password",
      label: "password",
      required: true,
    },
  ];

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await loginUser(values);
      history.push("/home");
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  const text = <h2>email : rajib2@gmail.com, password : 123456</h2>;
  return (
    <div className='card'>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={handleChange}
          />
        ))}
        {text}
        <button>Login</button>
      </form>
    </div>
  );
};

export default Login;
