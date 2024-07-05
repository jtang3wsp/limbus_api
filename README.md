# Limbus Company API

This project is a web app for Limbus Company that displays data in a JSON tree about the 12 sinners' identities and egos. It uses a REST API to fetch data from a MongoDB database and renders it in a React frontend. You can toggle between viewing identities and egos, and filter them for each sinner.

## API Endpoints
| Method | Endpoint | Description |
| - | - | - |
| GET | /api/identities | Get all identities |
| GET | /api/identities/:sinners | Get all identities for multiple sinners via a comma delineated string |
| GET | /api/egos | Get all egos |
| GET | /api/egos/:sinners | Get all egos for multiple sinners via a comma delineated string |
