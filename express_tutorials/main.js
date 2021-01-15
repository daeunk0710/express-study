var express = require('express')
var app = express()

var fs = require('fs');
var path = require('path');
var sanitizeHtml = require('sanitize-html');
var qs = require('querystring');
var bodyParser = require('body-parser');
var compression = require('compression');

var template = require('./lib/template.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(compression());

// route, routing
// app.get('/', (req, res) => {res.send('Hello World!')})

// route page
app.get('/', function(request, response) {
  fs.readdir('./data', function(error, filelist){
    console.log(filelist);

    var title = 'Welcome';
    var description = 'Hello, Node.js';
    var list = template.list(filelist);
    var html = template.html(title, list,
      `<h2>${title}</h2>${description}`,
      `<a href="/create">create</a>`);

    response.send(html);
  });
});


// id page
app.get('/page/:pageId', function(request, response) {
  fs.readdir('./data', function(error, filelist){
    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`,'utf8',function(err, description){
      var title = request.params.pageId;
      var sanitizedTitle = sanitizeHtml(title);
      var sanitizedDescription = sanitizeHtml(description);

      var list = template.list(filelist);
      var html = template.html(title, list,
        `<h2>${sanitizedTitle}</h2>${sanitizedDescription}`,
        `<a href="/create">create</a>
         <a href="/update/${sanitizedTitle}">update</a>
         <form action="/delete_process" method="post">
            <input type="hidden" name="id" value="${sanitizedTitle}">
            <input type="submit" value="delete">
         </form>`);
      response.send(html);
    });
  });
});


// create page
app.get('/create', function(request, response){
  fs.readdir('./data', function(error, filelist){
    console.log(filelist);

    var title = 'WEB - create';
    var description = 'Create New Page';
    var list = template.list(filelist);
    var html = template.html(title, list, description, `
      <form action="http://localhost:3000/create_process" method="post">
        <p><input type = "text" name="title" placeholder="title"></p>

        <p>
          <textarea name="description" placeholder="description"></textarea>
        </p>

        <p>
          <input type="submit">
        </p>
      </form>
      `);
    response.send(html);
  });
});


// create_process
app.post('/create_process', function(request, response){
  var post = request.body;
  var title = post.title;
  var description = post.description;
  fs.writeFile(`data/${title}`, description, 'utf8', function(err){
      response.redirect(`/page/${title}`);
  });
});


// update
app.get('/update/:pageId', function(request, response){
  fs.readdir('./data', function(error, filelist){

    var filteredId = path.parse(request.params.pageId).base;
    fs.readFile(`data/${filteredId}`,'utf8',function(err, description){
      var title = request.params.pageId;
      var list = template.list(filelist);
      var html = template.html(title, list, `
        <form action="http://localhost:3000/update_process" method="post">
          <input type="hidden" name="id" value=${title}>
          <p><input type = "text" name="title" placeholder="title" value=${title}></p>

          <p>
            <textarea name="description" placeholder="description">${description}</textarea>
          </p>

          <p>
            <input type="submit">
          </p>
        </form>
        `,
        `<a href="/create">create</a> <a href="/update/${title}">update</a>`);
      response.send(html);
    });
  });
});


// update_process
app.post('/update_process', function(request, response){
  var post = request.body;
  var id = post.id;
  var title = post.title;
  var description = post.description;

  fs.rename(`data/${id}`, `data/${title}`, function(error){
    fs.writeFile(`data/${title}`, description, 'utf8', function(err){
      response.redirect(`/page/${title}`);
    });
  });
});


// delete_process
app.post('/delete_process', function(request, response){
  var post = request.body
  var id = post.id;
  var filteredId = path.parse(id).base;
  fs.unlink(`data/${filteredId}`, function(error){
    response.redirect('/');
  });
});


// listen
app.listen(3000, function() {
  console.log(`Example app listening at http://localhost:3000`)
});
