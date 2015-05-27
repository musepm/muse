# Muse

Muse simplifies microservices.

# Install

`npm install -g muse`

# Services

Service sign-up and credential management is auto-magic.
APIs are focused on core functionality to stay clean and 
simple.   Service modules return promises that automatically
connect.

# Testing/Mocks

All services implement an identical mock API which is enabled
by calling `require('muse').mockAll()`;

## File (S3/Rackspace)

```javascript
require('muse-s3')('my-bucket')
.then(function(s3) {
  var file = fs.createReadStream('file.bin');

  var upload = s3.upload('key-name');

  file.pipe(upload);
});
```

## Message Queue (RabbitMQ/CloudAMQP)

```javascript
require('muse-msgq')('my-queue')
.then(function(msgQ) {
  // automatically binds to all (#)
  msgQ.subscribe(function(msg) {
    console.log(msg);
    msg.acknowledge(); 
  }); 

  msgQ.publish({data: 'test'});
});
```

## Auth (Auth0)


## Text messaging/SMS (Twilio)

```javascript
require('muse-text')('+16515556677')
.then(function(text) {
  text.send('+14506667788', "Welcome to SERVICE.");
});
```
```

## Logging/Monitoring (New Reliq)
 
# Architecture

## Microservice modules

### Naming convention

* Mock classes for testing are in `muse-mock-{service}`, 
e.g. `muse-mock-text` for the text/SMS mock implementation.

* Each mock and back end implements a class with an identical 
set of public methods.  Back end modules are named 
`muse-{service}-{provider}` e.g. `muse-text-twilio` 

* The `muse-{service}` module  

## Registry/Vault

The `keytar` node module may be useful for implementing this.

## Sign-up Plugins


