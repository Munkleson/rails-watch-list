class ReviewsController < ApplicationController
  def create
    # raise
    bookmark = Bookmark.find(params[:bookmark_id])
    @list = List.find(params[:id])
    review = Review.new(content: params[:content])
    review.bookmark = bookmark
    if review.save
      redirect_to list_path(@list)
    end
  end

  private

  def review_params
    params.require(:review).permit(:content)
  end
end
