import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import { Configuration, OpenAIApi } from "openai";
import './App.css';

function App() {
  const [heading, setHeading] = useState("The response from the AI will be shown here...")
  const [response, setResponse] = useState("... Await response");
  const [responses, setResponses] = useState([]);

  async function onFormSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target),
      formDataObj = Object.fromEntries(formData.entries());

    const configuration = new Configuration({
      apiKey: process.env.REACT_APP_OPENAI_API_KEY,
      
    });

    const openai = new OpenAIApi(configuration);
    openai.createCompletion("text-curie-001", {
      prompt: `Write a description for ${formDataObj.query}.`,
      temperature: 1,
      max_tokens: 150,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
      .then((response) => {
        setHeading(`AI Product Description Suggestions for: ${formDataObj.query}`)
        setResponse(`${response.data.choices[0].text}`);
      })
    
    setHeading(`AI Product Description Suggestions for: ${formDataObj.query}`);
    setResponse(`The Response from OpenAI API will be shown here...`);
    setResponses(responses => [{ heading, response }, ...responses]);
  };

  useEffect(() => {
    
  }, [responses]);

  return (
    <div className="App">
      <h1>Fun with AI</h1>
      <h3>Type a word or phrase and see what this program can do!</h3>
      <Paper className="paper">
      <form onSubmit={onFormSubmit} >
          <TextField 
          id="outlined-basic"
          multiline
          fullWidth
          name="query"
          label="Enter Prompt"
          variant="outlined"
          onChange={(e) => setHeading(e.target.value)}
          />
          <Button
            type="submit"
            className="button"
            variant="contained"
            color="primary">
            Submit
          </Button>
      </form>
      </Paper>
    
      <Paper className="paper2">
        <h2>Responses</h2>
        <Card  className="card">
          <p>{heading}</p>
          <p>{response}</p>
        </Card>

        {responses.map((res) => {
          return (
            <Card className="card" key={res}>
              <p>{res.heading}</p>
              <p>{res.response}</p>
            </Card>
            )
          })
        }
      </Paper>
    </div>
  );
}

export default App;


