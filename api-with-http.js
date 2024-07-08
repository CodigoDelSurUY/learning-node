const http = require('http');




const server = http.createServer((req, res) => {
    console.log("Received a request",req.url)

    let response = null
    switch(req.url){
        case '/albums' : 
            response = ALBUMS
            break
        case '/artists' : 
            response = ARTISTS
            break
        default :
            response = "not found"

    }



    res.statusCode = 200;
    res.setHeader('content-Type', 'Application/json');
    res.end(JSON.stringify(response))


})

const hostname = '127.0.0.1';
const port = 3000;

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });




const ALBUMS = [{
    title : "The number of the beast",
    artist : 1,
    year : 1982,
    id : 1001
},
{
    title : "Black album",
    artist : 2,
    year : 1988,
    id : 1002
}]

const ARTISTS = [{
    name : "Iron Maiden",
    isBand : true,
    country : "England",
    id : 1
},
{
    name : "Metallica",
    isBand : true,
    country : "USA",
    id : 2 
}]