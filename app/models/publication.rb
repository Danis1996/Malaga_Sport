class Publication < ApplicationRecord
	validates :content, presence: true
	belongs_to :user, dependent: :destroy
end