import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LineLogin } from 'reactjs-line-login';
import 'reactjs-line-login/dist/index.css';

const PaLogin = () => {
  const [payload, setPayload] = useState(null);
  const [idToken, setIdToken] = useState(null);
  const history = useHistory()
  useEffect(() => {
    if (payload) {
      setLineLogin("ok") 
    }
    console.log(payload, 'payload=====================inUseEffect')
    console.log((!payload), 'true or false')
  }, [payload])
  
  console.log(payload, 'payload=====================')
  console.log(idToken, 'idToken=====================')
  return (
    <div>
      <LineLogin
        clientID=''
        clientSecret=''
        state=''
        redirectURI='http://localhost:3000/'
        scope=''
        setPayload={setPayload}
        setIdToken={setIdToken}
      />
    </div>
  );
};

export default PaLogin;
