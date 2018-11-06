document.addEventListener("DOMContentLoaded", function() {

    var tweet_form = document.querySelector('#new_tweet');
    var formData = new FormData(tweet_form);


    tweet_form.addEventListener('submit',function(e){

        e.preventDefault();
        var formData = new FormData(tweet_form);
      axios({
            url: tweet_form.getAttribute('action'),
            method: tweet_form.getAttribute('method'),
            data: formData,
            headers:{
                //'Content-Type':'application/html',
                'Accept': 'text/html'
            }
        }).then(function(response){
          console.log(response.data);

        var ulTweets = document.querySelector('.tweets');
        // var liMyTweet = document.createElement('li');
        // liMyTweet.classList = "tweet";
        // var pMyTweet = document.createElement('p');
        // var timeMyTweet = document.createElement('time');
        // pMyTweet = response.data.tweet.message;
        // timeMyTweet = response.data.tweet.created_at.strftime('%b %e, %l:%M %p');
        // liMyTweet.appendChild(pMyTweet);
        // liMyTweet.appendChild(timeMyTweet);
        ulTweets.insertAdjacentHTML('afterbegin', response.data);
        // });

    });

});

});
