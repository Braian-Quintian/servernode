import { createServer } from "http";

const appHttp = createServer((req, res) => {
   
    res.end("Hola soy el servidor");
});



const config = {
    hostname :  "127.127.127.127",
    port : "5015"
}

appHttp.listen(config, () => {
    console.log(`http://${config.hostname}:${config.port}/`);
})