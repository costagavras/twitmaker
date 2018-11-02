document.addEventListener("DOMContentLoaded", function() {

    var tweet_form = document.querySelector('#new_tweet');
    var formData = new FormData(tweet_form);


    form.addEventListener('submit',function(e){

        e.preventDefault();
        var formData = new FormData(form);
        var send_tweet = axios({
            url: form.getAttribute('action') ,
            method: form.getAttribute('method'),
            data: formData,
        })

});
