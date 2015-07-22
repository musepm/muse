var l = console.log
let cfg = {region:'us-west-2', appid:'myapp02'};
require('musepm').signon('s3',cfg)
.then( function(s3) {
  l(11)
  var params = {CreateBucketConfiguration: {LocationConstraint:'us-west-2'}, Bucket: 'myuniq6455397'};
  s3.createBucket(params, function(e) {
    l(e)
    var params = {LocationConstraint:'us-west-2', Bucket: 'myuniq6455397', Key: 'myKey', Body: 'Hello!'};
    l(12)
   s3.upload(params, function(err, data) {
      l(13)
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
