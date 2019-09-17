require 'test_helper'

class QuartersControllerTest < ActionDispatch::IntegrationTest
  setup do
    @quarter = quarters(:one)
  end

  test "should get index" do
    get quarters_url
    assert_response :success
  end

  test "should get new" do
    get new_quarter_url
    assert_response :success
  end

  test "should create quarter" do
    assert_difference('Quarter.count') do
      post quarters_url, params: { quarter: { name: @quarter.name, zip_code: @quarter.zip_code } }
    end

    assert_redirected_to quarter_url(Quarter.last)
  end

  test "should show quarter" do
    get quarter_url(@quarter)
    assert_response :success
  end

  test "should get edit" do
    get edit_quarter_url(@quarter)
    assert_response :success
  end

  test "should update quarter" do
    patch quarter_url(@quarter), params: { quarter: { name: @quarter.name, zip_code: @quarter.zip_code } }
    assert_redirected_to quarter_url(@quarter)
  end

  test "should destroy quarter" do
    assert_difference('Quarter.count', -1) do
      delete quarter_url(@quarter)
    end

    assert_redirected_to quarters_url
  end
end
