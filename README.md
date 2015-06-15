# Muse

Muse simplifies microservices.

# Install

`npm install -g runvnc/muse`

# Services

Service sign-up and credential management is auto-magic.
APIs are focused on core functionality to stay clean and 
simple.   Service modules return promises that automatically
connect.

All service methods return promises.

# Testing/Mocks

All services implement an identical mock API which is enabled
by calling `require('muse').mockAll()`;

# Adding Services

To add a microservice to your project simply run
`muse enable {service_name}`. This command will:

* automatically install the corresponding modules and add 
them to package.json.

* walk them through the sign-up for that service.

## Slack Realtime

```shell
musepm enable slack
```

```javascript
                                                                  
require('musepm').signon('slack', 'testbot03')
.then( function(slack) {   
  slack.on('open', function() {
    let channel = slack.getChannelByName('general');
    channel.send('Testing abc');
  });                                                             
});                                                               
```

# Architecture

## Microservice modules

### Naming convention

* Mock classes for testing are in `muse-{service}/lib/mock.js`, 
e.g. `muse-slack/lib/mock.js` for the Slack mock implementation.  (Might use Sinon to enhance mock objects returned to user.)

* Each mock and back end implements a class with an identical 
set of public methods. 

* The `muse-{service}` module checks whether mocking is enabled
and if so provides and initializes `muse-{service}/lib/mock.js` 
or if not mocking then `muse-{service}/lib/real.js`. 

