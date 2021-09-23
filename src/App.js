import "./styles.css";
import { useState } from "react";
const musicLibrary = {
  EDM: [
    { musicName: "The Nights", rating: "5/5" },
    { musicName: "Sweet Life", rating: "4/5" },
    { musicName: "Animals", rating: "4.5/5" },
    { musicName: "The Bloody Beatroots", rating: "3/5" },
    {
      musicName: "Tiesto & KSHMR feat. Vassy – “Secrets” (2014)",
      rating: "4/5"
    },
    {
      musicName: "David Guetta & Showtek feat. Vassy – “Bad” (2014)",
      rating: "3.5/5"
    }
  ],
  Rock: [
    { musicName: "Rockstar ft. NickelBack", rating: "4/5" },
    { musicName: "Smells like Teen Spirit ft. Nirvana", rating: "3.5/5" },
    { musicName: "Sweet Child O'Mine ft. Guns N'Roses", rating: "4/5" },
    { musicName: "You Shook Me All Night Long ft. AC/DC", rating: "4/5" },
    { musicName: "Kashmir ft. Led Zeppelen", rating: "5/5" }
  ],
  Jazz: [
    { musicName: "All Blues ft. Miles Davis", rating: "4/5" },
    { musicName: "Fly Me To The Moon ft. Frank Sinatra", rating: "4.5/5" },
    { musicName: "Billie Jean ft. Jamie Lancaster", rating: "3/5" },
    { musicName: "Moonlight Serenade ft. Frank Sinatra", rating: "4/5" },
    {
      musicName: "The Sunny side of the street ft. Dizzie Gillespie",
      rating: "3.5/5"
    }
  ],
  Dubstep: [
    { musicName: "Kill Everybody ft. Skrillex", rating: "4/5" },
    { musicName: "Bonfire ft. Knife Party", rating: "3/5" },
    { musicName: "Cokney Thug ft. Rusko", rating: "3.5/5" },
    { musicName: "Drops ft. Dubstep", rating: "4/5" },
    { musicName: "Where Are U Now ft. Diplo", rating: "5/5" }
  ],
  Techno: [
    { musicName: "Pacific State t. 808 State", rating: "3/5" },
    { musicName: "Kemkraft 400 ft. Zombie Nation", rating: "4/5" },
    { musicName: "Bang The Box ft. Jackmaster", rating: "3.5/5" },
    { musicName: "PlanetX ft. The Yellow Head", rating: "5/5" },
    { musicName: "Filth on Acid ft. Reinier Zonneveld", rating: "4/5" }
  ],
  Psy: [
    { musicName: "Sahara ft. Astrix", rating: "5/5" },
    { musicName: "Gurbax ft. Boom Shankar", rating: "5/5" },
    { musicName: "Bizzare Contact ft. Peaches on the moon", rating: "3/5" },
    { musicName: "Yellow Claw ft. Kaolo", rating: "5/5" },
    { musicName: "Galactic Symphony ft. Mandragora", rating: "5/5" }
  ],
  Pop: [
    { musicName: "Shape of you ft. Ed Sheeran", rating: "4/5" },
    { musicName: "One More Night ft. Maroon 5", rating: "4/5" },
    { musicName: "Closer ft. Chainsmokers", rating: "4/5" },
    { musicName: "Stay ft. Justin Bieber", rating: "4/5" },
    { musicName: "Call Me Maybe ft. Carly Rae Jepsen", rating: "4/5" }
  ]
};
let genre = Object.keys(musicLibrary);
export default function App() {
  const [state, setState] = useState("EDM");
  const clickHandler = (item) => {
    setState(item);
  };
  return (
    <div className="App">
      <h1>Music recommender</h1>

      <h3>Checkout my favorite music.Select a genre to get started.</h3>
      <ul>
        {genre.map((value, index) => {
          return (
            <button
              className="btn"
              onClick={() => clickHandler(value)}
              key={index}
            >
              {value}
            </button>
          );
        })}
      </ul>
      <hr />
      <div>
        <ul>
          {musicLibrary[state].map((value) => {
            return (
              <li
                style={{
                  listStyle: "none",
                  padding: "1rem",
                  border: "1px solid #D1D5DB",
                  width: "70%",
                  margin: "1rem ",
                  borderRadius: "0.5rem",
                  textAlign: "center",
                  width: "93%"
                }}
              >
                <div
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    paddingBottom: "1rem"
                  }}
                >
                  {value.musicName}
                </div>
                <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                  {value.rating}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
