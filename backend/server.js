import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// default route
app.get("/",(req, res) => {
    return res.json({
        success: true,
        message: "Home Page"
    })
})

// API routes
app.get("/location-finder",(req, res) => {
  return res.json({
      success: true,
      message: "Location Finder"
  })
})

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
