import "./config";
import "./db";
import app from "./app";

import "./models/Project";
import "./models/User";
import "./models/Blog";

const PORT = process.env.PORT || 4000;

const handleListening = () =>
  console.log(`✅  Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
