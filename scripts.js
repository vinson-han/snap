/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
];
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

let originalData = [
  {
    id: Math.floor(Math.random() * 9999),
    seen: false,
    title: "Fresh Prince of Bel Air",
    img: "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg",
    rating: 7.9,
    genre: ["Comedy"],
    quote:
      "Hey baby, I noticed you noticing me and I just wanted to put you on notice that I noticed you too",
    description:
      "A streetwise, poor young man from Philadelphia is sent by his mother to live with his aunt, uncle and cousins in their Bel-Air mansion.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Curb Your Enthusiam",
    img: "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg",
    rating: 8.8,
    genre: ["Comedy"],
    quote:
      "Are you insane? Do you have any idea how much a hair transplant costs? It’s like buying a small house in the Midwest. You’re just giving that money away!",
    description:
      "Larry David stars as an over-the-top version of himself in this comedy series that shows how seemingly trivial details of day-to-day life can precipitate a catastrophic chain of events.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "East Los High",
    img: "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg",
    rating: 6.9,
    genre: ["Drama"],
    quote:
      "Are you insane? Do you have any idea how much a hair transplant costs? It’s like buying a small house in the Midwest. You’re just giving that money away!",

    description:
      "A group of friends at East Los High face the trials and tribulations of teenagers growing up in East Los Angeles.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "The Big Bang Theory",
    img: "https://m.media-amazon.com/images/I/81r5qYubjeL._AC_UF894,1000_QL80_.jpg",
    rating: 8.1,
    genre: ["Comedy", "Romance"],
    quote:
      "I've made mistakes, I've taken the wrong road. But now I'm back, and I'm here to make things right.",
    description:
      "A group of socially awkward scientists navigate life and relationships.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Friends",
    img: "https://m.media-amazon.com/images/I/71EvB26zGcL.jpg",
    rating: 8.9,
    genre: ["Romance", "Comedy"],
    quote:
      "I've made mistakes, I've taken the wrong road. But now I'm back, and I'm here to make things right.",
    description:
      "Follows the personal and professional lives of six twenty to thirty year-old friends living in the Manhattan borough of New York City.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Beverly Hills, 90210",
    img: "https://m.media-amazon.com/images/I/71ERBtSie9L._AC_UF894,1000_QL80_.jpg",
    rating: 6.5,
    genre: ["Drama", "Romance"],
    quote:
      "I've made mistakes, I've taken the wrong road. But now I'm back, and I'm here to make things right.",
    description:
      "A group of friends living in Beverly Hills, California make their way through life from their school days into adulthood.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Grey's Anatomy",
    img: "https://m.media-amazon.com/images/I/71qocOs-MoL._AC_UF894,1000_QL80_.jpg",
    rating: 7.6,
    genre: ["Drama", "Romance"],
    quote:
      "I've made mistakes, I've taken the wrong road. But now I'm back, and I'm here to make things right.",
    description:
      "A drama centered on the personal and professional lives of five surgical interns and their supervisors.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "The Office (US version)",
    img: "https://m.media-amazon.com/images/I/615MPacH9qL.jpg",
    rating: 9.0,
    genre: ["Comedy"],
    quote:
      "I've made mistakes, I've taken the wrong road. But now I'm back, and I'm here to make things right.",
    description:
      "A mockumentary on a group of typical office workers, where the workday consists of ego clashes, inappropriate behavior, and tedium.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Community",
    img: "https://m.media-amazon.com/images/I/71dhsiovf0L._AC_UF894,1000_QL80_.jpg",
    rating: 8.5,
    genre: ["Comedy"],
    quote:
      "Jealous much? I'm in the exclusive club of people with unread texts. It's like being too cool to check messages. But trust me, I don't want to be part of it. Gotta go delete texts from my mom, aka 'President Mom'. And you're all invited to my non-existent yacht party!",
    description:
      "A suspended lawyer is forced to enroll in a community college with an eccentric staff and student body.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Entourage",
    img: "https://m.media-amazon.com/images/I/61YfGocQKfL._AC_UF894,1000_QL80_.jpg",
    rating: 8.4,
    genre: ["Comedy", "Drama"],
    quote:
      "I'm sorry if I've been rude. I know I can be an asshole, but that's just because I'm so passionate.",
    description:
      "Film star, Vince Chase, navigates the vapid terrain of Los Angeles with a close circle of friends and his trusty agent.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "NCIS: Los Angeles",
    img: "https://m.media-amazon.com/images/I/71TPSShspkL._AC_UF894,1000_QL80_.jpg",
    rating: 6.8,
    genre: ["Action", "Crime", "Drama"],
    quote:
      "Everyone has a choice, G. No matter how insignificant it may seem, it's still a choice.",
    description:
      "The Naval Criminal Investigation Service's Office of Special Projects takes on the undercover work and the hard to crack cases in LA. Key agents are G. Callen and Sam Hanna, streets kids risen through the ranks.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Brooklyn Nine-Nine",
    img: "https://m.media-amazon.com/images/I/71N0JNzHtRL._AC_UF894,1000_QL80_.jpg",
    rating: 8.4,
    genre: ["Comedy", "Crime"],
    quote:
      "Attention, squad. The person who complains the least gets to ride shotgun with me to the crime scene. Everyone else, you're riding in the boring car with Boyle.",
    description:
      "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Parks and Recreation",
    img: "https://image.tmdb.org/t/p/original/dDuzrl9rUIBYieZjqmtNCdncrmZ.jpg",
    rating: 8.6,
    genre: ["Comedy"],
    quote: "Never half-ass two things. Whole-ass one thing.",
    description:
      "The absurd antics of an Indiana town's public officials as they pursue sundry projects to make their city a better place.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Modern Family",
    img: "https://i.pinimg.com/736x/6e/da/e6/6edae6e676718fa92d5feefdd667d508.jpg",
    rating: 8.5,
    genre: ["Drama", "Romance", "Comedy"],
    quote:
      "I may have lost my confidence for a while, but it's like Jay always says, 'You can't keep a good man down.' And I am a good man, and I'm gonna bounce back.",
    description:
      "Three different, but related, families face trials and tribulations in their own uniquely comedic ways.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Scandal",
    img: "https://m.media-amazon.com/images/I/61pAGDcFTCL._AC_UF894,1000_QL80_.jpg",
    rating: 7.7,
    genre: ["Drama", "Thriller"],
    quote:
      "We all have our limits. You just never know what they are until you reach them.",
    description:
      "A former White House Communications Director starts her own crisis management firm only to realize her clients are not the only ones with secrets.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Hawaii Five-0",
    img: "https://i.ebayimg.com/images/g/dX0AAOxy5fJR5Vdo/s-l400.jpg",
    rating: 7.4,
    genre: ["Action", "Crime", "Drama"],
    quote:
      "I've never met a guilty person who acted innocent who wasn't guilty.",
    description:
      "When Steve McGarrett returns home to Oahu to find his father's killer, the Governor offers him the chance to run his own task force: Five-0.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Criminal Minds",
    img: "https://m.media-amazon.com/images/I/61JiTl7FY-L._AC_UF894,1000_QL80_.jpg",
    rating: 8.5,
    genre: ["Crime", "Drama"],
    quote:
      "Everything happens for a reason, we just don't know what most of them are.",
    description:
      "A group of criminal profilers who work for the FBI as members of its Behavioral Analysis Unit (BAU) using behavioral analysis and profiling to help investigate crimes and find the suspect known as the unsub.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "Bosch",
    img: "https://image.tmdb.org/t/p/original/eVzOifpCfxG4xJV7QufoZFCj741.jpg",
    rating: 8.5,
    genre: ["Crime", "Drama"],
    quote: "Maybe it's not about the job. Maybe it's about finding the truth.",
    description:
      "An L.A.P.D. homicide detective works to solve the murder of a 13-year-old boy while standing trial in federal court for the murder of a serial killer.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "The O.C",
    img: "https://i.ebayimg.com/images/g/BasAAOSwgMNjeMge/s-l400.jpg",
    rating: 7.6,
    genre: ["Comedy", "Drama", "Romance"],
    quote:
      "I don't know about you, but I refuse to be a prisoner of my own needs.",
    description:
      "A troubled youth becomes embroiled in the lives of a close-knit group of people in the wealthy, upper-class neighborhood of Newport Beach, Orange County, California.",
  },
  {
    id: Math.floor(Math.random() * 999999),
    seen: false,
    title: "American Horrow Story",
    img: "https://i.ebayimg.com/images/g/3L8AAOSwOvNjK1M9/s-l1600.jpg",
    rating: 8.0,
    genre: ["Horror", "Drama", "Sci-Fi"],
    quote:
      "In this whole wide wicked world, the only thing you have to be afraid of is me.",
    description:
      "An anthology series centering on different characters and locations, showcasing different aspects of horror.",
  },
];

