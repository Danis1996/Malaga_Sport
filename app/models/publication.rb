class Publication < ApplicationRecord
	belongs_to :user, dependent: :destroy
end