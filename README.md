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

# Adding Services

To add a microservice to your project simply run
`muse enable {service_name}`. This command will:

* automatically install the corresponding modules and add 
them to package.json.

* copy the credentials out of the local cache if they are 
available

* if not cached, try to retrieve credentials from the registry server

* if the registry doesn't yet have credentials for that service
then it will automatically sign the user up or walk them
through the sign-up for that service.  (Or perhaps pull from a 
set of pre-configured accounts for each service.)


## File (S3/Rackspace)

```shell
muse enable file
```

```javascript
require('muse-s3')('my-bucket')
.then(function(s3) {
  var file = fs.createReadStream('file.bin');
  file.pipe(s3.upload('key-name'));
});
```

## Message Queue (RabbitMQ/CloudAMQP)

```shell
muse enable msgq`
```

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

```shell
muse enable text
```

```javascript
require('muse-text')('+16515556677')
.then(function(text) {
  text.send('+14506667788', "Welcome to SERVICE.");
});
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

* The `muse-{service}` module checks whether mocking is enabled
and if so provides and initializes `muse-mock-{service}` 
or if not mocking then `muse-{service}-{default_provider}`. 

## Registry/Vault

This is a server that can be private self-hosted or perhaps
a PaaS offering.
The `keytar` node module may be useful for implementing this.

Maybe a command like `muse login` or `muse setaccount` can specify
the account in the registry to pull credentials from which can
be stored in `muse.json` or `.muserc.json`.

## Sign-up Plugins

Internal microservices or third party API providers can provide
endpoints for the registry/tool to easily create accounts and
retrieve credentials.
