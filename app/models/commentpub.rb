class Commentpub < ApplicationRecord
    validates :content, presence: true
    belongs_to :user
    belongs_to :publication
end