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

    // 2. Use axios.get instead of fetch
    axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: abortController.signal // Passes the abort signal to Axios
    })
    .then((response) => {
      // 3. Axios automatically parses JSON, so the data is directly in response.data
      setUser(response.data);
      setLoading(false);
    })
    .catch((error) => {
      // 4. Check if the error was just a manual abort
      if (axios.isCancel(error) || error.name === 'CanceledError') {
        return; 
      }
      console.error('Fetch error:', error);
      setErrorMsg('Failed to load user data.');
      setLoading(false);
    });

    // 5. Cleanup function remains the same
    return () => {
      abortController.abort();
    };
  }, [userId]);

  if (loading) return <p>Loading user data...</p>;
  if (errorMsg) return <p>{errorMsg}</p>;
  if (!user) return <p>No user found.</p>;

  return (
    <div style={{ border: '1px solid #ccc', padding: '15px', marginTop: '10px', borderRadius: '8px' }}>
      <h2>User Profile (via Axios)</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Company:</strong> {user.company?.name}</p>
    </div>
  );
}

export default UserProfile;