let data = [...originalData];

// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < data.length; i++) {
    let id = data[i].id;
    let title = data[i].title;
    let imageURL = data[i].img;
    let rating = data[i].rating;
    let genre = data[i].genre;
    let description = data[i].description;
    let quote = data[i].quote;
    let seen = data[i].seen;
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(
      nextCard,
      id,
      title,
      imageURL,
      rating,
      genre,
      description,
      quote,
      seen
    ); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

function editCardContent(
  card,
  id,
  newTitle,
  newImageURL,
  rating,
  genre,
  description,
  quote,
  seen
) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.innerHTML = `<a href='https://www.imdb.com/find/?s=tt&q=${newTitle}'>${newTitle}</a>`;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

  const cardRating = card.querySelector(".rating");
  cardRating.textContent = `Ratings : ${rating}`;

  const cardGenere = card.querySelector(".genre");

  let genreString = "";
  genre.forEach((element) => {
    genreString += `<a href='https://www.imdb.com/search/title/?genres=${element}'>${element}</a> `;
  });
  cardGenere.innerHTML = genreString;

  const cardDescription = card.querySelector(".description");
  cardDescription.textContent = description;

  const cardQuote = card.querySelector(".quote");

  cardQuote.addEventListener("click", () => {
    alert(quote);
  });

  const cardSeen = card.querySelector(".seen");

  cardSeen.textContent = seen ? "Watched" : "UnWatched";
  console.log(seen);

  cardSeen.addEventListener("click", () => {
    toogleSeen(id);
  });

  const cardDelete = card.querySelector(".delete");
  cardDelete.addEventListener("click", () => {
    deleteCard(id);
  });

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function toogleSeen(id) {
  let card = { ...originalData.find((item) => item.id === id) };
  card.seen = !card.seen;

  originalData = originalData.map((item) =>
    item.id === card.id ? card : item
  );
  data = originalData;

  showCards();
}

