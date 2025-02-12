let books = [
  {
    name: "Die Geheimnisse des Ozeans",
    author: "Clara Meer",
    likes: 1250,
    liked: true,
    price: 19.99,
    publishedYear: 2018,
    genre: "Fantasy",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein faszinierendes Abenteuerbuch, das mich von der ersten Seite an gefesselt hat.",
      },
      {
        name: "Bookworm84",
        comment:
          "Eine romantische Geschichte, die mein Herz berührt und mich zum Nachdenken gebracht hat.",
      },
      {
        name: "FantasyFanatic",
        comment:
          "Eine spannende Fantasiewelt, die ich nur schwer aus der Hand legen konnte.",
      },
      {
        name: "SciFiGuru",
        comment:
          "Ein cleverer Science-Fiction-Roman mit interessanten Zeitreise-Konzepten und Charakteren.",
      },
      {
        name: "NovelLover",
        comment:
          "Ein Buch, das voller magischer Überraschungen steckt und mich begeistert hat.",
      },
    ],
  },
  {
    name: "Der vergessene Pfad",
    author: "Maximilian Schwarz",
    likes: 980,
    liked: false,
    price: 14.5,
    publishedYear: 2021,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Die Farben des Himmels",
    author: "Laura Blau",
    likes: 1520,
    liked: true,
    price: 22.95,
    publishedYear: 2019,
    genre: "Romantik",
    comments: [
      {
        name: "LeserPeter",
        comment:
          "Die Handlung war fesselnd und die Charaktere unglaublich lebendig dargestellt.",
      },
      {
        name: "BookLover21",
        comment:
          "Ein romantisches Meisterwerk, das mich tief berührt und bewegt hat.",
      },
      {
        name: "FantasyNerd",
        comment:
          "Fantastische Welten und epische Abenteuer - genau mein Geschmack!",
      },
      {
        name: "SciFiEnthusiast",
        comment:
          "Die Zeitreise-Elemente waren genial und haben die Story spannend gemacht.",
      },
      {
        name: "ReadingAddict",
        comment:
          "Ein unvergessliches Buch, das mich auf eine magische Reise mitgenommen hat.",
      },
    ],
  },
  {
    name: "Das Rätsel der Zeit",
    author: "Alexander Weiss",
    likes: 750,
    liked: false,
    price: 18.0,
    publishedYear: 2020,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BuchKenner",
        comment:
          "Ein spannendes Abenteuer, das mich von Anfang an mitgerissen hat.",
      },
      {
        name: "LeseWurm",
        comment:
          "Die Liebesgeschichte war herzergreifend und wunderschön geschrieben.",
      },
    ],
  },
  {
    name: "Der letzte Wächter",
    author: "Sabine Grün",
    likes: 1300,
    liked: true,
    price: 16.75,
    publishedYear: 2017,
    genre: "Fantasy",
    comments: [],
  },
  {
    name: "Im Schatten des Mondes",
    author: "Philipp Silber",
    likes: 890,
    liked: false,
    price: 12.3,
    publishedYear: 2022,
    genre: "Science-Fiction",
    comments: [
      {
        name: "BücherLiebhaber",
        comment:
          "Eine magische Reise durch eine faszinierende Fantasiewelt, absolut fesselnd.",
      },
      {
        name: "Leseratte",
        comment:
          "Ein packender Science-Fiction-Roman, der mich zum Nachdenken gebracht hat.",
      },
    ],
  },
  {
    name: "Jenseits der Sterne",
    author: "Oliver Schwarz",
    likes: 1450,
    liked: true,
    price: 21.0,
    publishedYear: 2015,
    genre: "Science-Fiction",
    comments: [
      {
        name: "Leser123",
        comment:
          "Ein fesselndes Abenteuer, das mich von Anfang bis Ende mitgerissen hat.",
      },
    ],
  },
  {
    name: "Das verborgene Königreich",
    author: "Elena Gold",
    likes: 920,
    liked: false,
    price: 17.5,
    publishedYear: 2020,
    genre: "Fantasy",
    comments: [
      {
        name: "Bookworm92",
        comment:
          "Ein faszinierendes Buch, das mich von der ersten Seite an gefesselt hat.",
      },
    ],
  },
  {
    name: "Liebe in Zeiten des Krieges",
    author: "Emilia Rot",
    likes: 1800,
    liked: true,
    price: 19.99,
    publishedYear: 2016,
    genre: "Romantik",
    comments: [
      {
        name: "Bibliophile23",
        comment:
          "Die Fantasiewelt war so lebendig, ich konnte das Buch kaum aus der Hand legen.",
      },
      {
        name: "StorySeeker",
        comment:
          "Eine unglaublich berührende Liebesgeschichte, die mich tief bewegt hat.",
      },
      {
        name: "SciFiExplorer",
        comment:
          "Spannende Zukunftsvisionen und interessante Charaktere machten diesen Roman einzigartig.",
      },
    ],
  },
];

