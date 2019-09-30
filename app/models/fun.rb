class Fun < ApplicationRecord
	belongs_to :match
	belongs_to :user
	belongs_to :club
	belongs_to :result, optional: true
end
