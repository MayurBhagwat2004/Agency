import "../css/Navbar.css";
const Navbar = () => {
  const navItems = [
    { id: 1, title: "About" },
    { id: 2, title: "Services" },
    { id: 3, title: "Pricing" },
    { id: 4, title: "Blog" },
  ];

  return (
    <nav className="nav-parent navbar navbar-expand-lg ">
      <div className="container-fluid">
        <div className="left-nav">
          <img src="my-icon.svg" className="navbar-brand" alt="logo"/>
          <a href="#">Agency</a>
        </div>
        <div className="middle-nav collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {
              navItems.map((item)=>(
                <li className="nav-item" key={item.id}>
                  <a href="#" className="nav-link">{item.title}</a>
                </li>
              ))
            }
            <button type="button" className="btn">Contact</button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
