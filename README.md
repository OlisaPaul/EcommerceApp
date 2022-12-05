"# EcommerceConsoleApp"
The app depends on inquirer to run properly, so be sure to run npm i

use: node index.js to run the app

The app shows the users the list of products when the users runs it

Then a prompt requesting if the user is interested in buying any of the product
If the user selects no,
A message is displayed which thanks them from contacting the store
Else (That is if the user selects yes)
Then we request for the users details, and ask them to select the product they want to buy and how many of the items they want
They also get to choose if they are willing to purchase more items
If (yes)
The user is taken back to select the product they want and the amount they want
this process is repeated until they are satisfied with their current order then the will have to click no
If (no)
the user is asked to confirm cart
then they proceed to enter the right amount which will be equal to the value of the TotalPrice
