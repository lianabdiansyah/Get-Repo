import React,{useState} from 'react'
import Repos from '../Repos';
import axios from "axios";
import './index.css'
import Loading from '../Loading';

function ButtonRepo() {

  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [Ada, setAda] = useState(false);
    
  const handleGetRepository = () => {

    setLoading(true)

    setTimeout(async() => {
      const { data } = await axios(
        "https://api.github.com/users/lianabdiansyah/repos"
      );
      setRepos(data);
      // console.log(data);
      setLoading(false);
      setAda(true)
      
    }, 2000);
  };

    
    return (
      <div>
        <button className="btnGet" onClick={handleGetRepository}>Get Repository</button>
        {loading ? (
          <Loading />
        ) : (
            <>
              <h1>Daftar Repository</h1>
            {Ada? (
              <Repos dataRepos={repos} />
            ) : (
              <p>Data masih kosong</p>
            )}
          </>
        )}
      </div>
    );
}

export default ButtonRepo;
