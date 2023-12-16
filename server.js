const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

let workouts = [];

app.get('/api/workouts', (req, res) => {
  res.json(workouts);
});

app.post('/api/workouts', (req, res) => {
  const newWorkout = req.body;
  workouts.push(newWorkout);
  res.json({ message: 'Workout logged successfully', workout: newWorkout });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
