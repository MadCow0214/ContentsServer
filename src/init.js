import "@babel/polyfill";
import app from "./app";

const PORT = process.env.PORT || 4000;

const handleListening = () => {
  console.log(`Listen on port: http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
