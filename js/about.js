fetch('data.json') //fetching data.json
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
        //asigning json data to their corresponding variable.
        const profile = data.data[0].personal.profile;
        const email = data.data[0].personal.email;
        const address = data.data[0].personal.address;
        const mobile_number = data.data[0].personal.mobile_number;
        const about_info = data.data[0].personal.about_info;
        const college = data.data[0].education.colege;
        const shs = data.data[0].education.shs;
        const jhs = data.data[0].education.jhs;
        const elementary = data.data[0].education.elementary;
        const computer_img = data.data[0].hobbies[1].images[0].computer;
        const basketball_img= data.data[0].hobbies[1].images[1].basketball;
        const singing_img = data.data[0].hobbies[1].images[2].singing;
        const computer = data.data[0].hobbies[0].text[0].what;
        const computer_desc = data.data[0].hobbies[0].text[0].description;
        const basketball = data.data[0].hobbies[0].text[1].what;
        const basketball_desc = data.data[0].hobbies[0].text[1].description;
        const singing = data.data[0].hobbies[0].text[2].what;
        const singing_desc = data.data[0].hobbies[0].text[2].description;
        const web_development = data.data[1].skills[0].type;

//getting the element by its id, then making the variable as the value.
        document.getElementById('profile').src = profile;
        document.getElementById('email').textContent = email;
        document.getElementById('address').textContent = address;
        document.getElementById('mobile_number').textContent = mobile_number;
        document.getElementById('about_info').textContent = about_info;
        document.getElementById('college').textContent = college;
        document.getElementById('shs').textContent = shs;
        document.getElementById('jhs').textContent = jhs;
        document.getElementById('elementary').textContent = elementary;
        document.getElementById('computer_img').src = computer_img;
        document.getElementById('computer').textContent = computer;
        document.getElementById('computer_desc').textContent = computer_desc;
        document.getElementById('basketball_img').src = basketball_img;
        document.getElementById('basketball').textContent = basketball;
        document.getElementById('basketball_desc').textContent = basketball_desc;
        document.getElementById('singing_img').src = singing_img;
        document.getElementById('singing').textContent = singing;
        document.getElementById('singing_desc').textContent = singing_desc;
        document.getElementById('web_development').textContent = web_development;
        
      })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
