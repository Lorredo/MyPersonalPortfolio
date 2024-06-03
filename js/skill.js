fetch('data.json') //fetching data.json
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

      //asigning json data to their corresponding variable.
      const web_development_img = data.data[2].icons.code;
      const web_development = data.data[1].skills[0].type;
      const web_development_desc = data.data[1].skills[0].description;
      const graphics_design_img = data.data[2].icons.graphics;
      const graphics_design = data.data[1].skills[1].type;
      const graphics_design_desc = data.data[1].skills[1].description;
      const networking_img = data.data[2].icons.networking;
      const networking = data.data[1].skills[2].type;
      const networking_desc = data.data[1].skills[2].description;
      const html_icon = data.data[2].icons.html;
      const css_icon = data.data[2].icons.css;
      const js_icon = data.data[2].icons.js;
      const php_icon = data.data[2].icons.php;

      //getting the element by its id, then making the variable as the value.
      document.getElementById('web_development_img').src = web_development_img;
      document.getElementById('web_development').textContent = web_development;
      document.getElementById('web_development_desc').textContent = web_development_desc;
      document.getElementById('graphics_design_img').src = graphics_design_img;
      document.getElementById('graphics_design').textContent = graphics_design;
      document.getElementById('graphics_design_desc').textContent = graphics_design_desc;
      document.getElementById('networking_img').src = networking_img;
      document.getElementById('networking').textContent = networking;
      document.getElementById('networking_desc').textContent = networking_desc;

      //icons
      document.getElementById('html_icon').src = html_icon;
      document.getElementById('css_icon').src = css_icon;
      document.getElementById('js_icon').src = js_icon;
      document.getElementById('php_icon').src = php_icon;
          
      })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });