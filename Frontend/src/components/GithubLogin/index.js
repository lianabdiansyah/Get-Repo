import React from 'react'
import './index.css'
import githublogo from './github.png'

function GithubLogin() {

  const GITHUB_CLIENT_ID = "b6723489f088e34687be";
  const gitHubRedirectURL = "http://localhost:4000/api/auth/github";
  const path = "/";


  return (
    <>
    
      <div className="btn-git">
        <img src={githublogo} alt="githublogo" />
        <a href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`} >
         Login With Github
        </a>
      </div>
      </>
    );
}

export default GithubLogin
