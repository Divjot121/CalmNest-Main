import React, { useState } from 'react';
import { analyzeMessage } from '../services/api';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState(null);

  const handleAnalyze = async () => {
    const result = await analyzeMessage(message);
    setResponse(result);
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
      />
      <button onClick={handleAnalyze}>Analyze</button>
      {response && (
        <div>
          <h3>Response</h3>
          <p>{response.response}</p>
          <h3>Sentiment</h3>
          <p>{response.sentiment}</p>
        </div>
      )}
    </div>
  );
};

export default Chat;