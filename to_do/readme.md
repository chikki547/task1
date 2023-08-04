# Taking Input

I used form and button onClick event to capture the value entered by user and returned false to prevent page refresh

# Adding new element

Once I got the value, I create Li element and four span elements for - text entered, move up Icon, mark as done, delete icon and then append them to Li element which then appended to ul

# Deleting element

I added onclick function to delete icon which will remove the li.

# Mark as Done

when user clicks on "Mark as Done" Button the element will be removed from the UL list and the text will extracted and appended to new li element and then appended to done ul

# move up priority task

when user clicks on the move up icon the list item will be moved to top

# using up and down keys for going through each item

I used event.key for capturing upArrow and downArrow keys and then created selected class style which will get appended to each list item while passing through it
