# React-Employee-Directory

This react app provides a searchable employee directory to easily pull up individual employees' personal information. 

Using axios to bring in an API of random people this app then dynamically adds a table row for each employee with hooks managing state. The state sets two blank arrays for employees and a blank string for search. Once the API is called the object is mapped into only the information needed and displayed on the page. 

You are also able to search by employee name, phone number, email, and date of birth. The search uses Object.values() to see if what is typed is included in any of the values of the array of employees. If the value of what is typed includes anything from the array only those items show.  

![Screenshot of employee directory](/public/images/react_dir.JPG)

Here is the deployed application: 
[Check out Employee Directory on Heroku!](https://mighty-cove-87859.herokuapp.com/)