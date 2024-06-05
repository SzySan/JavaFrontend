export const Ligue1TopScorers = {
  get: 'players/topscorers',
  parameters: {
    league: '61',
    season: '2023'
  },
  errors: [],
  results: 20,
  paging: {
    current: 1,
    total: 1
  },
  response: [
    {
      player: {
        id: 278,
        name: 'K. Mbappé',
        firstname: 'Kylian',
        lastname: 'Mbappé Lottin',
        age: 26,
        birth: {
          date: '1998-12-20',
          place: 'Paris',
          country: 'France'
        },
        nationality: 'France',
        height: '178 cm',
        weight: '75 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/278.png'
      },
      statistics: [
        {
          team: {
            id: 85,
            name: 'Paris Saint Germain',
            logo: 'https://media.api-sports.io/football/teams/85.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 29,
            lineups: 24,
            minutes: 2159,
            number: null,
            position: 'Attacker',
            rating: '7.917241',
            captain: false
          },
          substitutes: {
            in: 5,
            out: 5,
            bench: 7
          },
          shots: {
            total: 91,
            on: 59
          },
          goals: {
            total: 27,
            conceded: 0,
            assists: 7,
            saves: null
          },
          passes: {
            total: 931,
            key: 40,
            accuracy: 27
          },
          tackles: {
            total: 4,
            blocks: null,
            interceptions: 2
          },
          duels: {
            total: 224,
            won: 103
          },
          dribbles: {
            attempts: 123,
            success: 61,
            past: null
          },
          fouls: {
            drawn: 38,
            committed: 19
          },
          cards: {
            yellow: 4,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 6,
            missed: 2,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 8489,
        name: 'J. David',
        firstname: 'Jonathan Christian',
        lastname: 'David',
        age: 24,
        birth: {
          date: '2000-01-14',
          place: 'New York',
          country: 'USA'
        },
        nationality: 'Canada',
        height: '175 cm',
        weight: '70 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/8489.png'
      },
      statistics: [
        {
          team: {
            id: 79,
            name: 'Lille',
            logo: 'https://media.api-sports.io/football/teams/79.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 34,
            lineups: 30,
            minutes: 2640,
            number: null,
            position: 'Attacker',
            rating: '7.230303',
            captain: false
          },
          substitutes: {
            in: 4,
            out: 16,
            bench: 4
          },
          shots: {
            total: 65,
            on: 47
          },
          goals: {
            total: 19,
            conceded: 0,
            assists: 4,
            saves: null
          },
          passes: {
            total: 649,
            key: 32,
            accuracy: 15
          },
          tackles: {
            total: 26,
            blocks: null,
            interceptions: 9
          },
          duels: {
            total: 292,
            won: 118
          },
          dribbles: {
            attempts: 34,
            success: 15,
            past: null
          },
          fouls: {
            drawn: 56,
            committed: 29
          },
          cards: {
            yellow: 4,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 2,
            missed: 1,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 1467,
        name: 'A. Lacazette',
        firstname: 'Alexandre Armand',
        lastname: 'Lacazette',
        age: 33,
        birth: {
          date: '1991-05-28',
          place: 'Lyon',
          country: 'France'
        },
        nationality: 'France',
        height: '175 cm',
        weight: '73 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/1467.png'
      },
      statistics: [
        {
          team: {
            id: 80,
            name: 'Lyon',
            logo: 'https://media.api-sports.io/football/teams/80.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 29,
            lineups: 27,
            minutes: 2306,
            number: null,
            position: 'Attacker',
            rating: '7.234482',
            captain: false
          },
          substitutes: {
            in: 2,
            out: 14,
            bench: 2
          },
          shots: {
            total: 57,
            on: 36
          },
          goals: {
            total: 19,
            conceded: 0,
            assists: 2,
            saves: null
          },
          passes: {
            total: 543,
            key: 21,
            accuracy: 13
          },
          tackles: {
            total: 19,
            blocks: 3,
            interceptions: 8
          },
          duels: {
            total: 260,
            won: 104
          },
          dribbles: {
            attempts: 39,
            success: 22,
            past: null
          },
          fouls: {
            drawn: 36,
            committed: 50
          },
          cards: {
            yellow: 3,
            yellowred: 0,
            red: 1
          },
          penalty: {
            won: null,
            commited: null,
            scored: 2,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 1465,
        name: 'P. Aubameyang',
        firstname: 'Pierre-Emerick Emiliano Franço',
        lastname: 'Aubameyang',
        age: 35,
        birth: {
          date: '1989-06-18',
          place: 'Laval',
          country: 'France'
        },
        nationality: 'Gabon',
        height: '187 cm',
        weight: '80 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/1465.png'
      },
      statistics: [
        {
          team: {
            id: 81,
            name: 'Marseille',
            logo: 'https://media.api-sports.io/football/teams/81.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 34,
            lineups: 30,
            minutes: 2628,
            number: null,
            position: 'Attacker',
            rating: '7.232352',
            captain: false
          },
          substitutes: {
            in: 4,
            out: 10,
            bench: 4
          },
          shots: {
            total: 90,
            on: 51
          },
          goals: {
            total: 17,
            conceded: 0,
            assists: 8,
            saves: null
          },
          passes: {
            total: 610,
            key: 27,
            accuracy: 12
          },
          tackles: {
            total: 22,
            blocks: 5,
            interceptions: 9
          },
          duels: {
            total: 187,
            won: 86
          },
          dribbles: {
            attempts: 32,
            success: 18,
            past: null
          },
          fouls: {
            drawn: 20,
            committed: 9
          },
          cards: {
            yellow: 4,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 4,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 2059,
        name: 'W. Ben Yedder',
        firstname: 'Wissam',
        lastname: 'Ben Yedder',
        age: 34,
        birth: {
          date: '1990-08-12',
          place: 'Sarcelles',
          country: 'France'
        },
        nationality: 'France',
        height: '170 cm',
        weight: '68 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/2059.png'
      },
      statistics: [
        {
          team: {
            id: 91,
            name: 'Monaco',
            logo: 'https://media.api-sports.io/football/teams/91.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 32,
            lineups: 26,
            minutes: 2323,
            number: null,
            position: 'Attacker',
            rating: '7.128125',
            captain: false
          },
          substitutes: {
            in: 6,
            out: 12,
            bench: 7
          },
          shots: {
            total: 52,
            on: 31
          },
          goals: {
            total: 16,
            conceded: 0,
            assists: 2,
            saves: null
          },
          passes: {
            total: 738,
            key: 38,
            accuracy: 17
          },
          tackles: {
            total: 4,
            blocks: null,
            interceptions: 8
          },
          duels: {
            total: 169,
            won: 56
          },
          dribbles: {
            attempts: 44,
            success: 17,
            past: null
          },
          fouls: {
            drawn: 20,
            committed: 11
          },
          cards: {
            yellow: 2,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 1,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 93016,
        name: 'T. Dallinga',
        firstname: 'Thijs',
        lastname: 'Dallinga',
        age: 24,
        birth: {
          date: '2000-08-03',
          place: 'Groningen',
          country: 'Netherlands'
        },
        nationality: 'Netherlands',
        height: '180 cm',
        weight: null,
        injured: false,
        photo: 'https://media.api-sports.io/football/players/93016.png'
      },
      statistics: [
        {
          team: {
            id: 96,
            name: 'Toulouse',
            logo: 'https://media.api-sports.io/football/teams/96.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 33,
            lineups: 28,
            minutes: 2517,
            number: null,
            position: 'Attacker',
            rating: '7.115151',
            captain: false
          },
          substitutes: {
            in: 5,
            out: 12,
            bench: 5
          },
          shots: {
            total: 64,
            on: 34
          },
          goals: {
            total: 14,
            conceded: 0,
            assists: 2,
            saves: null
          },
          passes: {
            total: 603,
            key: 18,
            accuracy: 12
          },
          tackles: {
            total: 29,
            blocks: 4,
            interceptions: 3
          },
          duels: {
            total: 282,
            won: 153
          },
          dribbles: {
            attempts: 34,
            success: 20,
            past: null
          },
          fouls: {
            drawn: 45,
            committed: 37
          },
          cards: {
            yellow: 6,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 1,
            missed: 2,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 41585,
        name: 'Gonçalo Ramos',
        firstname: 'Gonçalo',
        lastname: 'Matias Ramos',
        age: 23,
        birth: {
          date: '2001-06-20',
          place: 'Lisboa',
          country: 'Portugal'
        },
        nationality: 'Portugal',
        height: '185 cm',
        weight: '79 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/41585.png'
      },
      statistics: [
        {
          team: {
            id: 85,
            name: 'Paris Saint Germain',
            logo: 'https://media.api-sports.io/football/teams/85.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 29,
            lineups: 16,
            minutes: 1419,
            number: null,
            position: 'Attacker',
            rating: '7.188888',
            captain: false
          },
          substitutes: {
            in: 13,
            out: 13,
            bench: 16
          },
          shots: {
            total: 36,
            on: 21
          },
          goals: {
            total: 11,
            conceded: 0,
            assists: 1,
            saves: null
          },
          passes: {
            total: 392,
            key: 16,
            accuracy: 10
          },
          tackles: {
            total: 25,
            blocks: 2,
            interceptions: 5
          },
          duels: {
            total: 166,
            won: 85
          },
          dribbles: {
            attempts: 19,
            success: 8,
            past: null
          },
          fouls: {
            drawn: 22,
            committed: 19
          },
          cards: {
            yellow: 1,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 1,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 69971,
        name: 'T. Moffi',
        firstname: 'Teremas Igobor',
        lastname: 'Moffi',
        age: 25,
        birth: {
          date: '1999-05-25',
          place: null,
          country: 'Nigeria'
        },
        nationality: 'Nigeria',
        height: '188 cm',
        weight: '87 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/69971.png'
      },
      statistics: [
        {
          team: {
            id: 84,
            name: 'Nice',
            logo: 'https://media.api-sports.io/football/teams/84.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 30,
            lineups: 23,
            minutes: 1960,
            number: null,
            position: 'Attacker',
            rating: '6.966666',
            captain: false
          },
          substitutes: {
            in: 7,
            out: 18,
            bench: 7
          },
          shots: {
            total: 43,
            on: 25
          },
          goals: {
            total: 11,
            conceded: 0,
            assists: 2,
            saves: null
          },
          passes: {
            total: 373,
            key: 22,
            accuracy: 9
          },
          tackles: {
            total: 7,
            blocks: 1,
            interceptions: 3
          },
          duels: {
            total: 191,
            won: 65
          },
          dribbles: {
            attempts: 32,
            success: 19,
            past: null
          },
          fouls: {
            drawn: 19,
            committed: 32
          },
          cards: {
            yellow: 4,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 3,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 147831,
        name: 'A. Kalimuendo',
        firstname: 'Arnaud',
        lastname: 'Kalimuendo-Muinga',
        age: 22,
        birth: {
          date: '2002-01-20',
          place: 'Suresnes',
          country: 'France'
        },
        nationality: 'France',
        height: '175 cm',
        weight: '63 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/147831.png'
      },
      statistics: [
        {
          team: {
            id: 94,
            name: 'Rennes',
            logo: 'https://media.api-sports.io/football/teams/94.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 30,
            lineups: 25,
            minutes: 2152,
            number: null,
            position: 'Attacker',
            rating: '7.003333',
            captain: false
          },
          substitutes: {
            in: 5,
            out: 19,
            bench: 5
          },
          shots: {
            total: 41,
            on: 24
          },
          goals: {
            total: 10,
            conceded: 0,
            assists: 1,
            saves: null
          },
          passes: {
            total: 486,
            key: 28,
            accuracy: 13
          },
          tackles: {
            total: 5,
            blocks: 2,
            interceptions: 4
          },
          duels: {
            total: 228,
            won: 78
          },
          dribbles: {
            attempts: 42,
            success: 17,
            past: null
          },
          fouls: {
            drawn: 50,
            committed: 28
          },
          cards: {
            yellow: 6,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 2,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 1101,
        name: 'T. Minamino',
        firstname: 'Takumi',
        lastname: 'Minamino',
        age: 29,
        birth: {
          date: '1995-01-16',
          place: 'Osaka',
          country: 'Japan'
        },
        nationality: 'Japan',
        height: '174 cm',
        weight: '68 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/1101.png'
      },
      statistics: [
        {
          team: {
            id: 91,
            name: 'Monaco',
            logo: 'https://media.api-sports.io/football/teams/91.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 30,
            lineups: 25,
            minutes: 2128,
            number: null,
            position: 'Midfielder',
            rating: '7.243333',
            captain: false
          },
          substitutes: {
            in: 5,
            out: 16,
            bench: 5
          },
          shots: {
            total: 42,
            on: 28
          },
          goals: {
            total: 9,
            conceded: 0,
            assists: 6,
            saves: null
          },
          passes: {
            total: 833,
            key: 35,
            accuracy: 21
          },
          tackles: {
            total: 34,
            blocks: 1,
            interceptions: 11
          },
          duels: {
            total: 213,
            won: 87
          },
          dribbles: {
            attempts: 38,
            success: 15,
            past: null
          },
          fouls: {
            drawn: 32,
            committed: 30
          },
          cards: {
            yellow: 4,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 0,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 21443,
        name: 'T. Savanier',
        firstname: 'Téji Tedy',
        lastname: 'Savanier',
        age: 33,
        birth: {
          date: '1991-12-22',
          place: 'Montpellier',
          country: 'France'
        },
        nationality: 'France',
        height: '172 cm',
        weight: '69 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/21443.png'
      },
      statistics: [
        {
          team: {
            id: 82,
            name: 'Montpellier',
            logo: 'https://media.api-sports.io/football/teams/82.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 32,
            lineups: 32,
            minutes: 2777,
            number: null,
            position: 'Midfielder',
            rating: '7.518750',
            captain: false
          },
          substitutes: {
            in: 0,
            out: 12,
            bench: 0
          },
          shots: {
            total: 58,
            on: 29
          },
          goals: {
            total: 9,
            conceded: 0,
            assists: 7,
            saves: null
          },
          passes: {
            total: 1627,
            key: 96,
            accuracy: 38
          },
          tackles: {
            total: 38,
            blocks: 8,
            interceptions: 33
          },
          duels: {
            total: 393,
            won: 194
          },
          dribbles: {
            attempts: 97,
            success: 55,
            past: null
          },
          fouls: {
            drawn: 80,
            committed: 41
          },
          cards: {
            yellow: 8,
            yellowred: 0,
            red: 1
          },
          penalty: {
            won: null,
            commited: null,
            scored: 7,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 2206,
        name: 'B. Bourigeaud',
        firstname: 'Benjamin',
        lastname: 'Bourigeaud',
        age: 30,
        birth: {
          date: '1994-01-14',
          place: 'Calais',
          country: 'France'
        },
        nationality: 'France',
        height: '178 cm',
        weight: '70 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/2206.png'
      },
      statistics: [
        {
          team: {
            id: 94,
            name: 'Rennes',
            logo: 'https://media.api-sports.io/football/teams/94.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 32,
            lineups: 29,
            minutes: 2437,
            number: null,
            position: 'Midfielder',
            rating: '7.303125',
            captain: false
          },
          substitutes: {
            in: 3,
            out: 17,
            bench: 3
          },
          shots: {
            total: 35,
            on: 17
          },
          goals: {
            total: 9,
            conceded: 0,
            assists: 6,
            saves: null
          },
          passes: {
            total: 1352,
            key: 70,
            accuracy: 34
          },
          tackles: {
            total: 31,
            blocks: 2,
            interceptions: 22
          },
          duels: {
            total: 158,
            won: 65
          },
          dribbles: {
            attempts: 24,
            success: 10,
            past: null
          },
          fouls: {
            drawn: 13,
            committed: 16
          },
          cards: {
            yellow: 1,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 7,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 57446,
        name: 'A. Adams',
        firstname: 'Akor Jerome',
        lastname: 'Adams',
        age: 24,
        birth: {
          date: '2000-01-29',
          place: null,
          country: 'Nigeria'
        },
        nationality: 'Nigeria',
        height: '190 cm',
        weight: '92 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/57446.png'
      },
      statistics: [
        {
          team: {
            id: 82,
            name: 'Montpellier',
            logo: 'https://media.api-sports.io/football/teams/82.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 32,
            lineups: 27,
            minutes: 2264,
            number: null,
            position: 'Attacker',
            rating: '6.771875',
            captain: false
          },
          substitutes: {
            in: 5,
            out: 17,
            bench: 6
          },
          shots: {
            total: 57,
            on: 33
          },
          goals: {
            total: 8,
            conceded: 0,
            assists: 1,
            saves: null
          },
          passes: {
            total: 374,
            key: 18,
            accuracy: 8
          },
          tackles: {
            total: 12,
            blocks: 2,
            interceptions: 5
          },
          duels: {
            total: 265,
            won: 102
          },
          dribbles: {
            attempts: 41,
            success: 14,
            past: null
          },
          fouls: {
            drawn: 23,
            committed: 39
          },
          cards: {
            yellow: 2,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 0,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 203762,
        name: 'E. Emegha',
        firstname: 'Emanuel',
        lastname: 'Esseh Emegha',
        age: 21,
        birth: {
          date: '2003-02-03',
          place: 'Den Haag',
          country: 'Netherlands'
        },
        nationality: 'Netherlands',
        height: '195 cm',
        weight: '63 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/203762.png'
      },
      statistics: [
        {
          team: {
            id: 95,
            name: 'Strasbourg',
            logo: 'https://media.api-sports.io/football/teams/95.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 28,
            lineups: 23,
            minutes: 2087,
            number: null,
            position: 'Attacker',
            rating: '6.664285',
            captain: false
          },
          substitutes: {
            in: 5,
            out: 15,
            bench: 5
          },
          shots: {
            total: 41,
            on: 21
          },
          goals: {
            total: 8,
            conceded: 0,
            assists: 1,
            saves: null
          },
          passes: {
            total: 294,
            key: 9,
            accuracy: 7
          },
          tackles: {
            total: 8,
            blocks: 3,
            interceptions: 2
          },
          duels: {
            total: 223,
            won: 75
          },
          dribbles: {
            attempts: 32,
            success: 10,
            past: null
          },
          fouls: {
            drawn: 24,
            committed: 26
          },
          cards: {
            yellow: 3,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 0,
            missed: 1,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 200873,
        name: 'M. Bamba',
        firstname: 'Mohamed',
        lastname: 'Bamba',
        age: 23,
        birth: {
          date: '2001-12-10',
          place: null,
          country: "Côte d'Ivoire"
        },
        nationality: "Côte d'Ivoire",
        height: null,
        weight: null,
        injured: false,
        photo: 'https://media.api-sports.io/football/players/200873.png'
      },
      statistics: [
        {
          team: {
            id: 97,
            name: 'Lorient',
            logo: 'https://media.api-sports.io/football/teams/97.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 16,
            lineups: 14,
            minutes: 1149,
            number: null,
            position: 'Attacker',
            rating: '7.118750',
            captain: false
          },
          substitutes: {
            in: 2,
            out: 13,
            bench: 2
          },
          shots: {
            total: 30,
            on: 18
          },
          goals: {
            total: 8,
            conceded: 0,
            assists: 3,
            saves: null
          },
          passes: {
            total: 252,
            key: 14,
            accuracy: 11
          },
          tackles: {
            total: 14,
            blocks: 1,
            interceptions: 2
          },
          duels: {
            total: 160,
            won: 62
          },
          dribbles: {
            attempts: 28,
            success: 11,
            past: null
          },
          fouls: {
            drawn: 14,
            committed: 22
          },
          cards: {
            yellow: 3,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 1,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 162707,
        name: 'E. Wahi',
        firstname: 'Sepe Elye',
        lastname: 'Wahi',
        age: 21,
        birth: {
          date: '2003-01-02',
          place: null,
          country: 'France'
        },
        nationality: 'France',
        height: '184 cm',
        weight: '74 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/162707.png'
      },
      statistics: [
        {
          team: {
            id: 116,
            name: 'Lens',
            logo: 'https://media.api-sports.io/football/teams/116.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 26,
            lineups: 19,
            minutes: 1610,
            number: null,
            position: 'Attacker',
            rating: '6.673076',
            captain: false
          },
          substitutes: {
            in: 7,
            out: 16,
            bench: 8
          },
          shots: {
            total: 44,
            on: 29
          },
          goals: {
            total: 8,
            conceded: 0,
            assists: 2,
            saves: null
          },
          passes: {
            total: 267,
            key: 13,
            accuracy: 7
          },
          tackles: {
            total: 6,
            blocks: 1,
            interceptions: 3
          },
          duels: {
            total: 142,
            won: 47
          },
          dribbles: {
            attempts: 35,
            success: 15,
            past: null
          },
          fouls: {
            drawn: 15,
            committed: 19
          },
          cards: {
            yellow: 9,
            yellowred: 1,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 1,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 2214,
        name: 'R. Del Castillo',
        firstname: 'Romain',
        lastname: 'Del Castillo',
        age: 28,
        birth: {
          date: '1996-03-29',
          place: 'Lyon',
          country: 'France'
        },
        nationality: 'France',
        height: '172 cm',
        weight: '60 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/2214.png'
      },
      statistics: [
        {
          team: {
            id: 106,
            name: 'Stade Brestois 29',
            logo: 'https://media.api-sports.io/football/teams/106.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 33,
            lineups: 30,
            minutes: 2521,
            number: null,
            position: 'Midfielder',
            rating: '7.445454',
            captain: false
          },
          substitutes: {
            in: 3,
            out: 27,
            bench: 3
          },
          shots: {
            total: 33,
            on: 17
          },
          goals: {
            total: 8,
            conceded: 0,
            assists: 8,
            saves: null
          },
          passes: {
            total: 1166,
            key: 89,
            accuracy: 26
          },
          tackles: {
            total: 46,
            blocks: 1,
            interceptions: 9
          },
          duels: {
            total: 433,
            won: 201
          },
          dribbles: {
            attempts: 152,
            success: 75,
            past: null
          },
          fouls: {
            drawn: 58,
            committed: 21
          },
          cards: {
            yellow: 4,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 3,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 2668,
        name: 'Mostafa Mohamed',
        firstname: 'Mostafa Mohamed Ahmed',
        lastname: 'Abdalla',
        age: 27,
        birth: {
          date: '1997-11-28',
          place: 'Giza',
          country: 'Egypt'
        },
        nationality: 'Egypt',
        height: '185 cm',
        weight: '78 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/2668.png'
      },
      statistics: [
        {
          team: {
            id: 83,
            name: 'Nantes',
            logo: 'https://media.api-sports.io/football/teams/83.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 29,
            lineups: 24,
            minutes: 2015,
            number: null,
            position: 'Attacker',
            rating: '7.031034',
            captain: false
          },
          substitutes: {
            in: 5,
            out: 18,
            bench: 5
          },
          shots: {
            total: 49,
            on: 26
          },
          goals: {
            total: 8,
            conceded: 0,
            assists: 2,
            saves: null
          },
          passes: {
            total: 351,
            key: 23,
            accuracy: 8
          },
          tackles: {
            total: 21,
            blocks: 5,
            interceptions: 12
          },
          duels: {
            total: 316,
            won: 144
          },
          dribbles: {
            attempts: 33,
            success: 15,
            past: null
          },
          fouls: {
            drawn: 36,
            committed: 34
          },
          cards: {
            yellow: 3,
            yellowred: 0,
            red: 1
          },
          penalty: {
            won: null,
            commited: null,
            scored: 3,
            missed: 0,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 146008,
        name: 'M. Cham',
        firstname: 'Muhammed',
        lastname: 'Cham Saračević',
        age: 24,
        birth: {
          date: '2000-09-26',
          place: null,
          country: 'Austria'
        },
        nationality: 'Austria',
        height: '180 cm',
        weight: '67 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/146008.png'
      },
      statistics: [
        {
          team: {
            id: 99,
            name: 'Clermont Foot',
            logo: 'https://media.api-sports.io/football/teams/99.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 33,
            lineups: 29,
            minutes: 2563,
            number: null,
            position: 'Midfielder',
            rating: '7.151515',
            captain: false
          },
          substitutes: {
            in: 4,
            out: 15,
            bench: 4
          },
          shots: {
            total: 53,
            on: 30
          },
          goals: {
            total: 8,
            conceded: 0,
            assists: 4,
            saves: null
          },
          passes: {
            total: 1190,
            key: 49,
            accuracy: 30
          },
          tackles: {
            total: 25,
            blocks: 2,
            interceptions: 8
          },
          duels: {
            total: 249,
            won: 122
          },
          dribbles: {
            attempts: 62,
            success: 34,
            past: null
          },
          fouls: {
            drawn: 56,
            committed: 22
          },
          cards: {
            yellow: 4,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 4,
            missed: 1,
            saved: null
          }
        }
      ]
    },
    {
      player: {
        id: 138835,
        name: 'F. Balogun',
        firstname: 'Folarin Jolaoluwa Jerry',
        lastname: 'Balogun',
        age: 23,
        birth: {
          date: '2001-07-03',
          place: null,
          country: 'USA'
        },
        nationality: 'USA',
        height: '178 cm',
        weight: '66 kg',
        injured: false,
        photo: 'https://media.api-sports.io/football/players/138835.png'
      },
      statistics: [
        {
          team: {
            id: 91,
            name: 'Monaco',
            logo: 'https://media.api-sports.io/football/teams/91.png'
          },
          league: {
            id: 61,
            name: 'Ligue 1',
            country: 'France',
            logo: 'https://media.api-sports.io/football/leagues/61.png',
            flag: 'https://media.api-sports.io/flags/fr.svg',
            season: 2023
          },
          games: {
            appearences: 29,
            lineups: 19,
            minutes: 1696,
            number: null,
            position: 'Attacker',
            rating: '6.821428',
            captain: false
          },
          substitutes: {
            in: 10,
            out: 14,
            bench: 10
          },
          shots: {
            total: 44,
            on: 29
          },
          goals: {
            total: 7,
            conceded: 0,
            assists: 5,
            saves: null
          },
          passes: {
            total: 351,
            key: 26,
            accuracy: 9
          },
          tackles: {
            total: 11,
            blocks: null,
            interceptions: 3
          },
          duels: {
            total: 206,
            won: 65
          },
          dribbles: {
            attempts: 39,
            success: 11,
            past: null
          },
          fouls: {
            drawn: 35,
            committed: 31
          },
          cards: {
            yellow: 1,
            yellowred: 0,
            red: 0
          },
          penalty: {
            won: null,
            commited: null,
            scored: 0,
            missed: 3,
            saved: null
          }
        }
      ]
    }
  ]
}

export const Ligue1 = {
  get: 'leagues',
  parameters: {
    id: '61'
  },
  errors: [],
  results: 1,
  paging: {
    current: 1,
    total: 1
  },
  response: [
    {
      league: {
        id: 61,
        name: 'Ligue 1',
        type: 'League',
        logo: 'https://media.api-sports.io/football/leagues/61.png'
      },
      country: {
        name: 'France',
        code: 'FR',
        flag: 'https://media.api-sports.io/flags/fr.svg'
      },
      seasons: [
        {
          year: 2010,
          start: '2010-08-07',
          end: '2011-05-29',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: false,
              statistics_players: false
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: false,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2011,
          start: '2011-08-06',
          end: '2012-05-20',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: false,
              statistics_players: false
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: false,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2012,
          start: '2012-08-10',
          end: '2013-05-26',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: false,
              statistics_players: false
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: false,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2013,
          start: '2013-08-09',
          end: '2014-05-17',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: false,
              statistics_players: false
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: false,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2014,
          start: '2014-08-08',
          end: '2015-05-23',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: false,
              statistics_players: false
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: false,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2015,
          start: '2015-08-07',
          end: '2016-05-14',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: true,
              statistics_players: true
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: false,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2016,
          start: '2016-08-12',
          end: '2017-05-20',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: true,
              statistics_players: true
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: false,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2017,
          start: '2017-08-04',
          end: '2018-05-19',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: true,
              statistics_players: true
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: false,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2018,
          start: '2018-08-10',
          end: '2019-05-24',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: true,
              statistics_players: true
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: false,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2019,
          start: '2019-08-09',
          end: '2020-05-23',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: true,
              statistics_players: true
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: false,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2020,
          start: '2020-08-21',
          end: '2021-05-30',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: true,
              statistics_players: true
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: true,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2021,
          start: '2021-08-06',
          end: '2022-05-29',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: true,
              statistics_players: true
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: true,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2022,
          start: '2022-08-05',
          end: '2023-06-03',
          current: false,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: true,
              statistics_players: true
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: true,
            predictions: true,
            odds: false
          }
        },
        {
          year: 2023,
          start: '2023-08-11',
          end: '2024-06-02',
          current: true,
          coverage: {
            fixtures: {
              events: true,
              lineups: true,
              statistics_fixtures: true,
              statistics_players: true
            },
            standings: true,
            players: true,
            top_scorers: true,
            top_assists: true,
            top_cards: true,
            injuries: true,
            predictions: true,
            odds: true
          }
        }
      ]
    }
  ]
}

export const Ligue1Standings = {
  get: 'standings',
  parameters: {
    league: '61',
    season: '2023'
  },
  errors: [],
  results: 1,
  paging: {
    current: 1,
    total: 1
  },
  response: [
    {
      league: {
        id: 61,
        name: 'Ligue 1',
        country: 'France',
        logo: 'https://media.api-sports.io/football/leagues/61.png',
        flag: 'https://media.api-sports.io/flags/fr.svg',
        season: 2023,
        standings: [
          [
            {
              rank: 1,
              team: {
                id: 85,
                name: 'Paris Saint Germain',
                logo: 'https://media.api-sports.io/football/teams/85.png'
              },
              points: 76,
              goalsDiff: 48,
              group: 'Ligue 1',
              form: 'WWLDW',
              status: 'same',
              description: 'Promotion - Champions League (League phase: )',
              all: {
                played: 34,
                win: 22,
                draw: 10,
                lose: 2,
                goals: {
                  for: 81,
                  against: 33
                }
              },
              home: {
                played: 17,
                win: 9,
                draw: 6,
                lose: 2,
                goals: {
                  for: 42,
                  against: 22
                }
              },
              away: {
                played: 17,
                win: 13,
                draw: 4,
                lose: 0,
                goals: {
                  for: 39,
                  against: 11
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 2,
              team: {
                id: 91,
                name: 'Monaco',
                logo: 'https://media.api-sports.io/football/teams/91.png'
              },
              points: 67,
              goalsDiff: 26,
              group: 'Ligue 1',
              form: 'WWWLW',
              status: 'same',
              description: 'Promotion - Champions League (League phase: )',
              all: {
                played: 34,
                win: 20,
                draw: 7,
                lose: 7,
                goals: {
                  for: 68,
                  against: 42
                }
              },
              home: {
                played: 17,
                win: 10,
                draw: 3,
                lose: 4,
                goals: {
                  for: 30,
                  against: 14
                }
              },
              away: {
                played: 17,
                win: 10,
                draw: 4,
                lose: 3,
                goals: {
                  for: 38,
                  against: 28
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 3,
              team: {
                id: 106,
                name: 'Stade Brestois 29',
                logo: 'https://media.api-sports.io/football/teams/106.png'
              },
              points: 61,
              goalsDiff: 19,
              group: 'Ligue 1',
              form: 'WDDWL',
              status: 'same',
              description: 'Promotion - Champions League (League phase: )',
              all: {
                played: 34,
                win: 17,
                draw: 10,
                lose: 7,
                goals: {
                  for: 53,
                  against: 34
                }
              },
              home: {
                played: 17,
                win: 8,
                draw: 7,
                lose: 2,
                goals: {
                  for: 25,
                  against: 14
                }
              },
              away: {
                played: 17,
                win: 9,
                draw: 3,
                lose: 5,
                goals: {
                  for: 28,
                  against: 20
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 4,
              team: {
                id: 79,
                name: 'Lille',
                logo: 'https://media.api-sports.io/football/teams/79.png'
              },
              points: 59,
              goalsDiff: 18,
              group: 'Ligue 1',
              form: 'DWLWL',
              status: 'same',
              description: 'Promotion - Champions League (Qualification: )',
              all: {
                played: 34,
                win: 16,
                draw: 11,
                lose: 7,
                goals: {
                  for: 52,
                  against: 34
                }
              },
              home: {
                played: 17,
                win: 11,
                draw: 4,
                lose: 2,
                goals: {
                  for: 34,
                  against: 14
                }
              },
              away: {
                played: 17,
                win: 5,
                draw: 7,
                lose: 5,
                goals: {
                  for: 18,
                  against: 20
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 5,
              team: {
                id: 84,
                name: 'Nice',
                logo: 'https://media.api-sports.io/football/teams/84.png'
              },
              points: 55,
              goalsDiff: 11,
              group: 'Ligue 1',
              form: 'DLWWD',
              status: 'same',
              description: 'Promotion - Europa League (League phase: )',
              all: {
                played: 34,
                win: 15,
                draw: 10,
                lose: 9,
                goals: {
                  for: 40,
                  against: 29
                }
              },
              home: {
                played: 17,
                win: 9,
                draw: 4,
                lose: 4,
                goals: {
                  for: 21,
                  against: 11
                }
              },
              away: {
                played: 17,
                win: 6,
                draw: 6,
                lose: 5,
                goals: {
                  for: 19,
                  against: 18
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 6,
              team: {
                id: 80,
                name: 'Lyon',
                logo: 'https://media.api-sports.io/football/teams/80.png'
              },
              points: 53,
              goalsDiff: -6,
              group: 'Ligue 1',
              form: 'WWWWL',
              status: 'same',
              description: 'Promotion - Europa League (League phase: )',
              all: {
                played: 34,
                win: 16,
                draw: 5,
                lose: 13,
                goals: {
                  for: 49,
                  against: 55
                }
              },
              home: {
                played: 17,
                win: 7,
                draw: 4,
                lose: 6,
                goals: {
                  for: 25,
                  against: 29
                }
              },
              away: {
                played: 17,
                win: 9,
                draw: 1,
                lose: 7,
                goals: {
                  for: 24,
                  against: 26
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 7,
              team: {
                id: 116,
                name: 'Lens',
                logo: 'https://media.api-sports.io/football/teams/116.png'
              },
              points: 51,
              goalsDiff: 8,
              group: 'Ligue 1',
              form: 'DDWLW',
              status: 'same',
              description: 'Promotion - Conference League (Qualification: )',
              all: {
                played: 34,
                win: 14,
                draw: 9,
                lose: 11,
                goals: {
                  for: 45,
                  against: 37
                }
              },
              home: {
                played: 17,
                win: 9,
                draw: 4,
                lose: 4,
                goals: {
                  for: 27,
                  against: 18
                }
              },
              away: {
                played: 17,
                win: 5,
                draw: 5,
                lose: 7,
                goals: {
                  for: 18,
                  against: 19
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 8,
              team: {
                id: 81,
                name: 'Marseille',
                logo: 'https://media.api-sports.io/football/teams/81.png'
              },
              points: 50,
              goalsDiff: 11,
              group: 'Ligue 1',
              form: 'WLWWD',
              status: 'same',
              description: null,
              all: {
                played: 34,
                win: 13,
                draw: 11,
                lose: 10,
                goals: {
                  for: 52,
                  against: 41
                }
              },
              home: {
                played: 17,
                win: 10,
                draw: 6,
                lose: 1,
                goals: {
                  for: 31,
                  against: 13
                }
              },
              away: {
                played: 17,
                win: 3,
                draw: 5,
                lose: 9,
                goals: {
                  for: 21,
                  against: 28
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 9,
              team: {
                id: 93,
                name: 'Reims',
                logo: 'https://media.api-sports.io/football/teams/93.png'
              },
              points: 47,
              goalsDiff: -5,
              group: 'Ligue 1',
              form: 'WWDLL',
              status: 'same',
              description: null,
              all: {
                played: 34,
                win: 13,
                draw: 8,
                lose: 13,
                goals: {
                  for: 42,
                  against: 47
                }
              },
              home: {
                played: 17,
                win: 8,
                draw: 3,
                lose: 6,
                goals: {
                  for: 19,
                  against: 18
                }
              },
              away: {
                played: 17,
                win: 5,
                draw: 5,
                lose: 7,
                goals: {
                  for: 23,
                  against: 29
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 10,
              team: {
                id: 94,
                name: 'Rennes',
                logo: 'https://media.api-sports.io/football/teams/94.png'
              },
              points: 46,
              goalsDiff: 7,
              group: 'Ligue 1',
              form: 'LDWLW',
              status: 'same',
              description: null,
              all: {
                played: 34,
                win: 12,
                draw: 10,
                lose: 12,
                goals: {
                  for: 53,
                  against: 46
                }
              },
              home: {
                played: 17,
                win: 7,
                draw: 4,
                lose: 6,
                goals: {
                  for: 34,
                  against: 26
                }
              },
              away: {
                played: 17,
                win: 5,
                draw: 6,
                lose: 6,
                goals: {
                  for: 19,
                  against: 20
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 11,
              team: {
                id: 96,
                name: 'Toulouse',
                logo: 'https://media.api-sports.io/football/teams/96.png'
              },
              points: 43,
              goalsDiff: -4,
              group: 'Ligue 1',
              form: 'LWLWD',
              status: 'same',
              description: null,
              all: {
                played: 34,
                win: 11,
                draw: 10,
                lose: 13,
                goals: {
                  for: 42,
                  against: 46
                }
              },
              home: {
                played: 17,
                win: 3,
                draw: 7,
                lose: 7,
                goals: {
                  for: 21,
                  against: 25
                }
              },
              away: {
                played: 17,
                win: 8,
                draw: 3,
                lose: 6,
                goals: {
                  for: 21,
                  against: 21
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 12,
              team: {
                id: 82,
                name: 'Montpellier',
                logo: 'https://media.api-sports.io/football/teams/82.png'
              },
              points: 41,
              goalsDiff: -5,
              group: 'Ligue 1',
              form: 'DLWDW',
              status: 'same',
              description: null,
              all: {
                played: 34,
                win: 10,
                draw: 12,
                lose: 12,
                goals: {
                  for: 43,
                  against: 48
                }
              },
              home: {
                played: 17,
                win: 3,
                draw: 9,
                lose: 5,
                goals: {
                  for: 20,
                  against: 23
                }
              },
              away: {
                played: 17,
                win: 7,
                draw: 3,
                lose: 7,
                goals: {
                  for: 23,
                  against: 25
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 13,
              team: {
                id: 95,
                name: 'Strasbourg',
                logo: 'https://media.api-sports.io/football/teams/95.png'
              },
              points: 39,
              goalsDiff: -12,
              group: 'Ligue 1',
              form: 'LWLLL',
              status: 'same',
              description: null,
              all: {
                played: 34,
                win: 10,
                draw: 9,
                lose: 15,
                goals: {
                  for: 38,
                  against: 50
                }
              },
              home: {
                played: 17,
                win: 7,
                draw: 3,
                lose: 7,
                goals: {
                  for: 22,
                  against: 23
                }
              },
              away: {
                played: 17,
                win: 3,
                draw: 6,
                lose: 8,
                goals: {
                  for: 16,
                  against: 27
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 14,
              team: {
                id: 83,
                name: 'Nantes',
                logo: 'https://media.api-sports.io/football/teams/83.png'
              },
              points: 33,
              goalsDiff: -25,
              group: 'Ligue 1',
              form: 'LLDDL',
              status: 'same',
              description: null,
              all: {
                played: 34,
                win: 9,
                draw: 6,
                lose: 19,
                goals: {
                  for: 30,
                  against: 55
                }
              },
              home: {
                played: 17,
                win: 3,
                draw: 3,
                lose: 11,
                goals: {
                  for: 17,
                  against: 30
                }
              },
              away: {
                played: 17,
                win: 6,
                draw: 3,
                lose: 8,
                goals: {
                  for: 13,
                  against: 25
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 15,
              team: {
                id: 111,
                name: 'LE Havre',
                logo: 'https://media.api-sports.io/football/teams/111.png'
              },
              points: 32,
              goalsDiff: -11,
              group: 'Ligue 1',
              form: 'LLWDL',
              status: 'same',
              description: null,
              all: {
                played: 34,
                win: 7,
                draw: 11,
                lose: 16,
                goals: {
                  for: 34,
                  against: 45
                }
              },
              home: {
                played: 17,
                win: 6,
                draw: 2,
                lose: 9,
                goals: {
                  for: 18,
                  against: 19
                }
              },
              away: {
                played: 17,
                win: 1,
                draw: 9,
                lose: 7,
                goals: {
                  for: 16,
                  against: 26
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 16,
              team: {
                id: 112,
                name: 'Metz',
                logo: 'https://media.api-sports.io/football/teams/112.png'
              },
              points: 29,
              goalsDiff: -23,
              group: 'Ligue 1',
              form: 'LLLLW',
              status: 'same',
              description: 'Ligue 1 (Promotion - Play Offs: )',
              all: {
                played: 34,
                win: 8,
                draw: 5,
                lose: 21,
                goals: {
                  for: 35,
                  against: 58
                }
              },
              home: {
                played: 17,
                win: 3,
                draw: 3,
                lose: 11,
                goals: {
                  for: 17,
                  against: 27
                }
              },
              away: {
                played: 17,
                win: 5,
                draw: 2,
                lose: 10,
                goals: {
                  for: 18,
                  against: 31
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 17,
              team: {
                id: 97,
                name: 'Lorient',
                logo: 'https://media.api-sports.io/football/teams/97.png'
              },
              points: 29,
              goalsDiff: -23,
              group: 'Ligue 1',
              form: 'WLLLL',
              status: 'same',
              description: 'Relegation - Ligue 2',
              all: {
                played: 34,
                win: 7,
                draw: 8,
                lose: 19,
                goals: {
                  for: 43,
                  against: 66
                }
              },
              home: {
                played: 17,
                win: 4,
                draw: 4,
                lose: 9,
                goals: {
                  for: 26,
                  against: 30
                }
              },
              away: {
                played: 17,
                win: 3,
                draw: 4,
                lose: 10,
                goals: {
                  for: 17,
                  against: 36
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            },
            {
              rank: 18,
              team: {
                id: 99,
                name: 'Clermont Foot',
                logo: 'https://media.api-sports.io/football/teams/99.png'
              },
              points: 25,
              goalsDiff: -34,
              group: 'Ligue 1',
              form: 'LLLWL',
              status: 'same',
              description: 'Relegation - Ligue 2',
              all: {
                played: 34,
                win: 5,
                draw: 10,
                lose: 19,
                goals: {
                  for: 26,
                  against: 60
                }
              },
              home: {
                played: 17,
                win: 3,
                draw: 5,
                lose: 9,
                goals: {
                  for: 14,
                  against: 27
                }
              },
              away: {
                played: 17,
                win: 2,
                draw: 5,
                lose: 10,
                goals: {
                  for: 12,
                  against: 33
                }
              },
              update: '2024-06-03T00:00:00+00:00'
            }
          ]
        ]
      }
    }
  ]
}
