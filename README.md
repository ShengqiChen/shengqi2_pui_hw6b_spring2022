# shengqi2_pui_hw6b_spring2022

FILES

index.js: 
    - the function setColorDate in the index.js file is called with the date as its argument. 
    - The setColorDate function changes the color of the list item from dark green to light green and set
    all other list item back to dark green
    - uses "localstorage" to save the selected date as a variable in JSON format in index.js
    - the function setColorTime does the same job with the selected timeslot
    - uses localStorage to save the selected timeslot as a variable in JSON format in index.js
    - The updateAppInfo functions updates the appointment selected when the user selects a new appontment, and uses localStorage to store the newly selected date and timeslot 

last.js: 
    - reads data from localStorage and displays the data on the confirmation page


existing.js: 
    - fetch data from localStorage and display the appointment made
    - remove the data from localStorage when it is canceled

last.html:
    - displays the information stored in localStorage by calling last.js

existingAppointments.html:
     - displays the information stored in localStorage by calling existing.js

style.css:
    - styling addtions made to last.html and existingAppointments.html
