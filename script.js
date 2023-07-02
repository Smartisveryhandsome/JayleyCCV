const btnAbout = document.getElementById("btn-about");
const btnQualifications = document.getElementById("btn-qualifications");
const btnAchievements = document.getElementById("btn-achievements");
const btnActivities = document.getElementById("btn-activities");
const btnExperience = document.getElementById("btn-experience");
const btnHobbies = document.getElementById("btn-hobbies");
const btnContact = document.getElementById("btn-contact");

const mainContent = document.querySelector("main");

btnAbout.addEventListener("click", () => {
  mainContent.innerHTML = `
    <p style="background-image: url(https://plainbackground.com/download.php?imagename=9fbbda.png); background-size: cover; background-position: center; text-align: left;">
      Chinese Name: LEI WENG IAN 李詠欣<br>
      English Name: Jayley Lei<br>
      Age: 16<br>
      Birthday: 2006/10/30<br>
      Education: High school in CDSJ5ES<br>
      Elective courses: Chemistry, Physics🔭, Portuguese🇵🇹, Advanced Mathematics📊, Human biology<br>
      Class ranking: 7/28 (average: 81.14 <a href="https://i.imgur.com/7OSaqlX.jpg">Photo</a>)<br>
      Campus clubs: ISCHOOL TV📽, Students Union<br>
      Hobbies: Playing piano 🎹, watching movies 🎥<br>
      MBTI: ENFP-A
    </p>`;
});
btnQualifications.addEventListener("click", () => {
  mainContent.innerHTML = `
    <p style="background-image: url(https://plainbackground.com/download.php?imagename=9fbbda.png); background-size: cover; background-position: center;">
      Between 2020 and 2023, I have obtained various qualifications, including software applications, knowledge of Chinese culture, and music theory. These certificate exams have allowed me to absorb more knowledge beyond textbooks, enriching myself and benefiting me for life.
    </p>
    <ul>
      <li>
        <div style="position: relative;">
          <img src="https://i.imgur.com/N9VFR52.jpg" alt="MOS PowerPoint 2019 Associate">
          <span style="position: absolute; top: 0; right: 0;"></span>
        </div>
        <strong>MOS PowerPoint 2019 Associate (May 2023)</strong>
      </li>
      <li>
        <div style="position: relative;">
          <img src="https://i.imgur.com/WhqfHfd.jpg" alt="MOS Excel 2019 Associate">
          <span style="position: absolute; top: 0; right: 0;"></span>
        </div>
        <strong>MOS Excel 2019 Associate (February 2023)</strong>
      </li>
      <li>
        <div style="position: relative;">
          <img src="https://i.imgur.com/lGXyf1M.jpg" alt="Chinese Culture and Knowledge Qualification Examination">
          <span style="position: absolute; top: 0; right: 0;"></span>
        </div>
        <strong>Chinese Culture and Knowledge Qualification Examination (2022)</strong>
      </li>
      <li>
        <div style="position: relative;">
          <img src="https://i.imgur.com/DYth4hq.jpg" alt="ABRSM Grade 5 Theory">
          <span style="position: absolute; top: 0; right: 0;"></span>
        </div>
         <strong>ABRSM Grade 5 Theory (2020)</strong>
      </li>
    </ul>`;


  const style = document.createElement('style');
  style.innerHTML = `
    ul li img:first-of-type {
      width: 600px;
      height: auto;
    }
  `;
  document.head.appendChild(style);
  
    mainContent.style.backgroundImage = "url('https://plainbackground.com/download.php?imagename=9fbbda.png')";
});

