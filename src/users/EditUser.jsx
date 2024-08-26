import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();
  const {id}=useParams();

  // Store infromation
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });

  const { name, username, email } = user;

  useEffect(()=>{
    loadUser();
  },[]);
  // to pass and put the value inside
  const OnInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  //Send the data
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };

  const onCancel = () => {
    navigate("/");
  };

  const loadUser = async ()=>{
    const result = await axios.get(`http://localhost:8080/user/${id}`)
    setUser(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
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
