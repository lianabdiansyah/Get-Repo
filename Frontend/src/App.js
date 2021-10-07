import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import FormLogin from "./components/FormLogin/";
import GithubLogin from "./components/GithubLogin/";
import ButtonRepo from "./components/ButtonRepo";

function App() {
  const [user, setUser] = useState();
  
  useEffect(() => {

    (async function () {
      const usr = await axios
        .get(`http://localhost:4000/api/me`, {
          withCredentials: true,
        })
        .then((res) => res.data);
      https: setUser(usr);
    })();

  }, []);

  return (
    <div className="App">
      {!user ? (
        <>
          <FormLogin />
          <GithubLogin />
        </>
      ) : (
        <>
          <div>
            <h2 className="juduluser">
              Halo, welcome <span className="namauser">{user.login}</span>
              <img
                src="https://avatars.githubusercontent.com/u/91248533?v=4"
                alt="gambar"
              />
            </h2>
          </div>
          <ButtonRepo />
        </>
      )}
    </div>
  );
}

export default App;
