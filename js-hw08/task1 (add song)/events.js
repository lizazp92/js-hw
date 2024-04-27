/* Create a song list generator; User should be able to input song name, 
artist and runtime. Also should be able to delete song from list and see runtime 
in details below song name and artist when clicking on the row. */

// selecting elements
const songListTitle = document.querySelector("h2");
const form = document.getElementById("form");
const addSongBtn = document.getElementById("addSongBtn");

const inputSong = document.getElementById("songName");
const inputArtist = document.getElementById("songArtist");
const inputRunTime = document.getElementById("runTime");

// centering form with bootstrap classes
form.classList.add(
  "d-flex",
  "justify-content-center",
  "align-items-center",
  "gap-2"
);

// create the future list(ul) after h2
const ul = document.createElement("ul");
songListTitle.after(ul);

// a function for the output to start with a capital letter and space deleting
function stringCapitalize(arg) {
  let tempString = arg.trim()[0].toUpperCase() + arg.trim().slice(1);
  return tempString;
}

// event for submitting a form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // checks for empty inputs
  if (!inputSong.value || !inputArtist.value || !inputRunTime.value) {
    window.alert("All inputs are requiered");
    form.reset();
    // checks for input value length
  } else if (
    inputSong.value.trim().length > 15 ||
    inputSong.value.trim().length > 15
  ) {
    window.alert(
      "The input length should not contain more than 15 symbols. Please try again"
    );
    form.reset();
  } else {
    const song = stringCapitalize(inputSong.value);
    const artist = stringCapitalize(inputArtist.value);
    const liItem = document.createElement("li");
    liItem.classList.add(
      "d-flex",
      "justify-content-between",
      "align-items-center"
    );
    const nameEl = document.createElement("span");
    nameEl.innerHTML = `<strong>${song}</strong> by ${artist}`;

    const description = document.createElement("span");
    description.classList.add("d-none", "p-4");
    description.innerHTML = `Runtime: ${inputRunTime.value}`;

    ul.append(liItem);
    liItem.append(nameEl);
    liItem.after(description);

    // button delete with icon inside
    const btnDelete = document.createElement("button");
    let i = document.createElement("i");
    i.classList.add("fa-solid", "fa-trash");
    btnDelete.appendChild(i);

    btnDelete.classList.add("btn", "btn-danger");
    btnDelete.addEventListener("click", (event) => {
      event.stopPropagation();
      ul.removeChild(liItem);
      ul.removeChild(description);
    });
    liItem.append(btnDelete);

    // bg change for list items on hover

    liItem.addEventListener("mouseover", (event) =>
      liItem.classList.add("bg-success", "bg-gradient")
    );
    liItem.addEventListener("mouseout", () =>
      liItem.classList.remove("bg-success", "bg-gradient")
    );

    // click on the list item => runtime appears below the song and artist
    liItem.addEventListener("click", () =>
      description.classList.toggle("d-none")
    );
    form.reset();
  }
});
