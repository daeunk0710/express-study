module.exports = {
  html: function (title, list, body, control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>WEB2 - ${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/">WEB3</a></h1>
      ${list}
      ${control}
      ${body}
    </body>
    </html>
    `;
  },
  list: function (filelist){
    var list = '<ol>';

    var i = 0;
    while (i < filelist.length) {
      list = list + `<li><a
      href="/page/${filelist[i]}">${filelist[i]}</a></li>`;
      //console.log(list);
      i = i + 1;
    }

    list = list + '</ol>';
    return list;
  }
}
