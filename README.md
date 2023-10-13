# Angular MapQuest Directions App

This Angular application provides a simple interface to fetch and display directions from one location to another using the MapQuest Directions API.

## Features

- Display turn-by-turn directions, total distance, and total time for a given route.
- Convert distances to meters for better accuracy.
- View raw data for each step of the route.
- Automatic updates when changing the "From" or "To" locations.

## Getting Started

Follow these steps to run the application locally:

1. Clone this repository to your local machine:

```
git clone https://github.com/your-username/angular-mapquest-directions-app.git
```

2. Change to the project directory:

```
cd angular-mapquest-directions-app
```

3. Install the project dependencies:

```
npm install
```

4. Start the development server:

```
ng serve
```

5. Open your web browser and visit http://localhost:4200 to use the application.

## Configuration

To configure the MapQuest API integration, you will need to obtain an API key from MapQuest. Once you have the API key, replace the placeholder in the mapquest.service.ts file with your actual API key.

```
// src/app/mapquest.service.ts
private apiKey = 'YOUR_MAPQUEST_API_KEY_HERE';
```

## Preview

![image](https://github.com/dimicodes/MapQuest-Angular-Project/assets/45632694/b0ceadc3-7659-4918-a65c-48d81a5b8f61)
