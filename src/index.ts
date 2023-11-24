import {App} from './app';
// import axios from 'axios';

async function main() {
    const app = new App(4000);
    await app.listen();
    // const resp = await axios.get(`http://localhost:4000/characters`);
}

main();
