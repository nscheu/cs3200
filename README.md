Inventory

Repo for my CS 3200 Final Project

The project is deployed and live at http://bookshelf-scheuring.rhcloud.com/#/

Graders can checkout the source code at https://github.com/nscheu/cs3200.git
Graders will need to install MongoDB, NodeJS, and run the server.js file (node ./server.js) in the root directory of the project.
Depending on the state of the graders machines they may need to install node modules using npm to get the project to run locally. (when running 'node ./server.js' npm will show an error that a package is missing, when this happens run 'npm install package') 
All necessary node modules are defined in package.json in the root directory.



This is a MEAN stack application that allows a user to track personal inventory of items and locations.

I deviated from the original plan by not implementing a user list in the location schema, rather linking a single user to a location. I also added a user_id attribute to the item schema.


The database API uses Mongoose to connect with MongoDB and the db API is handled in server.js in the root directory. Application Routing is handled in app.js in public/js. Angular views and js view controllers are defined in public/views. The main angular template is defined in index.html in public/.