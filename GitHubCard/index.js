/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/JoelGonzalez02')
  .then((response) => {
    entryPoint.append(gitHubCard(response));
  })
  .catch((err) => {
    console.log(`There was an error retrieving the data:`, err);
  })

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 
   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const entryPoint = document.querySelector('.cards');
const followersArray = ['alex-lc', 'alexandercsierra', 'tetondan', 'bigknell', 'dustinmyers'];

followersArray.forEach((user) => {
  axios.get(`https://api.github.com/users/${user}`)
    .then((response) => {
      entryPoint.append(gitHubCard(response));
    })
    .catch((err) => {
      console.log(`There was an error retrieving the data: `, err);
    });
});


/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:
<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

function gitHubCard(user) {


  const card = document.createElement('div');
  const userImg = document.createElement('img');
  const cardInfo = document.createElement('div');
  const name = document.createElement('h3');
  const username = document.createElement('p');
  const location = document.createElement('p');
  const profile = document.createElement('p'),
        profileLink = document.createElement('a');
  const followers = document.createElement('p');
  const following = document.createElement('p');
  const bio = document.createElement('p');
  

  card.classList.add('card');
  cardInfo.classList.add('card-info');
  name.classList.add('name');
  username.classList.add('username');


  
  userImg.src = user.data.avatar_url;
  profileLink.href = user.data.html_url;
  profileLink.textContent = user.data.html_url;
  profile.textContent = `Profile: `;
  name.textContent = user.data.name;
  username.textContent = user.data.login;
  location.textContent = `Location: ${user.data.location}`;
  followers.textContent = `Followers: ${user.data.followers}`;
  following.textContent = `Following: ${user.data.following}`;
  bio.textContent = `Bio: ${user.data.bio}`;



  card.append(userImg);
  card.append(cardInfo);  
  cardInfo.append(name);
  cardInfo.append(username);
  cardInfo.append(location);
  cardInfo.append(profile);
  profile.append(profileLink);
  cardInfo.append(followers);
  cardInfo.append(following);
  cardInfo.append(bio);
 
  

  return card;

}