btnAchievements.addEventListener("click", () => {
  mainContent.innerHTML = `
    <ul style="list-style-type: none;">
      <li>
        <img src="https://i.imgur.com/ExDtcFl.jpg" alt="IGEO MACAU 2023 — bronze award">
        <img src="https://i.imgur.com/P0GkiF6.jpg" alt="Description of example" width="600" height="450" style="display: block; margin: 0 auto;">
        <p></p>
        <strong>IGEO MACAU 2023 — bronze award (May 2023)</strong><br>
        This competition was organized by the Geography and Education Research Association of Macau (AIEGM) and followed the format of the International Geography Olympiad organized by the International Geographical Union. The competition was conducted in English. 
        Through this competition, I gained additional geographic knowledge, which helped me to better understand, analyze, apply and solve problems related to geographical information.
      </li>
      <li>
        <img src="https://i.imgur.com/8Qq5sa3.jpg" alt="Description of example" width="600" height="450" style="display: block; margin: 0 auto;">
        <img src="https://i.imgur.com/FJElDCZ.jpg" alt="Description of example" width="600" height="450" style="display: block; margin: 0 auto;">
        <p></p>
         <strong>MNCYA Student Health Ambassador Training Course 2022 -- First place (December 2022)</strong><br>
        This course is organized by the Macao New Chinese Youth Association (MNCYA) and is a two-month training program that focuses on diverse activities to learn about health knowledge and theory. The program concludes with a community outreach service project where we apply the knowledge we learned and promotehealth education to peers and residents. Through this program, I learned a lot about nutrition, mental health, first aid, and other areas that will be helpful for my future studies in nutrition at university. Additionally, I am happy to meet like-minded friends, which expanded my social circle.
      </li>
      <li>
        <img src="https://i.imgur.com/AdjDyKi.jpg" alt="2022 Purcell International Competition For Young Pianists (U.K) Macau Round -- Silver Award in the Grade Seven">
        <p></p>
        <strong>2022 Purcell International Competition For Young Pianists (U.K) Macau Round -- Silver Award in the Grade Seven (October 2022)</strong><br>
        This competition was an international piano competition, and it was also my first time participating in a piano competition. Therefore, I feel very fortunate to have received an award in this competition. Through this competition, I gained valuable experience in performing live and was able to showcase the results of my practice. Overall, it was a great experience for me.
      </li>
      <li>
        <img src="https://i.imgur.com/373VJKK.jpg" alt="DSEDJ School Reporter Program 2021/2022 -- Champion">
        <img src="https://i.imgur.com/WN2fvpn.jpg" alt="Description of example" width="600" height="400" style="display: block; margin: 0 auto;">
        <p></p>
         <strong>DSEDJ School Reporter Program 2021/2022 -- Champion (March 2022)</strong><br>
        This project was jointly organized by the Education and Youth Development Bureau, the Macau Journalists Association, and the Macau Sports Press Association, with the theme of "Thinking Together, Planning Together". After a series of training sessions and with the joint efforts of my team members, our work, "The Ideal Bread," ultimately achieved the championship. Through this activity, we also fostered a spirit of teamwork.
      </li>
    </ul>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/NeKUJrUSxiY" title="The Ideal Bread - DSEDJ School Reporter Program 2021/2022"></iframe>
    <img src="https://i.imgur.com/62dfVn6.jpg" alt="Description of example" width="500" height="600" style="display: block; margin: 0 auto;">
    <p>Our video was also submitted to the<strong> "Macau Impressions | Youth Short Film Production Program"</strong> organized by the Youth Association and received the award for Outstanding Short Film, which once again proves our hard work and dedication.💪🏼</p>` ;
    mainContent.style.backgroundImage = "url('https://plainbackground.com/download.php?imagename=9fbbda.png')";
});

