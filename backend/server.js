import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

// default route
app.get("/",(req, res) => {
    return res.json({
        success: true,
        message: "Home Page"
    })
})

app.get("/location-finder",(req, res) => {
  return res.json({
      success: true,
      message: "Location Finder"
  })
})

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}.`);
});
