'use strict';

/*
 * Defining the Package
 */
var Module = require('meanio').Module;

var Thesis = new Module('thesis');

/*
 * All MEAN packages require registration
 * Dependency injection is used to define required modules
 */
Thesis.register(function(app, auth, database) {

  //We enable routing. By default the Package Object is passed to the routes
  Thesis.routes(app, auth, database);

  //We are adding a link to the main menu for all authenticated users
  Thesis.menus.add({
    title: 'thesis example page',
    link: 'thesis example page',
    roles: ['authenticated'],
    menu: 'main'
  });
  
  Thesis.aggregateAsset('css', 'thesis.css');

  /**
    //Uncomment to use. Requires meanio@0.3.7 or above
    // Save settings with callback
    // Use this for saving data from administration pages
    Thesis.settings({
        'someSetting': 'some value'
    }, function(err, settings) {
        //you now have the settings object
    });

    // Another save settings example this time with no callback
    // This writes over the last settings.
    Thesis.settings({
        'anotherSettings': 'some value'
    });

    // Get settings. Retrieves latest saved settigns
    Thesis.settings(function(err, settings) {
        //you now have the settings object
    });
    */

  return Thesis;
});