btnActivities.addEventListener("click", () => {
  mainContent.innerHTML = `
    <ul style="list-style-type: none;">
      <li>
        <img src="https://i.imgur.com/z1o9J3x.jpg" alt="Description of example" width="500" height="600" style="display: block; margin: 0 auto;">
         <p></p>
        <img src="https://i.imgur.com/d09IlTc.jpg" alt="Description of example" width="600" height="350" style="display: block; margin: 0 auto;">
       <strong>Students Union September 2022 - Present</strong> <br>
        I joined the student union this year and worked in the publicity department. My responsibilities include promoting events, hosting activities, organizing and assisting in various events such as school singing competitions, student union exchange activities, and orienteering competitions. Through this experience, I have learned the skills of event planning and hosting, and gained a greater appreciation for the difficulties involved in organizing and executing an event.
        <div style="text-align: center;">
          <a href="https://www.instagram.com/cdsj5.su/">CDSJ5 Student Union IG</a>
        </div>
      </li>
      <li>
        <img src="https://i.imgur.com/RE39BWU.jpg" alt="ISCHOOL TV" width="500" height="600" style="display: block; margin: 0 auto;">
        <strong>ISCHOOL TV September 2020 - Present</strong><br>
        Since Form 3, I have been a member of the ISCHOOL TV, primarily responsible for live broadcasts of school events and graduation ceremonies. I also have experience assisting with video shooting and editing. This experience has taught me how difficult it can be to produce a video, and how important perseverance is in accomplishing a task.
        <div style="text-align: center;">
          <a href="https://www.instagram.com/ischooltv_cdsj5/">ISCHOOL TV IG</a>
          <br>
          <a href="https://www.youtube.com/@ischooltvcdsj514">ISCHOOL TV YT</a>
        </div>
      </li>
    </ul>`;
    mainContent.style.backgroundImage = "url('https://plainbackground.com/download.php?imagename=9fbbda.png')";
});

btnExperience.addEventListener("click", () => {
  mainContent.innerHTML = `
    <h2>Experience</h2>
    <ul>
      <li>
        <strong>Community Involvement (September 2021 - Present)</strong><br>
        Since high school, I have participated in volunteer training and community service outside of school. I joined the FAOM STAR volunteer team and made friends with other volunteers, allowing me to interact with people from different social backgrounds.
                        <img src="https://i.imgur.com/JjLGwpT.jpg" alt="ISCHOOL TV" width="700" height="400" style="display: block; margin: 0 auto;">
                        <p></p>
                                                <img src="https://i.imgur.com/8dlmAtH.jpg" alt="ISCHOOL TV" width="700" height="400" style="display: block; margin: 0 auto;">
      </li>
    <p></p>
      <li>
        <strong>Work experience (March 2022 - Present)</strong><br>
        I also work as a private tutor outside of school, where I help students overcome academic challenges. Through this experience, I have learned how to interact better with children and develop effective teaching strategies.
      </li>
    </ul>
    <p>These social experiences have also enhanced my interpersonal and communication skills, which will provide a strong foundation for me as I enter the workforce in the future.</p>`;
    mainContent.style.backgroundImage = "url('https://plainbackground.com/download.php?imagename=9fbbda.png')";
});

btnHobbies.addEventListener("click", () => {
  mainContent.innerHTML = `
    <h2>Hobbies</h2>
    <ul>
      <li>
        <strong>Piano</strong>
        <br><br>
        I have been learning to play the piano since primary school. In addition to developing piano techniques and music theory knowledge, I have also learned the value of patience because learning to play the piano requires perseverance and continuous practice. I am currently preparing for my Grade 8 piano exam.
      </li>
      <p></p>
      <li>
        <strong>Science</strong><br>
I have a passion for science, so I chose to take chemistry and Physics as electives in high school, which have increased my interest in the subject. These are some pictures of an experiment we conducted in class.<br>
<img src="https://i.imgur.com/6ntcLpI.jpg" alt="ISCHOOL TV" width="500" height="600" style="display: block; margin: 0 auto;">
<img src="https://i.imgur.com/KJRY1ap.jpg" alt="ISCHOOL TV" width="500" height="800" style="display: block; margin: 0 auto;">
<img src="https://i.imgur.com/T7Vl3pk.jpg" alt="ISCHOOL TV" width="500" height="800" style="display: block; margin: 0 auto;">
      </li>
    </ul>`;
    mainContent.style.backgroundImage = "url('https://plainbackground.com/download.php?imagename=9fbbda.png')";
});


btnContact.addEventListener("click", () => {
  mainContent.innerHTML = `
    <h2>Contact Me</h2>
    <ul>
      <li>
        <strong>Gmail</strong><br>
        wengian1030@gmail.com
      </li>
      <li>
        <strong>Message</strong><br>
        853+ 66728392
      </li>
    </ul>`;
  mainContent.style.backgroundImage = "url('https://plainbackground.com/download.php?imagename=9fbbda.png')";
});