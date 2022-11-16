import React,{useState} from 'react'

const Navbar = () => {
    const [show, setShow]=useState(false);
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
  const handleOpen = () => {
    setOpen(!open);
  }
  const handleOpen1 = () => {
    setOpen1(!open1);
  }
  const handleOpen2 = () => {
    setOpen2(!open2);
  }
  return (
    <>
    <section className='navbar-bg'>

    
      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container">
    <a class="navbar-brand" href="#"><h2>Student Dashboard</h2> </a>
    <button class="navbar-toggler" type="button" 
    data-bs-toggle="collapse" 
    data-bs-target="#navbarSupportedContent" 
    aria-controls="navbarSupportedContent" 
    aria-expanded="false" 
    aria-label="Toggle navigation"
    onClick={()=>setShow(!show)}>
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class={`collapse navbar-collapse ${show ? "show" : ""}` }>
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
      
        <li class="nav-item dropdown drop">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
          
          onClick={handleOpen}>
            Registration
          </a>
          {open ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Student Dashboard</button>
          </li>
          <li className="menu-item">
            <button>Registration</button>
          </li>
          <li className="menu-item">
            <button>Course Withdrew</button>
          </li>
          <li className="menu-item">
            <button>Registration Bill</button>
          </li>
        </ul>
      ) : null}
        </li>

        <li class="nav-item dropdown drop">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
          onClick={handleOpen1}>
            Services
          </a>
          {open1 ? (
        <ul className="menu">
          <li className="menu-item">
            <button>Leave Application</button>
          </li>
          <li className="menu-item">
            <button>Student Services</button>
          </li>
          <li className="menu-item">
            <button>Application Status</button>
          </li>
        </ul>
      ) : null}
        </li>

        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Faculty Evaluation</a>
        </li>

        <li class="nav-item dropdown drop">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
          onClick={handleOpen2}>
            Profile
          </a>
          {open2 ? (
        <ul className="menu">
          <li className="menu-item">
            <button>My Account</button>
          </li>
          <li className="menu-item">
            <button>Account Setting</button>
          </li>
          <li className="menu-item">
            <button>Insurance</button>
          </li>
         
        </ul>
      ) : null}
        </li>

        <li class="nav-item">
          <a type="button" class="nav-link active btn btn-style " aria-current="page" href="#">Sign out</a>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
</section>
    </>
  );
};

export default Navbar;
