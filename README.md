<h1>GOGOEnergy Admin Site</h1>

To run the app...

Get your API token from dummyapi.io

Run...

'''bash
docker build -t gogoenergy-admin:latest .
docker run -p 8000:8000 -e DUMMY_API_TOKEN=<your-dummy-api-token> -d gogoenergy-admin:latest
'''

Go to localhost:8000 in your browser to view the app