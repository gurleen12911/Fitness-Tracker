document.addEventListener('DOMContentLoaded', () => {
    const workoutForm = document.getElementById('workoutForm');
    const workoutsList = document.getElementById('workoutsList');
  
    workoutForm.addEventListener('submit', (event) => {
      event.preventDefault();
  
      const exerciseInput = document.getElementById('exercise');
      const durationInput = document.getElementById('duration');
  
      const newWorkout = {
        exercise: exerciseInput.value,
        duration: parseInt(durationInput.value),
      };
  
      // Send workout data to the server
      fetch('/api/workouts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newWorkout),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        // Display the logged workout
        displayWorkout(data.workout);
      });
  
      // Clear the form inputs
      exerciseInput.value = '';
      durationInput.value = '';
    });
  
    // Fetch and display existing workouts on page load
    fetch('/api/workouts')
      .then(response => response.json())
      .then(data => {
        data.forEach(workout => displayWorkout(workout));
      });
  
    function displayWorkout(workout) {
      const workoutItem = document.createElement('div');
      workoutItem.innerHTML = `<strong>${workout.exercise}</strong> - ${workout.duration} minutes`;
      workoutsList.appendChild(workoutItem);
    }
  });
  