import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 1. Import axios

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setLoading(true);
    setErrorMsg(null);

    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: abortController.signal 
    })
    .then((response) => {
      setUser(response.data);
      setLoading(false);
    })
    .catch((error) => {
      if (axios.isCancel(error) || error.name === 'CanceledError') {
        return; 
      }
      console.error('Fetch error:', error);
      setErrorMsg('Failed to load user data.');
      setLoading(false);
    });

    return () => {
      abortController.abort();
    };
  }, [userId]);

  if (loading) return <p>Loading user data...</p>;
  if (errorMsg) return <p>{errorMsg}</p>;
  if (!user) return <p>No user found.</p>;

  return (
    <div>
      <h2>User Profile (via Axios)</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
    </div>
  );
}

export default UserProfile;
