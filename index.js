{
  /* Not a Live Editor*/
}
document.write('<div class="root"></div>');
const root = document.querySelector(".root");

const cardStyle = {
  border: "1px solid lightgrey",
  padding: "12px",
  width: "600px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginBottom: "10px",
  textAlign: "center",
  backgroundColor: "#fafafa"
};
const dataContainerStyle = {
  width: "250px",
  padding: "12px",
  textAlign: "left"
};
const rootStyle = {
  margin: "0 auto",
  width: "max-content",
  padding: "0 10px"
};
const imageStyle = {
  boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3)"
};

Object.assign(root.style, rootStyle);
fetch("https://finalspaceapi.com/api/v0/character?limit=5")
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(character => {
      const cardDiv = document.createElement("div");
      Object.assign(cardDiv.style, cardStyle);
      cardDiv.classList.add("card");
      const cardImage = document.createElement("div");
      const image = document.createElement("img");
      Object.assign(image.style, imageStyle);
      image.src = character.img_url;
      image.alt = character.name;
      cardImage.appendChild(image);
      cardDiv.appendChild(cardImage);

      const dataContainer = document.createElement("div");
      Object.assign(dataContainer.style, dataContainerStyle);

      const name = document.createElement("p");
      name.innerHTML = `${character.name}`;
      name.style.color = "green";
      dataContainer.appendChild(name);

      const species = document.createElement("p");
      species.innerHTML = `${character.species}`;
      species.style.color = "orange";
      dataContainer.appendChild(species);

      const gender = document.createElement("p");
      gender.innerHTML = `${character.gender}`;
      gender.style.color = "blue";
      dataContainer.appendChild(gender);

      const hair = document.createElement("p");
      hair.innerHTML = `${character.hair}`;
      hair.style.color = "red";
      dataContainer.appendChild(hair);

      cardDiv.appendChild(dataContainer);
      root.appendChild(cardDiv);
    });
  });
let mediaQuery = window.matchMedia("(max-width: 630px)");
const handleResize = e => {
  if (e.matches) {
    // If media query matches
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.style.flexDirection = "column";
      card.style.width = "300px";
    });
  } else {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
      card.style.flexDirection = "row";
      card.style.width = "600px";
    });
  }
};
mediaQuery.addListener(handleResize);
handleResize(mediaQuery);
