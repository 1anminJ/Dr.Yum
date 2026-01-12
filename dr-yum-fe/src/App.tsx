import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('백엔드와 연결 중...');

  useEffect(() => {
    // 백엔드(localhost:3000)로 요청
    axios.get('http://localhost:3000')
      .then((res) => {
        setMessage(res.data); // 성공 시 "Hello World!"
      })
      .catch((err) => {
        console.error(err);
        setMessage('연결 실패 ㅠㅠ 백엔드 켜져 있나요?');
      });
  }, []);

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>쩝쩝박사 (Dr. Yum) 🍽️</h1>
      <p style={{ fontSize: '24px', fontWeight: 'bold', color: 'blue' }}>
        {message}
      </p>
    </div>
  );
}

export default App;