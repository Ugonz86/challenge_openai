# GH-Pages deployed web app

### [Front End Developer Intern Challenge by Uriel Gonzalez](https://ugonz86.github.io/challenge_openai).

Notes:
- Current error: 401, api key security related
- Locally the projects works perfectly, but when the project is deployed, the api key seems compromised and Open AI rotates the API Key.
- Best practices for api security have been applied (env variables,.env, gitignore, etc).
- Fix in progress

Clone and test project
- In command line run git clone https://github.com/Ugonz86/challenge_openai.git 
- Run cd challenge_openai
- Open in editor
- Run npm install
- Create .env file at project root and write REACT_APP_OPENAI_API_KEY= then add your API key. (Do not add commas nor semi-colon)
- Run npm run start