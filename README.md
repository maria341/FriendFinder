# Friend Finder - Node and Express Servers 

### Overview  
In this activity, you'll build a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.  You will use Express to handle routing. Make sure you deploy your app to Heroku so other users can fill it out.

### Instructions

1. Your survey should have 10 questions of your choosing. Each answer should be on a scale of 1 to 5 based on how much the user agrees or disagrees with a question.

2. Your `server.js` file should require the basic npm packages we've used in class: `express` and `path`.

3. Your `htmlRoutes.js` file should include two routes:

   * A GET Route to `/survey` which should display the survey page.
   * A default, catch-all route that leads to `home.html` which displays the home page.

4. Your `apiRoutes.js` file should contain two routes:

   * A GET route with the url `/api/friends`. This will be used to display a JSON of all possible friends.
   * A POST routes `/api/friends`. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.

#Some of the screenshots for this homework

#HTML FILE FOR SURVEY PAGE

![](https://github.com/maria341/FriendFinder/blob/master/app/public/images/screenshot1.png)

#MySurvey Page
![](https://github.com/maria341/FriendFinder/blob/master/app/public/images/Screenshot%202.png)

![](https://github.com/maria341/FriendFinder/blob/master/app/public/images/Screenshot%203.png)

5. You should save your application's data inside of `app/data/friends.js` as an array of objects. Each of these objects should roughly follow the format below.

```json
{
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
}
```
![](https://github.com/maria341/FriendFinder/blob/master/app/public/images/Screenshot%204.png)

