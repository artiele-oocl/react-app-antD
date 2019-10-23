import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import { Button } from 'antd';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="dashed">Click me</Button>
        <Button type="primary" loading>
          Loading
        </Button>
      </header>
    </div>
  );
}

export default App;
