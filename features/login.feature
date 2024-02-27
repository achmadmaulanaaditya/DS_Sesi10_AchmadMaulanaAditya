Feature: Swag Labs - Login
  Background: User on the login page
    Given Aditya is on the login page

  Scenario: As a standard_user, I want to log in successfully 
    When Aditya login with "standard_user" credential 
    Then Aditya should be on home page

  Scenario: As a locked_out_user, I should get error message
    When Aditya login with "locked_out_user" credential 
    Then Aditya should see error "Epic sadface: Sorry, this user has been locked out."

  Scenario: As a problem_user, I can log in but see errors with the inventory images
    When Aditya login with "problem_user" credential 
    Then Aditya should be on home page but see errors with the inventory images

  Scenario: As a error_user, I can log in but can't click remove button
    When Aditya login with "error_user" credential 
    Then Aditya should be on home page but can't click remove button
  
  Scenario: As a visual_user, I can log in but the page display is scrambled
    When Aditya login with "visual_user" credential 
    Then Aditya should be on home page but the page display is scrambled

  Scenario: As a user, I can't log in with invalid username
    When Aditya login with "standard user" credential 
    Then Aditya should get error "Epic sadface: Username and password do not match any user in this service"