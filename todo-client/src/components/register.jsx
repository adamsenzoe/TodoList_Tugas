import React, { useContext } from "react";
import ".././index.css";
import { GlobalContext } from "../context/GlobalContext.jsx";
import { Link } from "react-router-dom";
const Register = () => {
  const { eventHandlers } = useContext(GlobalContext);
  const { handleInput, handleRegister } = eventHandlers;
  return (
    <div className="container-fluid lg:w-full mx-auto font-mono">
      <div className="flex flex-col text-center mt-4 mb-2 mx-2 border lg:rounded-md lg:mx-96 ">
        <h1 className="mt-10 mb-4 font-bold text-2xl">Halaman Daftar</h1>
        <form
          action=""
          className="flex flex-col gap-2 my-2 text-left"
          onSubmit={handleRegister}
        >
          <div className="flex flex-col w-[80%] justify-center gap-4 mx-auto mb-2 mt-4 px-4 py-2">
            <label htmlFor="Name">Fullname: </label>
            <input
              className="bg-gray-50 rounded-md border-gray-300 px-4 py-2"
              type="text"
              name="name"
              id="name"
              onChange={handleInput}
              placeholder="Masukan nama anda"
            />
          </div>

          <div className="flex flex-col w-[80%] justify-center gap-4 mx-auto mb-2 mt-4 px-4 py-2">
            <label htmlFor="Name">Username: </label>
            <input
              className="bg-gray-50 rounded-md border-gray-300 px-4 py-2"
              type="text"
              name="username"
              id="username"
              onChange={handleInput}
              placeholder="contohusername123"
            />
          </div>

          <div className="flex flex-col w-[80%] justify-center gap-4 mx-auto mb-2 mt-4 px-4 py-2">
            <label htmlFor="Name">Email: </label>
            <input
              className="bg-gray-50 rounded-md border-gray-300 px-4 py-2"
              type="email"
              name="email"
              id="email"
              onChange={handleInput}
              placeholder="contohemail@gmail.com"
            />
          </div>

          <div className="flex flex-col w-[80%] justify-center gap-4 mx-auto mb-2 px-4 py-2">
            <label htmlFor="Name">Password: </label>
            <input
              className="bg-gray-50 rounded-md border-gray-300 px-4 py-2"
              type="password"
              name="password"
              id="password"
              onChange={handleInput}
              placeholder="Masukan password rahasia"
            />
          </div>

          <div className="flex flex-col w-[80%] justify-center gap-4 mx-auto  px-4 py-2">
            <button className="bg-blue-800 text-white border rounded-md px-4 py-2">
              Daftar Akun
            </button>
          </div>
        </form>

        <div className="flex flex-col lg:flex-row justify-between gap-4 items-center w-[80%] mx-auto mb-4 lg:px-4 lg:py-2">
          <p>Sudah punya akun ? </p>
          <Link to="/" className="text-blue-500">
            Masuk disini
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
