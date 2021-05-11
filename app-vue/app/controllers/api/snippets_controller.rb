class Api::SnippetsController < ApplicationController
  before_action :set_snippet, only: %i[ show edit update destroy ]

  def index
    @snippets = Snippet.order('created_at DESC')
  end

  def show
  end

  def create
    @snippet = Snippet.new(snippet_params)
    if @snippet.save
      render :show, status: :created
    else
      render json: @snippet.errors, status: :unprocessable_entity
    end
  end

  def edit
  end

  def update
    if @snippet.update(snippet_params)
      render :show, status: :ok
    else
      render json: @snippet.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @snippet.destroy!
    head :no_content
  end

private

  def set_snippet
    @snippet = Snippet.find(params[:id])
  end

  def snippet_params
    params.permit(:title, :content)
  end

end
