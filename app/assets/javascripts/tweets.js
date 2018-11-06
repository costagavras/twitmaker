// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
document.addEventListener("DOMContentLoaded", function() {

    var tweet_form = document.querySelector('#new_tweet');
    var formData = new FormData(tweet_form);


    tweet_form.addEventListener('submit',function(e){

        e.preventDefault();
        var formData = new FormData(tweet_form);
      axios({
            url: tweet_form.getAttribute('action'),
            method: tweet_form.getAttribute('method'),
            data: formData
            // when headers are commented, default behaviour is json output
            // headers:{
                // 'Content-Type':'application/json',
                // 'Accept': 'text/html'
            // }
        }).then(function(response){
          console.log(response.data);

        var ulTweets = document.querySelector('.tweets');
        var liMyTweet = document.createElement('li');
        liMyTweet.classList = "tweet";
        var pMyTweet = document.createElement('p');
        var timeMyTweet = document.createElement('time');
        var myTweetMessage = response.data.message;
        var myTweetCreatedAt = response.data.created_at;
        pMyTweet.append(myTweetMessage);
        timeMyTweet.append(myTweetCreatedAt);
        liMyTweet.append(pMyTweet);
        liMyTweet.append(timeMyTweet);
        ulTweets.prepend(liMyTweet);
        // ulTweets.insertAdjacentHTML('afterbegin', response.data);
        });

    });

});
