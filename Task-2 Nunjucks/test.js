nunjucks = require("nunjucks");
nunjucks.configure({ autoescape: true });
let helloWorld = nunjucks.renderString("Hello Bro {{name}}", {
  name: "Mohit Soni",
});
console.log(helloWorld);
