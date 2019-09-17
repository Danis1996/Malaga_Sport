class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         belongs_to :quarter, optional: true
         belongs_to :club, optional: true
         has_many :requests
         has_many :commentaires
         has_many :likes, dependent: :destroy
         has_one_attached :avatar
end
