class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,:omniauthable,
         :recoverable, :rememberable, :validatable, :trackable, 
         :omniauth_providers => [:facebook, :google_oauth2]
         belongs_to :quarter, optional: true
         belongs_to :club, optional: true
         has_many :requests
         has_many :commentaires, dependent: :destroy
         has_many :commentpubs, dependent: :destroy
         has_many :likes, dependent: :destroy        
         has_many :publications, dependent: :destroy
         has_one_attached :avatar
         has_many :user_provider, :dependent => :destroy
         has_many :fun
end