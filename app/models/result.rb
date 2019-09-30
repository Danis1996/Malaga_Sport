class Result < ApplicationRecord
	belongs_to :winner, class_name: 'Club'
	belongs_to :looser, class_name: 'Club'
	has_many :fun
end
