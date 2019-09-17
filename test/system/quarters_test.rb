require "application_system_test_case"

class QuartersTest < ApplicationSystemTestCase
  setup do
    @quarter = quarters(:one)
  end

  test "visiting the index" do
    visit quarters_url
    assert_selector "h1", text: "Quarters"
  end

  test "creating a Quarter" do
    visit quarters_url
    click_on "New Quarter"

    fill_in "Name", with: @quarter.name
    fill_in "Zip code", with: @quarter.zip_code
    click_on "Create Quarter"

    assert_text "Quarter was successfully created"
    click_on "Back"
  end

  test "updating a Quarter" do
    visit quarters_url
    click_on "Edit", match: :first

    fill_in "Name", with: @quarter.name
    fill_in "Zip code", with: @quarter.zip_code
    click_on "Update Quarter"

    assert_text "Quarter was successfully updated"
    click_on "Back"
  end

  test "destroying a Quarter" do
    visit quarters_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Quarter was successfully destroyed"
  end
end
