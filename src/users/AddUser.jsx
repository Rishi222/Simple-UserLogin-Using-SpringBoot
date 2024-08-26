import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function AddUser() {

    let navigate=useNavigate()
    // Store infromation
    const [user,setUser]=useState({
        name: "",
        username: "",
        email: "",
    })

    const{name,username,email}=user

    // to pass and put the value inside
    const OnInputChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    //Send the data
    const onSubmit=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/");
    };

    const onCancel = () => {
      navigate("/");
    };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p4 mt-2 shadow">
          <h2 className="text-center m-4">Register New Use</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Name"
                name="name"
                value={name}
                onChange={(e) => OnInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your Username"
                name="username"
                value={username}
                onChange={(e) => OnInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter your E-mail address"
                name="email"
                value={email}
                onChange={(e) => OnInputChange(e)}
              />
            </div>
            <button
              type="submit"
              className="btn btn-outline-primary form-label mx-2"
            >
              Submit
            </button>
              <button
                type="submit"
                className="btn btn-outline-primary form-label"
                onClick={onCancel}
              >
                Cancel
              </button>
          </form>
        </div>
      </div>
    </div>
  );
}
