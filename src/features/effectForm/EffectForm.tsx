import React, { useState, useEffect } from 'react';

function EffectForm() {
  const [email, setEmail] = useState('');
  useEffect(() => {
    console.log('email:', email);
  }, [email]);

  const [password, setPassword] = useState('');
  useEffect(() => {
    console.log('password:', password);
  });

  const [myBool, setMyBool] = useState(false);
  useEffect(() => {
    console.log('myBool:', myBool);
  }, [myBool]);

  return (
    <div className="container">
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
      <button onClick={e => setMyBool(!myBool)}>Click</button>
    </div>
  )
}

export default EffectForm;
