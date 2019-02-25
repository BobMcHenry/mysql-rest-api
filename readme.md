This is a quick proof of concept for creating a MySQL backed rest api and a simple html page to consume the api contents with some jQuery.

To test this out, you will need the Sakila test database.
Instructions to setup the Sakila database are here:
https://dev.mysql.com/doc/sakila/en/sakila-installation.html

Once the database is set up and running in your development environment, you can start the express app with:
Windows: `SET DEBUG=mysql-rest-api:* & npm start`
Linux & Mac: `DEBUG=mysql-rest-api:* & npm start`

Navigate your browser to following URL's for examples.

Sakila Film listing html page with expandable descriptions.
http://localhost:3000

API endpoint for all films
http://localhost:3000/api/v1/film/all

API endpoint for a single film by id
http://localhost:3000/api/v1/film/<film_id>
IE: http://localhost:3000/api/v1/film/100

API endpoint for all films with specific Rating
http://localhost:3000/api/v1/film/rating/<rating>
(The sample database uses G, PG, PG-13, R, and NC-17)
IE: http://localhost:3000/api/v1/rating/pg-13
