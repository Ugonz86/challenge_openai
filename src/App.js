import react, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState();

  return (
    <div className="App">
      <h1>Fun with AI</h1>
      <Paper className="paper">
        <TextField 
          onSubmit={onSubmit}
          value={input}
          onChange={(e) => setInput(e.target.value)}
        id="outlined-basic"
        multiline
        fullWidth
        label="Enter Prompt"
        variant="outlined" />
      <Button type="subit" className="button" variant="contained" color="primary">Contained</Button>
      </Paper>
      
      <Paper className="paper2">
        <h2>Responses</h2>
        <Card className="card">
          <p>{input}</p>
          <p>{result}</p>
        </Card>
      </Paper>
    </div>
  );
}

export default App;
