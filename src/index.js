const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");

  fetch("https://randomuser.me/api/")
  .then(r => {
    return r.json()
  })
  .then(d => {
    return d.results[0]
  })
  .then(user => {
    const userBox = document.getElementById("user")
    console.log(user.name);
    userBox.innerHTML = `
    <div class="col">

      <label for="fullname"> <!-- Include first name, last name AND title -->
        Name:
      </label>
      <h3 id="fullname">${user.name.title} ${user.name.first} ${user.name.last}</h3>

    </div>

    <div class="col">

      <label for="email">
        Email:
      </label>
      <h4 id="email">${user.email}</h4>

    </div>
  </div>

  <div class="row align-items-center">
    <div class="col">

      <label for="street">Street:</label>
      <h4 id="street">${user.location.street}</h4>

      <label for="city">City:</label>
      <h4 id="city">${user.location.city}</h4>

      <label for="state">State:</label>
      <h4 id="state">${user.location.state}</h4>

      <label for="postcode">Post Code:</label>
      <h4 id="postcode">${user.location.postcode}</h4>

    </div>

    <div class="col">

      <label for="phone">Phone:</label>
      <h4 id="phone">${user.phone}</h4>

      <label for="cell">Cell:</label>
      <h4 id="cell">${user.cell}</h4>

    </div>

    <div class="col">

      <label for="date_of_birth">Date of Birth:</label>
      <h4 id="date_of_birth">${user.dob.date.slice(0,10)}</h4>

    </div>
    `
  })


});
