# MovieGenerator

### App Summary
##### This is a Full-stack CRUD web app that allows users to look up movie recommendations, and add them to a watch list that can be accessed when they login to their own profiles. Users can also add a short review to their favorite movies that will help other users discover new favorites.

### Project Squad
![screen shot 2018-08-23 at 23 16 23](https://user-images.githubusercontent.com/40147976/44564763-c92a5c00-a732-11e8-8ae1-a0089cccf4e2.png)
##### Luke Fariselli, Tylaine Jeffrey, Jonathan Lora, Kendrick Zhang.


### Frameworks
##### Javascript ES6 | Node.js | Express.js | React.js | PostgreSQL | CSS3 | HTML5

### Dependencies
##### PG-Promise | Bulma | Font Awesome

### Resources
##### [Fullstack-crud](https://git.generalassemb.ly/wdi-nyc-lambda/fullstack-crud)
##### [React-to-do-exercise](https://git.generalassemb.ly/wdi-nyc-lambda/react-to-do-exercise)
##### Additional references: In-class lab exercises, and WDI Instructional Team assistance.

### API For Consideration
##### [TMDB API](https://www.themoviedb.org/documentation/api)


### User Stories
##### - As a user, I want to see a list of movie recommendations with clickable images.

##### - As a user, I want to see a modal window that provides a short overview of the movie I clicked.

##### - As a user, I want to see a detailed information page about the movie I selected.

##### - As a user, I want to see a list of user reviews corresponding to the selected movie.

##### - As a user, I want to make an account, and log in to a user-specific page.

##### - As a user, I want to create a review, and see my review appended to the list.

##### - As a user, I want to be able to edit and delete my reviews.


### Project Drafts
#### Entity Relationship Diagram
![screen shot 2018-08-20 at 13 07 10](https://user-images.githubusercontent.com/40147976/44355665-3613cc80-a47b-11e8-93f0-8638e629937c.png)


#### Low-Fidelity Wireframes
##### Landing Page Concept
![screen shot 2018-08-20 at 13 04 03](https://user-images.githubusercontent.com/40147976/44355768-7a9f6800-a47b-11e8-9aba-aaf152576159.png)

##### Movie Profile Page Concept
![screen shot 2018-08-20 at 13 04 54](https://user-images.githubusercontent.com/40147976/44355816-9acf2700-a47b-11e8-83be-d4b7641705b1.png)

##### User Login Page Concept
![screen shot 2018-08-20 at 13 05 54](https://user-images.githubusercontent.com/40147976/44355822-9d318100-a47b-11e8-9474-05142e6e5638.png)

##### User Profile Page Concept
![screen shot 2018-08-20 at 13 06 33](https://user-images.githubusercontent.com/40147976/44355829-a15d9e80-a47b-11e8-84ca-757fb63b661a.png)


### Code Snippet Highlights
##### This project required many state changes that were passed down as props to a variety of child components. Our application depended on conditional rendering so that we can display the correct data for a specific movie.
![screen shot 2018-08-23 at 23 12 37](https://user-images.githubusercontent.com/40147976/44564877-5ff71880-a733-11e8-9d39-be04554998cf.png)

##### As shown, a switch statement was used to render various controlled components based on a user's actions.
![screen shot 2018-08-23 at 23 14 41](https://user-images.githubusercontent.com/40147976/44565058-296dcd80-a734-11e8-9b8e-d68498569248.png)

##### In order to properly render a movie poster and making it clickable to show a pop-up modal window in React, we must use HTML elements with type="button". Our team-member, Luke, came up with a clever solution to pass in the image prop as a CSS property in a button element.
![screen shot 2018-08-23 at 23 19 31](https://user-images.githubusercontent.com/40147976/44565244-1e676d00-a735-11e8-8861-7d5608c7fa84.png)

##### And finally, our targeted movie page contains multiple controlled form components that will conditionally render when we click on the Edit button to reveal the Update, and Delete buttons.
![screen shot 2018-08-23 at 23 26 15](https://user-images.githubusercontent.com/40147976/44565338-97ff5b00-a735-11e8-819a-a3ffacce3d2b.png)


### Project Challenges
##### This project was made possible because our group worked well together with a tight deadline.
##### It was our first time building a Full-Stack CRUD application and working with remote branches on Github. Our initial hurdle was to get familiar with branching separately and merging back to our master branch without causing merge conflicts.
##### Additionally, each of our four members had to be involved in the front-end using React.js, and in the back-end using Express.js and Node.js. While this proved to be a good learning experience for our team members, it also became a challenge when sorting through blocks of code that didn't have reference comments.
##### Our biggest challenge manifested itself when we married our server-side with our client-side. Even though we had CRUD functionality in our back-end first, it was not as smooth replicating that on our client-side because it's our first time building a project with React.
##### As our code base grew with each commit, it also became more and more difficult to organize our code. But ultimately, our well-mannered team communicated well with each other about what changes were made, and what our intentions were with the changes. This was a great learning experience for each of us, and we'd proudly work with each other again in the future.


### Post-MVP Features
##### Due to time contraints, this project is currently a minimum viable product as a full-stack CRUD application. While the basic functionalities are completed, we have plans to implement user authentication using JWT tokens in local storage so that users may create their own profiles and gain access to additional features. We want to implement user-specific features that allow them to add a Giphy profile photo, and have the ability to add a movie to a favorite list. We also want to use the TMDB API to fetch a collection of popular movie titles with detailed metadata that will ultimately be stored in our database. We also want to polish up our interface for a better user experience.


##### General Assembly
##### Web Development Immersive
##### Lambda Class | 2018
