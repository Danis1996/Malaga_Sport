class Request < ApplicationRecord
	belongs_to :recrutement, dependent: :destroy, dependent: :destroy
	belongs_to :user, dependent: :destroy
end
