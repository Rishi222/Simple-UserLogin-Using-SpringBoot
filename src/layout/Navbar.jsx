function Navbar() {
  return (
    <div>
      <nav className="navbar bg-primary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Project : SpringBoot+React+MySQL
          </a>
          <a href="/adduser"><button type="button" className="btn btn-primary">
            Add User
          </button></a>
        </div>
      </nav>
    </div>
  );
}

export default Navbar