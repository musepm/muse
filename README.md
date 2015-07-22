# Muse

Muse simplifies microservices.

# Install

`npm install -g musepm`

# Services

Service sign-up and credential management is auto-magic.
APIs are focused on core functionality to stay clean and 
simple.   Service modules return promises that automatically
connect.

All service methods return promises.

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

## S3

```shell
musepm enable s3
```

```javascript
let cfg = {region:'us-west-2', appid:'myapp02'};
require('musepm').signon('s3',cfg)
.then( function(s3) {
  var params = {CreateBucketConfiguration: {LocationConstraint:'us-west-2'}, Bucket: 'myuniq6455397'};
  s3.createBucket(params, function(e) {
    var params = {LocationConstraint:'us-west-2', Bucket: 'myuniq6455397', Key: 'myKey', Body: 'Hello!'};
   s3.upload(params, function(err, data) {
      if (err) {
        console.log("Error uploading data: ", err);
      } else {
        console.log("Successfully uploaded.");
      }
    });
  });
}).catch(function(e) {
  console.error(e);
});

```