function renderAllFunction() {
  renderBookTitles();
  renderPrice();
  renderLikes();
  renderAuthor();
  renderReleaseDate();
  renderGenre();
}

function renderBookTitles() {
  let booksTitleRef = document.getElementById("title_content");
  let titlesContent = "";
  for (
    let indexBookTitles = 0;
    indexBookTitles < books.length;
    indexBookTitles++
  ) {
    titlesContent = books[0].name + "<br>";
  }
  booksTitleRef.innerHTML = titlesContent;
}

function renderPrice() {
  let priceRef = document.getElementById("price");
  for (let indexPrice = 0; indexPrice < books.length; indexPrice++) {
    priceRef.innerHTML = books[indexPrice].price;
  }
}

function renderLikes() {
  let likesRef = document.getElementById("liked");

  for (let indexLikes = 0; indexLikes < books.length; indexLikes++) {
    likesRef.innerHTML = books[indexLikes].likes;
  }
}

function renderAuthor() {
  let authorRef = document.getElementById("author");
  for (let indexAuthor = 0; indexAuthor < books.length; indexAuthor++) {
    authorRef.innerHTML = books[indexAuthor].author;
  }
}

function renderReleaseDate() {
  let releaseDateRef = document.getElementById("release_date");
  let releaseDateContent = " ";
  for (
    let indexReleaseDate = 0;indexReleaseDate < books.length;indexReleaseDate++) {
    releaseDateContent += books[indexReleaseDate].publishedYear;
  }
  releaseDateRef.innerHTML = releaseDateContent;
}

function renderGenre() {
  let genreRef = document.getElementById("genre");
  for (let indexGenre = 0; indexGenre < books.length; indexGenre++) {
    genreRef.innerHTML = books[indexGenre].genre;
  }
}

function getBooksInfoTemplate(index) {
  if (index < 0 || index >= books.length) {
    return `<p> Ungültiger Index </p>`;
  }

  const book = books[index];
  return `
    <div>
      <h2 id="title_content">${books[0].name}</h2>
      <img src="img/book-438935_640.png" alt="Buch" />
      <p id="price"></p>
      <p id="liked"></p>
      <p id="author"></p>
      <span id="release_date"></span>
      <span id="genre"></span>
    </div>

       <div>
      <h2 id="title_content">${books[1].name}</h2>
      <img src="img/book-438935_640.png" alt="Buch" />
      <p id="price"></p>
      <p id="liked"></p>
      <p id="author"></p>
      <span id="release_date"></span>
      <span id="genre"></span>
    </div>

       <div>
      <h2 id="title_content">${books[2].name}</h2>
      <img src="img/book-438935_640.png" alt="Buch" />
      <p id="price"></p>
      <p id="liked"></p>
      <p id="author"></p>
      <span id="release_date"></span>
      <span id="genre"></span>
    </div>

       <div>
      <h2 id="title_content">${books[3].name}</h2>
      <img src="img/book-438935_640.png" alt="Buch" />
      <p id="price"></p>
      <p id="liked"></p>
      <p id="author"></p>
      <span id="release_date"></span>
      <span id="genre"></span>
    </div>

      <div>
      <h2 id="title_content">${books[4].name}</h2>
      <img src="img/book-438935_640.png" alt="Buch" />
      <p id="price"></p>
      <p id="liked"></p>
      <p id="author"></p>
      <span id="release_date"></span>
      <span id="genre"></span>
     </div>

       <div>
      <h2 id="title_content">${books[5].name}</h2>
      <img src="img/book-438935_640.png" alt="Buch" />
      <p id="price"></p>
      <p id="liked"></p>
      <p id="author"></p>
      <span id="release_date"></span>
      <span id="genre"></span>
    </div>

       <div>
      <h2 id="title_content">${books[6].name}</h2>
      <img src="img/book-438935_640.png" alt="Buch" />
      <p id="price"></p>
      <p id="liked"></p>
      <p id="author"></p>
      <span id="release_date"></span>
      <span id="genre"></span>
    </div>

       <div>
      <h2 id="title_content">${books[7].name}</h2>
      <img src="img/book-438935_640.png" alt="Buch" />
      <p id="price"></p>
      <p id="liked"></p>
      <p id="author"></p>
      <span id="release_date"></span>
      <span id="genre"></span>
    </div>
       <div>
      <h2 id="title_content">${books[8].name}</h2>
      <img src="img/book-438935_640.png" alt="Buch" />
      <p id="price"></p>
      <p id="liked"></p>
      <p id="author"></p>
      <span id="release_date"></span>
      <span id="genre"></span>
    </div>

`;
}
