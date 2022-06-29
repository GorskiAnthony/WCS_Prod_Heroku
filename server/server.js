const app = require("./src/app");
const port = process.env.PORT || 5500;

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`Server is running on http://localhost:${port}`);
  }
});
