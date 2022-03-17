document.addEventListener("DOMContentLoaded", (e) => {
    console.log(e);
    cardGenerator();
    board();
  });
  
  const cardGenerator = () => {
    //We generate the object 🧑🏻‍💻
    let cardData = [
      { imgSrc: "./assets/images/card1.jpg", id: 1, name: "card1" },
      { imgSrc: "./assets/images/card2.jpg", id: 2, name: "card2" },
      { imgSrc: "./assets/images/card3.jpg", id: 3, name: "card3" },
      { imgSrc: "./assets/images/card4.jpg", id: 4, name: "card4" },
      { imgSrc: "./assets/images/card5.jpg", id: 5, name: "card5" },
      { imgSrc: "./assets/images/card6.jpg", id: 6, name: "card6" },
      { imgSrc: "./assets/images/card7.jpg", id: 7, name: "card7" },
      { imgSrc: "./assets/images/card8.jpg", id: 8, name: "card8" },
      { imgSrc: "./assets/images/card1.jpg", id: 9, name: "card1" },
      { imgSrc: "./assets/images/card2.jpg", id: 10, name: "card2" },
      { imgSrc: "./assets/images/card3.jpg", id: 11, name: "card3" },
      { imgSrc: "./assets/images/card4.jpg", id: 12, name: "card4" },
      { imgSrc: "./assets/images/card5.jpg", id: 13, name: "card5" },
      { imgSrc: "./assets/images/card6.jpg", id: 14, name: "card6" },
      { imgSrc: "./assets/images/card7.jpg", id: 15, name: "card7" },
      { imgSrc: "./assets/images/card8.jpg", id: 16, name: "card8" },
    ];
  
    //We need to shuffle the cards 🃏
    cardData.sort(() => Math.random() - 0.5);
  
    //We generate the cards ♣️
    cardData.forEach((item) => {
      const section = document.querySelector("section");
      const card = document.createElement("div");
      card.classList = "card";
  
      card.setAttribute("id", item.id);
      card.setAttribute("name", item.name);
  
      const face = document.createElement("img");
      face.classList = "face";
      face.src = item.imgSrc;
  
      const back = document.createElement("div");
      back.classList = "back";
  
      section.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);
  
      card.addEventListener("click", (e) => {
        console.log(e);
        //Run our flip animation
        face.classList.toggle("toggleCard");
        card.classList.toggle("toggleCard");
      });
    });
  
    //
  };
  
  const board = () => {
    console.log("i will fight you");
  };
  
  //Toggle Cards
  // document.addEventListener("click", (event) => {
  //   console.log(event);
  //   if(event.target === '')
  // });