class Match < ApplicationRecord
	belongs_to :equipe_a, class_name: 'Club'
	belongs_to :equipe_b, class_name: 'Club'
	has_one :result

end
