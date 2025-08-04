import React from 'react';

function Home() {
  return (
    <header className="hero text-white d-flex align-items-center justify-content-center text-center">
      <div>
        <h1 className="display-4 fw-bold">Making the World a Better Place</h1>
        <p className="lead">Join our NGO and be a part of the change</p>
        <a href="/volunteer" className="btn btn-light btn-lg mt-3">Become a Volunteer</a>
      </div>
    </header>
  );
}

export default Home;
