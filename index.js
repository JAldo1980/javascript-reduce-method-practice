import aircraftArr from "/properties/aircraftArr.js";
import placeholderObject from "/properties/placeholderObject.js";

function getPropertyHtml(aircraftArr = [placeholderObject]) {
  return aircraftArr
    .map((aircraft) => {
      console.log("Current Aircraft Object:", aircraft);
      // Deconstruct the aircraft object
      const { flightIdent, length, wingspan, maxspeed, image, eachWingAmmo } =
        aircraft;

      // Calculate the total ammunition carried by each fighter jet using the reduce method
      const totalAmmo = eachWingAmmo.reduce(
        (total, current) => total + current
      );

      return `
      <section class="card">
        <img src="/images/${image}">
        <div class="card-right">
          <h2>Model: ${flightIdent}</h2>
          <h3>Length: ${length} m</h3>
          <p>Wing Span: ${wingspan} m</p>
          <p>Total Ammo ${totalAmmo}</p>
          <h3>Max Speed ${maxspeed} MPH</h3>
        </div>
      </section>`;
    })
    .join(""); // Added join("") to concatenate the array of strings into a single string
}

document.getElementById("container").innerHTML = getPropertyHtml(aircraftArr);
