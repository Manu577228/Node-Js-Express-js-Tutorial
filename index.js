// var x = 10;
// var y = 20;
// var z = 30;
// console.log(x + y + z);
// const app = require('./app')
// console.log(app.z());


// const arr = [2,3,4,1,7,6,8,3];
// const result = arr.filter((item) => {
//       return (item >= 3);
// })
// console.log(result)


// const fs= require ('fs');
// console.log("Hi");
// fs.writeFileSync("hello.txt","code step by step")


// const fs= require ('fs').writeFileSync;
// fs("hello1.txt","welcome to the coding class of node.js")


// console.log(__dirname);
// console.log(__filename);


// const http = require('http');
// http.createServer((req,resp)=>{
// resp.write("<h1>Hello this is manu Bharadwaj</h1>");
// resp.end();
// }).listen(4500);


// const colors = require('colors');
// console.log("Hello".green)


// console.log(100 + 20);
// console.log("Hi I am Manu Bharadwaj")


// const http = require('http');
// const data = require('./data');
// http.createServer((req, resp)=>{
// resp.writeHead(200,{'Content-Type':'application\json'});
// resp.write(JSON.stringify(data));
// resp.end();
// }).listen(4500);


// const fs = require('fs')
// const input = process.argv;
// if(input[2]=='add'){
//     fs.writeFileSync(input[3], input[4])
// } else if(input[2] == 'remove'){
//     fs.unlinkSync(input[3]);
// }else {
//     console.log("Invalid Input");
// }


// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'files');
// for(i=1;i<=5;i++){
//     fs.writeFileSync(dirPath+"/datafile"+i+".txt", "Hi manu here just came by to say that this is just a sample data text");
// }
// fs.readdir(dirPath,(err, files)=>{
// files.forEach((item)=>{
// console.log("File Name is:",item)
// })
// })


// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'crud');
// const filePath = `${dirPath}/apple.txt`;
// fs.writeFileSync(filePath, "This is a sample text inside apple.txt file")   // create operation in CRUD (Creating a file).
// fs.readFile(filePath, 'utf8', (err, item) => {      // Read operation in CRUD (Reading inside a file)
//     console.log(item);
// })
// fs.appendFile(filePath, 'and the file name is apple.txt as we know and its a sample text', (err) => {  //Update operation in CRUD (Updating a file)
//     if (!err) {
//         console.log("file is updated")
//     }
// })
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{            // Rename Opearation in a CRUD(Renaming a file)
//     if (!err) {
//         console.log("file is updated")               
//     }
// })
// fs.unlinkSync(`${dirPath}/fruit.txt`);  //Delete Operation in a CRUD(Deleting a file) . This deletes the updated fruit.txt file inside crud folder.


// console.log("start execution"); 
// setTimeout(()=>{
// console.log("logic execution");             // Node js is Asynchronous
// },2000)
// console.log("complete execution");


// const express = require('express');
// const app = express();
// app.get('', (req, resp) => {
//     resp.send(`
//     <h1>This is homepage</h1>
//      <a href='/about'>Go to about page </a>
//     `) 
// })                                                                                     // Render HTML & JSON
// app.get('/about', (req, resp) => {
//     resp.send(`
//     <input type="text" placeholder="username" value="${req.query.name}" />
//     <button>Click Me</button>
//     <a href='/'>Go to about page </a>
//     `)
// })
// app.get('/help', (req, resp) => {
//     resp.send([
//         {
//             name: 'Manu',
//             email: 'bnmanubharadwaj@gmail.com'
//         },
//         {
//             name: 'Gowri',
//             email: 'bngowribharadwaj@gmail.com'
//         },
//     ])
// })
// app.listen(4200);


// const express = require('express');
// const path = require('path')
// const app = express();
// const publicPath = path.join(__dirname, 'public')
// app.set("view engine","ejs");                               // Template Engine and ejs
// app.use(express.static(publicPath));                       //  creating 404 page and removing extensions in a page 
// app.get('', (_, resp) => {
//     resp.sendFile(`${publicPath}/index.html`);
// })
// app.get('/about', (_, resp) => {
//     resp.sendFile(`${publicPath}/about.html`);
// })
// app.get('/help', (_, resp) => {
//     resp.sendFile(`${publicPath}/help.html`);
// })
// app.get('/profile', (_, resp) => {
//     const user = {
//         name: 'Manu Bharadwaj',
//         email: 'bnmanubhardwaj@gmail.com',
//         contact: '9972727272',
//         country: 'India',
//         skills: ['Javascript','React-js','React-Native','Node-Js']
//     }
//     resp.render('profile',{user});
// })
// app.get('*', (_, resp) => {
//     resp.sendFile(`${publicPath}/nopage.html`);
// })
// app.listen(4200);


// const express = require('express');
// const app = express();
// const reqFilter = (req, resp, next) => {
//     if (!req.query.age) {
//         resp.send("Please provide your age")
//     }
//     else if (req.query.age<18) {
//         resp.send("You are under aged")
//     }
//     else {
//         next();                                                  // Middleware Explaination
//     }
// }
// app.use(reqFilter);
// app.get('/', (res, resp) => {
//     resp.send('Welcome to Home page')
// });
// app.get('/users', (res, resp) => {                          
//     resp.send('Welcome to Users page')
// });
// app.listen(4200);


// const express = require('express');
// const reqFilter= require('./middleware');
// const app = express();
// const route= express.Router();
// route.use(reqFilter)                                                               
// app.get('/', (res, resp) => {
//     resp.send('Welcome to Home page')
// });                                                            //Route Level Middleware
// app.get('/users', (res, resp) => {
//     resp.send('Welcome to Users page')
// });
// route.get('/about', (res, resp) => {
//     resp.send('Welcome to About page')
// });
// route.get('/contact', (res, resp) => {
//     resp.send('Welcome to contact page')
// });
// app.use('/',route);
// app.listen(4200);