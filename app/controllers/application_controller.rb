class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/posts" do
    posts = Post.all
    posts.to_json
  end

  post "/posts" do
    post = Post.create(
      title: params[:title],
      image: params[:image],
      body: params[:body],
      likes: 0,
      maker_id: params[:maker_id]
    )
    post.to_json
  end
  patch "/posts/:id" do
    post = Post.find(params[:id])
    post.update(
      title: params[:title],
      body: params[:body]
    )
    post.to_json
  end
  delete "/posts/:id" do
    post = Post.find(params[:id])
    post.destroy
    post.to_json
  end

  
end
