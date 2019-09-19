require 'test_helper'

class AvatarsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get avatars_create_url
    assert_response :success
  end

  test "should get show" do
    get avatars_show_url
    assert_response :success
  end

end
