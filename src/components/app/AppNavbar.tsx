import React from 'react';

function AppNavbar() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="">AWF</a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="">Home</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">Ratio</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="">Chart</a>
      </li>
    </ul>
  </div>
</nav>
  );
}

export default AppNavbar;
