import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function Home() {
  const [users, setUsers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    loadUsers();
  }, []);

  // Load User
  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/user");
    setUsers(result.data);
  };

  // Delete User
  const deleteUsers = async (id) => {
    await axios.delete(`http://localhost:8080/user/${id}`);
    loadUsers();
  };

  // View User
  const viewUser = (id) => {
    navigate(`/viewuser/${id}`);
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">UserName</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className="btn btn-primary mx-1"
                    onClick={() => viewUser(user.id)}
                  >
                    View
                  </button>
                  <Link
                    className="btn btn-outline-primary mx-1"
                    to={`/edituser/${user.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-1"
                    onClick={() => deleteUsers(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
