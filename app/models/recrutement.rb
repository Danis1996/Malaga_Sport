class Recrutement < ApplicationRecord
	has_many :requests
	belongs_to :club, dependent: :destroy
end
