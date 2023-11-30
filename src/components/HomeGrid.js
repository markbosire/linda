import React,{useState,useEffect} from 'react'
import Challenges from "../assets/images/Home/Challenges.png"
import CourseLogo from "../assets/images/Home/Course.png"
import Leaderboard from "../assets/images/Home/LeaderBoard.png"
import Objectives from "../assets/images/Home/Objectives.png"
import Play from "../assets/images/Home/Play.png"
import Profile from "../assets/images/Home/Profile.png"

function HomeGrid() {
    const [username, setUsername] = useState(""); // Assuming you set the username somehow
    const [xp, setXP] = useState(0);
    const [course, setCourse] = useState("");
    const [ranking, setRanking] = useState(0);
    // Function to rank users based on XP
  const rankUsers = (users) => {
    const sortedUsers = [...users].sort((a, b) => b.xp - a.xp);
    return sortedUsers.map((user, index) => ({ ...user, ranking: index + 1 }));
  };

  useEffect(() => {
    // Retrieve the username from local storage
    const storedUsername = localStorage.getItem('user');
    setUsername(storedUsername);

    // Retrieve the users array from local storage
    const storedUsersString = localStorage.getItem('users');
    const storedUsers = JSON.parse(storedUsersString);

    // Find the user in the array based on the username
    const loggedInUser = storedUsers.find(user => user.username === storedUsername);

    if (loggedInUser) {
      // Update state variables with user data
      setXP(loggedInUser.xp || 0);
      setCourse(loggedInUser.course || "");

      // Rank users and find the logged-in user's ranking
      const rankedUsers = rankUsers(storedUsers);
      const userRanking = rankedUsers.findIndex(user => user.username === storedUsername) + 1;
      setRanking(userRanking);
    } else {
      console.log('User not found.');
    }
  }, []);
    const Home = [
        {imagePath:Play, title:"Play",tag:"Current Task",tagline:"Protect employee credentials",onclick:"/play"},
        {imagePath:Objectives, title:"Objectives",tag:"Current Objective",tagline:"Current objective"},
        {imagePath:CourseLogo, title:"Course",tag:"Current Course",tagline:course},
        {imagePath:Challenges, title:"Challenges",tag:"Current Challenge",tagline:"Click here to pick a challenge"},
        {imagePath:Leaderboard, title:"Leaderboard",tag:"Position",tagline:ranking},
        {imagePath:Profile, title:"Profile",tag:"Xp",tagline:xp},
       
       
 
        
         // Add more data objects as needed
       ];
  return (
    <div className="home-grid-container">
      {Home.map((item, index) => (
        <div key={index} className="home-grid-item" onClick={()=>{window.location.href = item.onclick;}}>
            <section>
                <h1>{item.title}</h1>
                <p>{item.tag}: <span>{item.tagline}</span></p>
          <div className='imageContainer'><img src={item.imagePath} alt={`Image ${index}`} /></div>
         
          </section>
        </div>
      ))}
    </div>
  )
}

export default HomeGrid