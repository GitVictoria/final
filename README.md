# Personal Daily Planner
---

## work in progress ##


Prototype Daily planner with integrated to-do list, calendar and transcriptive journal. 

Project was conceptualized, planned and build from scratch in 7 days.

The main idea is to combine several tools and make application customisable for most efficient use.

Tool was built in JavaScript using:

* React.js
* Node.js
* PostgreSQL 11 
* Amazon s3 
* Bcrypt



___

## Front Landing Page

Front page consist of two separate components: 

1. Login component was developed using bcrypt for password security in cooperation with the postgreSQL database storing user information
2. Welcome component on the left hand side as an aesthetic for the landing page, with incorporated type-carousel


![](https://github.com/GitVictoria/final/blob/master/public/front-page.gif) 


 

<p align="center">
  <h2>Main in-App  Features and Components:</h2><br>
  <h3>Transcriptive Journal</h3> 
</p>

* Built in speech-recognition

  * Reset button 
  * Success button to insert transcripted message as text into journal

* Image Upload
  * An option to upload image as a reminder or inspiration of the idea
  * Option to insert a URL that is relevant to the message user is trying to insert into the journal. This will later be displayed as hyperlink


<p align="center">
  <h3>To-Do Lists</h3> 
</p>

One to-do is comprised of 3 separate components, each carry own function: 
1. ListItem Component 
  i. Primarily contains the 'done' checkbox logic and aesthetics for the new individual item highlight in the ComponentDidMount function

2. List Component 
  i. Imports ListItem Component and renders it thus creating a list of items
  ii. Date of creation display on individual tasks using Moment.js
  
3. To-Do Component 
  - Renders List Component
  - Carries logic for input fields for new tasks
  - Send a database request in the ComponentDidMount to retrieve current state tasks to display
  
  
     ```
     <TodoList items={this.state.items}
         onItemCompleted={this.markItemCompleted}
             onDeleteItem={this.handleDeleteItem} />
                                                         
                    <div>
                        {this.state.tasks && this.state.tasks.map(task => {
                            return (<div key={task.id}>

                                {task.task}{task.date}
                                
                            </div>





                          
                            

<p align="center">
  <h3>Calendar</h3> 
</p>

* Embedded Google Calendar feature that allows for easy overview of schedule in weekly, monthly or agenda view. 



DEMO 

![](https://github.com/GitVictoria/final/blob/master/public/app-demo.gif) 
