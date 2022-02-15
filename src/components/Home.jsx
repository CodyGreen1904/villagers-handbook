import React from "react";

function Welcome() {
  function handleClick(path) {
    history.push(path);
  }

  return (
    <div className="welcome">
      {/*CENTERED PAGE ENTRY*/}
      <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button class="btn btn-primary" onClick={() => handleClick("search")}>
          Get Started
        </button>
      </div>
      {/*END PAGE ENTRY*/}
    </div>
  );
}

export default Welcome;
