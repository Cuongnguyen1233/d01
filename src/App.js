import "./App.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import StudentCreate from "./pages/student";
import StudentView from "./pages/student-view";
import data from "./data.json";
import evl from "./1dd959fe5a5f1442cdde8123f3f0d86c.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={evl} className="evl-logo" alt="evl" />
      </header>
      <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="src/App.js">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="src/pages/student-view.js">Link</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="src/pages/student.js">Link</a>
        </li>  
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Dropdown</a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Link</a></li>
            <li><a class="dropdown-item" href="#">Another link</a></li>
            <li><a class="dropdown-item" href="#">A third link</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <nav className="mt-3 mb-3">
        <Link to="/" className="lk">
          {" "}
          home
        </Link>
        <Link to="st-view" className="lk">
          {" "}
          view
        </Link>
        <Link to="st-create" className="lk">
          {" "}
          create new student
        </Link>
      </nav>
      <Outlet className="mt-5" />
      <Routes>
        <Route path="st-view" element={<StudentView db={data} />} />
        <Route path="st-create" element={<StudentCreate db={data} />} />
      </Routes>
    </div>
  );
}

export default App;
