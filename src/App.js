import "./styles.css";
import { useState } from "react";
const musicLibrary = {
  EDM: [
    {
      musicName: "The Nights",
      rating: "5/5",
      description:
        "The Nights is a song by Swedish DJ and record producer Avicii and singer/songwriter Nicholas Furlong. On 1 December 2014, it was released as a digital download by PRMD Music and Universal Island on Avicii's The Days / Nights EP, then on 11 January 2015 in the United Kingdom."
    },
    {
      musicName: "Animals",
      rating: "4.5/5",
      description:
        "Animals is an instrumental by Dutch DJ and record producer Martin Garrix, released as a digital download on 17 June 2013 on iTunes."
    },
    {
      musicName: "The Bloody Beatroots",
      rating: "3/5",
      description:
        "The Bloody Beetroots is an Italian electronic dance music project of musician and producer Bob Rifo (also Sir Bob Cornelius Rifo and SBCR, born Simone Cogo). Established in late 2006, the Bloody Beetroots were initially a duo consisting of Bob Rifo and Tommy Tea, who later left in 2012"
    },
    {
      musicName: "Tiesto & KSHMR feat. Vassy – “Secrets” (2014)",
      rating: "4/5",
      description:
        "Secrets is song by Dutch DJ Tiësto and American producer KSHMR, featuring vocals from Australian singer Vassy. The song was released on March 16, 2015 through Musical Freedom, while distribution was handled by Universal Music."
    },
    {
      musicName: "David Guetta & Showtek feat. Vassy – “Bad” (2014)",
      rating: "3.5/5",
      description:
        "Bad (also stylised as BAD!) is a song by French music producer and DJ David Guetta and Dutch production duo Showtek, featuring vocals from Australian singer Vassy.[1][2] It was released on 17 March 2014 as a single of the deluxe version from Guetta's studio album"
    }
  ],
  Rock: [
    {
      musicName: "Rockstar ft. NickelBack",
      rating: "4/5",
      description:
        "What is the story behind Nickelback? Nickelback started out as a mid-90s cover band in Alberta, because of course they did. They recorded their first album of original songs, Curb, in 1996. When Curb came out, the band consisted of Chad Kroeger and his two brothers Mike (bass) and Brandon (drums), as well as Ryan Peake on guitar."
    },
    {
      musicName: "Smells like Teen Spirit ft. Nirvana",
      rating: "3.5/5",
      description:
        "Rockstar is the fifth U.S. single by the Canadian rock band Nickelback from their fifth album, All the Right Reasons (2005). It was initially only released in the United States and Canada, and has since been re-released worldwide."
    },
    {
      musicName: "Sweet Child O'Mine ft. Guns N'Roses",
      rating: "4/5",
      description: `Sweet Child o' Mine" is a song by American rock band Guns N' Roses. It appeared on their debut album Appetite for Destruction. The song was released in June 1988 as the album's third single, and topped the Billboard Hot 100 chart,[6] becoming the band's only number 1 US single. `
    },
    {
      musicName: "You Shook Me All Night Long ft. AC/DC",
      rating: "4/5",
      description:
        "You Shook Me All Night Long is a song by Australian hard rock band AC/DC, from the album Back in Black. The song also reappeared on their later album Who Made Who. It is AC/DC's first single with Brian Johnson as the lead singer, replacing Bon Scott who officially died of alcohol poisoning in February 1980, though there have been allegations he succumbed to a drug overdose combined with alcohol"
    },
    {
      musicName: "Kashmir ft. Led Zeppelen",
      rating: "5/5",
      description:
        "Kashmir is a song by the English rock band Led Zeppelin. Included on their sixth album Physical Graffiti (1975), it was written by Jimmy Page and Robert Plant with contributions from John Bonham over a period of three years with lyrics dating to 1973."
    }
  ],
  Jazz: [
    {
      musicName: "All Blues ft. Miles Davis",
      rating: "4/5",
      description: `All Blues is a jazz composition by Miles Davis first appearing on the influential 1959 album Kind of Blue. It is a twelve-bar blues in 6
    8; the chord sequence is that of a basic blues and made up entirely of seventh chords, with a ♭VI in the turnaround instead of just the usual V chord.`
    },
    {
      musicName: "Fly Me To The Moon ft. Frank Sinatra",
      rating: "4.5/5",
      description:
        "Fly Me to the Moon, originally titled In Other Words, is a song written in 1954 by Bart Howard. Kaye Ballard made the first recording of the song the year it was written. Frank Sinatra's 1964 version was closely associated with the Apollo missions to the Moon."
    },

    {
      musicName: "Moonlight Serenade ft. Frank Sinatra",
      rating: "4/5",
      description:
        "Moonlight Sinatra is a studio album by Frank Sinatra, released in March 1966. All of the tracks on the album are centered on the Moon, and were arranged and conducted by Nelson Riddle and his orchestra."
    }
  ],
  Dubstep: [
    {
      musicName: "Kill Everybody ft. Skrillex",
      rating: "4/5",
      description:
        "Scary Monsters and Nice Sprites is the second extended play (EP) by American electronic music producer Skrillex. It was released exclusively through Beatport on October 22, 2010 through mau5trap and Big Beat Records, while being released on December 20 for digital download via other online retailers and on March 1, 2011 as a physical release"
    },
    {
      musicName: "Bonfire ft. Knife Party",
      rating: "3/5",
      description:
        "Rage Valley is the second EP by the Australian electro house duo Knife Party.[2] It was released 27 May 2012 on Beatport and on 3 June 2012 on iTunes. The title track was originally named Fuck Em but was changed for what Knife Party described as secret shady reasons."
    },
    {
      musicName: "Cokney Thug ft. Rusko",
      rating: "3.5/5",
      description:
        "When, in 2007, London superclub Fabric wanted to put out its first mix CD dedicated to the burgeoning genre of dubstep, it didn't go to any of the more established names: Skream or Benga, Kode9 or the Digital Mystiks. Instead, FabricLive37 passed the baton to a pair of young bucks – west London DJ/producer Caspa and his Leeds-born friend and collaborator, Rusko."
    },
    {
      musicName: "Drops ",
      rating: "4/5",
      description:
        "What is a dubstep drop? In dubstep, the drop involves a heavy full bass line and commonly a wobble or vowel bass accompanied by a strong shuffling beat. There can be emotional melodies combined with varies of common dubstep bass lines."
    },
    {
      musicName: "Where Are U Now ft. Diplo",
      rating: "5/5",
      description:
        "Where Are Ü Now is a song produced by American EDM artists Skrillex and Diplo under their collaborative effort Jack Ü, with vocals from Canadian singer Justin Bieber."
    }
  ],
  Techno: [
    {
      musicName: "Pacific State t. 808 State",
      rating: "3/5",
      description:
        "808 State are an English electronic music group formed in 1987 in Manchester,[3] taking their name from the Roland TR-808 drum machine."
    },
    {
      musicName: "Kemkraft 400 ft. Zombie Nation",
      rating: "4/5",
      description:
        "Kernkraft 400 (English: Nuclear Energy 400) is a song performed by German techno artist Zombie Nation and the first single from their album Leichenschmaus. Released in 1999, it peaked at number 22 in Germany in February 2000."
    },
    {
      musicName: "Bang The Box ft. Jackmaster",
      rating: "3.5/5",
      description:
        "‘Bang The Box (Slam remix)’ retains the all-conquering vocal of the original, but plunges the track down into propulsive depths with more aggressive percussion and atmospheric synth stabs."
    },
    {
      musicName: "PlanetX ft. The Yellow Head",
      rating: "5/5",
      description:
        "If techno does not cheer you up, get better speakers.-The Yellow Head"
    }
  ],
  Psy: [
    {
      musicName: "Sahara ft. Astrix",
      rating: "5/5",
      description:
        " It was just released on Ace Ventura's compilation 'Psychedelic Awakening' on Future Music Records. Enjoy! Astrix has been one of the leading PsyTrance producers & DJs in the world for more than a decade, carrying his musical message of psychedelic emotional uplifting trance to every corner of the world, to huge festivals (EDC, Burning Man, Tomorrowland, Ozora, Universo Paralello, XXXperience), to the biggest urban clubs & underground events."
    },
    {
      musicName: "Gurbax ft. Boom Shankar",
      rating: "5/5",
      description:
        "Check out Gurbax's first fully crowd-funded music video for his track Boom Shankar. All Gurbax music can be streamed & downloaded at https://soundcloud.com/kunaal-gurbaxani"
    },
    {
      musicName: "Bizzare Contact ft. Peaches on the moon",
      rating: "3/5",
      description:
        "I dont have any rights for this song. I made it for fun.Artist and owner: Bizzare Contact"
    },
    {
      musicName: "Yellow Claw ft. Kaolo",
      rating: "5/5",
      description:
        "The official Mad Decent YouTube release of Yellow Claw - Kaolo Pt.2 "
    },
    {
      musicName: "Galactic Symphony ft. Mandragora",
      rating: "5/5",
      description:
        "Hi, my name is Mandragora, I am a time traveller from 1354, while I was looking for weeds in the forest I fell into a wormhole, I traveled through infinite alternate realities for like a year, after I got bored of all that cosmic stuff I decided to camp on year 2012, then I found this weird music making box and I knew something big was coming."
    }
  ],
  Pop: [
    {
      musicName: "Shape of you ft. Ed Sheeran",
      rating: "4/5",
      description:
        "Shape of You peaked at number-one on the singles charts of 34 countries, including the US Billboard Hot 100 (later becoming the best performing song of 2017), as well as the UK, Australian and Canadian singles charts."
    },
    {
      musicName: "One More Night ft. Maroon 5",
      rating: "4/5",
      description:
        "One More Night is a song performed by American pop rock band Maroon 5. The song was released on June 19, 2012, as the second single from their fourth studio album Overexposed (2012)"
    },
    {
      musicName: "Closer ft. Chainsmokers",
      rating: "4/5",
      description:
        "Closer is a song by American DJ duo the Chainsmokers featuring American singer Halsey. Andrew Taggart (one half of the Chainsmokers) also provides his vocals in the song."
    },
    {
      musicName: "Stay ft. Justin Bieber",
      rating: "4/5",
      description:
        "Stay (stylized in all caps) is a song by Australian rapper and singer the Kid Laroi and Canadian singer Justin Bieber."
    },
    {
      musicName: "Call Me Maybe ft. Carly Rae Jepsen",
      rating: "4/5",
      description:
        "Call Me Maybe is a song recorded by Canadian singer-songwriter Carly Rae Jepsen[1] for her EP Curiosity (2012) and later appeared on her second studio album and first international album Kiss (2012). "
    }
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
                <div style={{ fontSize: "0.9rem" }}>{value.description}</div>
                <div
                  style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    padding: "1rem 0rem 0rem 0rem"
                  }}
                >
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
