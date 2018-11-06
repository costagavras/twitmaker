class TweetsController < ApplicationController
  def index
    @tweets = Tweet.all.order(created_at: :desc)
    @tweet = Tweet.new
  end

  def create
    @tweet = Tweet.new(tweet_params)
    @tweets = Tweet.all.order(created_at: :desc)
    if @tweet.save
        if request.xhr?
          puts @tweet.inspect
            respond_to do |format|
              puts "response is xhr"
              format.html do
                puts "response formated as html"
                render partial: 'tweets', locals: {tweet: @tweet}
              end
              puts "response formated as Json"
              format.json {render json: @tweet}
            end
        else

              redirect_to tweets_path
        end
    else
      render :index
    end
  end

  def destroy
  end

  private

  def tweet_params
    params.require(:tweet).permit(:message)
  end
end
