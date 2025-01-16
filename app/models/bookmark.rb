class Bookmark < ApplicationRecord
  belongs_to :movie
  belongs_to :list
  has_many :reviews

  validates :comment, presence: true, length: { minimum: 6 }
  validates :movie, uniqueness: { scope: :list }
end
