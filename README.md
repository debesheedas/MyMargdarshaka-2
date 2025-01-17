<p>
  <img src="https://img.shields.io/badge/frontend-react-%23ff69b4">&emsp;
  <img src="https://img.shields.io/badge/database-mongodb-green">&emsp;
  <img src="https://img.shields.io/badge/backend-express-lightgrey">&emsp;
  <img src="https://img.shields.io/badge/BaaS-firebase-important">&emsp;
  <img src="https://img.shields.io/badge/build-success-success">
</p>

# MyMargdarshaka

<img src="client/src/assets/main-logo.svg" />
<i>Effective digital tutelage in the Indian context: Making the right connections</i>

Check out the [Demo Video here](https://youtu.be/3wZg3v7AcuM)!
## Abstract
The MyMargdarshaka platform is based on the novel concept of connecting Indian school students who are unable to attend traditional school due to financial or logistic constraints with mentors who want to give back to society by teaching them. The idea is to mentor these students with the goal of taking the class 10 and 12 certification exams conducted by the National Institute of Open Schooling (NIOS) which is the Government of India’s official examination body. The app focuses on the UN SDG 4 - Quality Education.

## Idea
According to a survey conducted in 2017-18, there were over 30 million Indian children not enrolled in schools. This number has only been increasing because of the Covid-19 pandemic. There are millions of students who are not able to attend school due to financial or logistical reasons. The longer the gap in learning, the more disinterested students get and eventually exit the education system.

On the other hand, there are many well-educated people in India who want to give back to society by teaching underprivileged children, but are unable to do so through the traditional schooling system because of other commitments. They can however devote a few hours a week to teach disadvantaged children, the above mentioned students as an example, from home. 

This platform is aimed at connecting these two types of people so that more children have the opportunity to complete their school level education and hope for a better life. This platform keeps in mind the National Institute of Open schooling (NIOS) which is the Government of India’s official portal for class 10 and class 12 examination and certification. Hence, students and mentors can enrol on MyMargdarshaka, get connected based on compatibility criteria and start a great learning to get certified by NIOS.

There are similar existing solutions but they provide limitations like absence of personal guidance, lack of direction in passive resources, unaffordable and not easy to use with certification, to name a few. MyMargdarshaka is unique in the way that it aims at addressing such limitations and providing the best features of the existing solutions, keeping in mind that the students may not be well versed in technology.

## Quick Start
1. The Web-App is deployed at https://mymargdarshaka.herokuapp.com/

    OR
2. To run locally using Node.js: 
    * Fork and clone this repository.
    * Open up a terminal in the `./` directory and run:

```bash
# Install dependencies for server
$ npm install

# Install dependencies for client
$ npm run client-install

# Run the app
$ npm run dev

# Server runs on http://localhost:5000 and client on http://localhost:3000
```

## User Guide and Features
**To use this platform as a student/learner:**
* Click on 'GET STARTED' and then 'SIGN IN AS A STUDENT'.
* Provide your phone number and verify your OTP. 
* Enter your details - name, preferred language of instruction, interested subjects that you want to learn and time slots as per your convenience.
* Click on 'ASSIGN MENTORS'. You will be assigned mentors for the subjects you choose in the previous step as per availability.
* Get started on the subjects and have a happy learning experience!
* For conversation, you can chat with your assigned mentor using the chat box provided on each subject card.
* You can provide regular feedback about the platform or experience in the feedback page.
* If you need insights on how best to use this platform or if you have a question, then head over to the guidelines page by selecting the 'GUIDELINES' button on the navbar. Interact with the virtual mentor Lola<a href="https://github.com/shree675/MyMargdarshaka#about-lola-the-firefly"><sup>1</sup></a> by typing in your queries or clicking on the provided chips to gain insights and advice on how to make most use of this platform.
* You can view your progress on the right panel and you can change your details or request for a change in mentor in the dashboard page.
* Click on 'LOGOUT' on the navbar to logout.

**To use this platform as a mentor:**
* Click on 'GET STARTED' and then 'SIGN IN AS A MENTOR'.
* Provide your phone number and verify your OTP. 
* Enter your details - name, email, preferred language of instruction, subjects that you want to teach and time slots of your convenience.
* Wait for the admins to assess and approve your application. You will receive a confirmation email as soon as your application is approved.
* Click on 'ASSIGN STUDENTS'. You will be assigned students for the subjects you chose in the previous step as per availability.
* Get started on the subjects and have a happy teaching experience!
* For conversation, you can chat with your assigned student using the chat box provided for each subject.
* You can provide regular feedback about the platform or experience in the feedback page.
* If you need insights on how best to use this platform as amentor or if you have a question, then head over to the guidelines page by selecting the 'GUIDELINES' button on the navbar. Interact with the virtual mentor Lola<a href="https://github.com/shree675/MyMargdarshaka#about-lola-the-firefly"><sup>1</sup></a> by typing in your queries or clicking on the provided chips to gain insights and advice on how to make most use of this platform.
* You can change your details or add/remove subjects you would like to teach in the dashboard page.
* Click on 'LOGOUT' on the navbar to logout.

**To use this platform as an admin:**
* Click on 'GET STARTED' and then 'Sign in as an admin'.
* Provide your username and password.
* Click on 'MANAGE ISSUE' to take up an issue. Switch to 'MANAGE' tab to view the issues that you are managing.
* Click on 'MARK AS RESOLVED' after resolving that issue. Switch to 'RESOLVED ISSUES' tab to view the issues that are resolved.
* Assess and approve new mentor applications in the applications page.
* Search the user on the right panel to ban him/her.
* Click on 'LOGOUT' on the navbar to logout.

## Screenshots
*Landing page*
![Screenshot (571)](https://user-images.githubusercontent.com/58718144/144431616-81269f16-7ca3-43c0-95c2-9621c7b36fe8.png)

*Dashboard*
![Screenshot (573)](https://user-images.githubusercontent.com/58718144/144431721-825bb9bf-4363-40b6-a1d5-2015fe139333.png)

*Provide feedback*
<img src="./screenshots/Screenshot-Feedback.png"><img/>

*Conversation with Lola*
![Screenshot (574)](https://user-images.githubusercontent.com/58718144/144431767-626cef37-5e39-48ed-8ff4-015b5cb9e2c2.png)

*Admin issues handling*
![Screenshot (575)](https://user-images.githubusercontent.com/58718144/144432075-58073d12-6fa6-4307-a099-2a3f061483dc.png)

## Releases
1. Checkout the Release 1 demo video [here](https://www.youtube.com/watch?v=iYpwh7IrSR8).
2. Checkout the Release 2 demo video [here](https://youtu.be/3wZg3v7AcuM).

## Tools and Technologies Used
* MERN stack with Firebase for the user authentication and database to store messages
* Figma for the design and wireframing
* ZenHub for issue tracking

## Modules overview
<img src="./arch.png"><img/>

## Contributing 
Contributions and pull requests are welcome. For more information on structure and modules and the environment variables, please refer to [contributing.md](contributing.md).

## About Lola the Firefly
<img src="https://user-images.githubusercontent.com/58718144/144436410-0e558801-4f2a-4ffd-836e-0a26ecc75021.gif" width=250 />
Lola is a custom-built virtual mentor interactive character that uses an NLP based BERT conversation model that helps provide suitable answers to the input queries.

Lola can help you learn how to use this application by redirecting you to the Getting Started page, where an automatic slideshow walks you through the application's working. It helps provide insights on how best to make use of this platform in all aspects.
