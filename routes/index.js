export default function routes(app, addon) {
  // Redirect root path to /atlassian-connect.json,
  // which will be served by atlassian-connect-express.
  app.get("/", (req, res) => {
    res.redirect("/atlassian-connect.json");
  });

  // This is an example route used by "generalPages" module (see atlassian-connect.json).
  // Verify that the incoming request is authenticated with Atlassian Connect.
  app.get("/hello-world", (req, res) => {
    // Rendering a template is easy; the render method takes two params:
    // name of template and a json object to pass the context in.
    res.render("hello-world", {
      title: "Atlassian Connect",
      //issueId: req.query['issueId']
    });
  });

  // Add additional route handlers here...

  // Render the macro by returning html generated from the hello-world template.
  // The hello-world template is defined in /views/hello-world.hbs.
  app.get("/macro", addon.authenticate(), function (req, res) {
    /* res.render("hello-world", {
      title: "Atlassian Connect",
    }); */
    res.send("<h1>Hello world from my first Macro!</h1>");
  });

  app.get("/facets-overview", addon.authenticate(), function (req, res) {
    res.render("facets-overview", {
      title: "Facets Overview",
    });
  });

  app.get("/facets-dive", addon.authenticate(), function (req, res) {
    res.render("facets-dive", {
      title: "Facets Deep Dive",
    });
  });

  // load any additional files you have in routes and apply those to the app
  /* {
    var fs = require("fs");
    var path = require("path");
    var files = fs.readdirSync("routes");
    for (var index in files) {
      var file = files[index];
      if (file === "index.js") continue;
      // skip non-javascript files
      if (path.extname(file) != ".js") continue;

      var routes = require("./" + path.basename(file));

      if (typeof routes === "function") {
        routes(app, addon);
      }
    }
  } */
}
