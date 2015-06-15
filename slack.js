require('musepm').signon('slack', 'hibot2').then( slack => {
  slack.on('open', f => {
    let channel = slack.getChannelByName('general'); 
    channel.send('Testing abc');
  });
});
