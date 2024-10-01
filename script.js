document.getElementById('addButton').addEventListener('click', function() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create "Mark as Done" button
        const doneButton = document.createElement('button');
        doneButton.textContent = 'Done';
        doneButton.className = 'done';
        doneButton.addEventListener('click', function(event) {
            event.stopPropagation();
            li.classList.toggle('completed'); // Toggle completed class
        });

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', function(event) {
            event.stopPropagation();
            if (confirm('Are you sure you want to delete this task?')) {
                li.remove();
            }
        });

        // Append buttons to list item
        li.appendChild(doneButton);
        li.appendChild(deleteButton);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }
});

// Fetch weather data
document.getElementById('fetchWeatherButton').addEventListener('click', function() {
    const cityInput = document.getElementById('cityInput');
    const cityName = cityInput.value.trim();
    const weatherResults = document.getElementById('weatherResults');
    weatherResults.innerHTML = ''; // Clear previous results

    if (cityName) {
        const url = `https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true`; // Example for Tokyo

        fetch(url)
            .then(response => response.json())
            .then(data => {
                const weatherInfo = `
                    <h3>Current Weather</h3>
                    <p>Temperature: ${data.current_weather.temperature} °C</p>
                    <p>Weather: ${data.current_weather.weathercode}</p>
                `;
                weatherResults.innerHTML = weatherInfo;
            })
            .catch(error => {
                console.error('Error:', error);
                weatherResults.innerHTML = 'Error fetching weather data.';
            });

        cityInput.value = ''; // Clear input field
    }
});
