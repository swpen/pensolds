import "./styles.css";

document.getElementById("app").innerHTML = `
<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,900" rel="stylesheet">

<h1>Form</h1>
<hr>
<form action="/my-handling-form-page" method="post">
<fieldset>
    <legend>Form section heading</legend>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="user_name">
  </div>
  <div>
    <label for="mail">E-mail<abbr title="required">*</abbr></label>
    <input type="email" id="mail" name="user_mail" required>
  </div>
  <div>
    <label for="msg">Message</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>  
</fieldset>
<fieldset>
  <legend>Choose your interests</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked>
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music">
    <label for="music">Music</label>
  </div>
</fieldset>
<label for="spinner">Spinner</label>
<input type="number" id="spinner" min="0" max="1" step="1">
</form>
<form action="thanks.html" method="post">
  <!-- Labels are associated with inputs using the for and id attributes -->
  <label for="full-name">Full Name</label>
  <input id="full-name">
</form>
<br>
<h1>Select boxes</h1>
<hr>
<label for="province">Province</label>
<select id="province">
  <option>Manitoba</option>
  <option>Ontario</option>
  <option>Quebec</option>
</select>
<br>
<label for="state">State</label>
<select id="state">
  <optgroup label="Canada">
    <option>Ontario</option>
    <option>Québec</option>
  </optgroup>
  <optgroup label="United States">
    <option>New York</option>
    <option>California</option>
  </optgroup>
</select>
`;