function deleteCard(id) {
  originalData = originalData.filter((item) => item.id !== id);
  data = originalData;
  showCards();
}

function quoteAlert() {
  console.log("Button Clicked");

  let number = originalData.length;
  let random = Math.floor(Math.random() * number);

  console.log(originalData[random], random);

  alert(
    originalData[random]
      ? `${originalData[random].quote} - ${originalData[random].title}`
      : ""
  );
}

function removeLastCard() {
  data.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

//Search By String
function search() {
  let input = document.getElementsByClassName("search");
  const searchValue = input[0].value.toLowerCase();

  input[0].value = "";

  if (searchValue)
    data = originalData.filter((d) =>
      d.title.toLocaleLowerCase().includes(searchValue)
    );
  else data = [...originalData];

  showCards();
}

function reset() {
  data = [...originalData];
  showCards();
}

function sortRating() {
  let valueRating = document.getElementById("sortRating").value;
  //use tenary operation if sort by asc | desc
  data = data.sort((a, b) =>
    valueRating === "asc" ? b.rating - a.rating : a.rating - b.rating
  );

  document.getElementById("sortAlpha").selectedIndex = -1;

  showCards();
}

function sortGenre() {
  let genreValue = document.getElementById("selectGenre").value;
  let valueRating = document.getElementById("sortRating").value;
  //use tenary operation if sort by asc | desc

  if (genreValue === "all") {
    data = [...originalData];
  } else
    data = data.filter((d) =>
      d.genre.some((x) => x.toLocaleLowerCase() === genreValue.toLowerCase())
    );

  console.log(data);

  data = data.sort((a, b) =>
    valueRating === "asc" ? b.rating - a.rating : a.rating - b.rating
  );

  showCards();
}

function sortAlpha() {
  let sortAlpha = document.getElementById("sortAlpha").value;
  document.getElementById("sortRating").selectedIndex = -1;

  data = data.sort((a, b) => {
    if (sortAlpha === "a") {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    } else {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0;
    }
  });

  showCards();
}

function displayAmount() {
  let number = document.getElementById("displayAmount").value;

  let limitData = [];
  if (number === "all") {
    limitData = [...originalData];
    document.getElementById("selectGenre").selectedIndex = -1;
  } else for (let x = 0; x < number; x++) limitData.push(data[x]);

  data = limitData;
  showCards();
}

//add eventlistenter for search
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".search").addEventListener("keypress", (e) => {
    e.key === "Enter" ? search() : "";
  });
});

// Reactor Notes
// -innerHTml -> XSS Attacks -> potential risk

//Last Feature to Add
//Add remove and Insert
//Add Favorate and Filter By Favorate?
