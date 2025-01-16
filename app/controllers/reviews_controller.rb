class ReviewsController < ApplicationController
  def create
    raise
    @list = List.find(params[:id])
    review = Review.new(review_params)
    if review.save
      redirect_to list_path(@list)
    end
  end

  private

  def review_params
    params.require(:review).permit(:content)
  end
end
