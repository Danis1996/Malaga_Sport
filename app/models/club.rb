class Club < ApplicationRecord
	belongs_to :admin, class_name: 'User', dependent: :destroy
	belongs_to :quarter, dependent: :destroy
	has_many :recrutements
	has_many :members, class_name: 'User'
	has_many :participants, through: :recrutements
	has_many :events
	has_one_attached :picture
end
