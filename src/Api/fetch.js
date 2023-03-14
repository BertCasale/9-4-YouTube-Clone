const KEY = process.env.REACT_APP_API_KEY

//documentation reference:
//https://developers.google.com/youtube/v3/docs/search/list

//topic: hamsters, max results: 9

// curl \
//   'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=hamsters&key=[YOUR_API_KEY]' \
//   --header 'Authorization: Bearer [YOUR_ACCESS_TOKEN]' \
//   --header 'Accept: application/json' \
//   --compressed

//Data returned:

// 20230310154949
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=hamsters&key=AIzaSyCyheAN2o0GAq_tztLtU-yFVS49-IAi2z8

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "PYyHqRLudAGF_SblaY2X1JJMRpI",
//     "nextPageToken": "CAkQAA",
//     "regionCode": "US",
//     "pageInfo": {
//       "totalResults": 1000000,
//       "resultsPerPage": 9
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "Tq3OHlU0uFN1GFPro1mxoPJCgk0",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "FQbDyHonvHk"
//         },
//         "snippet": {
//           "publishedAt": "2023-03-10T14:58:56Z",
//           "channelId": "UCs2kGytjcXW24hUQsMMb5MQ",
//           "title": "🐹 Hamster Escapes the Pool Maze for Pets 🐹Hamster Stories",
//           "description": "Hamster Escapes the Pool Maze for Pets Hamster Stories ---------------------------  --------------------------- Don't forget: Like   ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/FQbDyHonvHk/default_live.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/FQbDyHonvHk/mqdefault_live.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/FQbDyHonvHk/hqdefault_live.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "MR HAMSTER",
//           "liveBroadcastContent": "live",
//           "publishTime": "2023-03-10T14:58:56Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "IDE6nL-eoH571nuFGA6jheGWKGU",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "XdJiBPRmkOo"
//         },
//         "snippet": {
//           "publishedAt": "2023-03-09T13:00:30Z",
//           "channelId": "UCqxeD5MAs1CUS3yyDgYy6ug",
//           "title": "Diet Hampter",
//           "description": "Mooncake - the hampter trying to be on a diet Can't get enough of him I hope you have a relaxing and joyful time here watching ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/XdJiBPRmkOo/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/XdJiBPRmkOo/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/XdJiBPRmkOo/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "KumaQQ",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-03-09T13:00:30Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "4JGOXr24gpP9myLI2bzi5D7iLBM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "HO4GaRK4NKo"
//         },
//         "snippet": {
//           "publishedAt": "2021-07-08T08:39:56Z",
//           "channelId": "UC9gPwVGWqT8xkArzQ2PB0jA",
//           "title": "🐹 Hamster Escapes the  Creative Maze for Pets in real life 🐹 in Hamster Stories",
//           "description": "New maze for cute hamster in real life! It's a part of Hamster Stories where my funny pet hamster was sent to the prison for pets.",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/HO4GaRK4NKo/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/HO4GaRK4NKo/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/HO4GaRK4NKo/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "The Secret Life of my Hamster",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-07-08T08:39:56Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "Peue3m_mGfBf2cUg1NZCddg8-go",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "NTJAhzRzlRw"
//         },
//         "snippet": {
//           "publishedAt": "2020-12-06T10:00:16Z",
//           "channelId": "UC3x62QooaEL3UZYaxGP5Qfg",
//           "title": "🐹MEGA HAMSTER RACE 🐹 maze with Traps hamster🐹 Minecraft Maze",
//           "description": "Hello! Today you will see a mega big hamster race in aqua perk with real water! The Gray Hamster is very slow and runs away ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/NTJAhzRzlRw/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/NTJAhzRzlRw/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/NTJAhzRzlRw/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Playattoys",
//           "liveBroadcastContent": "none",
//           "publishTime": "2020-12-06T10:00:16Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "B25EGSq9M8UBLS8chD2VrDbnt5w",
//         "id": {
//           "kind": "youtube#channel",
//           "channelId": "UCPZQpMB6jNbvnfLVAhk-0RA"
//         },
//         "snippet": {
//           "publishedAt": "2021-07-11T13:48:34Z",
//           "channelId": "UCPZQpMB6jNbvnfLVAhk-0RA",
//           "title": "HAMSTER WORLD HAMHAM",
//           "description": "Welcome to the HAMSTER WORLD HAMHAM channel. We create videos with cute animals. And especially my agile hamsters.",
//           "thumbnails": {
//             "default": {
//               "url": "https://yt3.ggpht.com/N96Msd-cAbut-SAKszq9Azu0l9z07zIDa3OAf2DdyDxr5-SRGDwlIM6mq1ejPgLgwS7zeo31=s88-c-k-c0xffffffff-no-rj-mo"
//             },
//             "medium": {
//               "url": "https://yt3.ggpht.com/N96Msd-cAbut-SAKszq9Azu0l9z07zIDa3OAf2DdyDxr5-SRGDwlIM6mq1ejPgLgwS7zeo31=s240-c-k-c0xffffffff-no-rj-mo"
//             },
//             "high": {
//               "url": "https://yt3.ggpht.com/N96Msd-cAbut-SAKszq9Azu0l9z07zIDa3OAf2DdyDxr5-SRGDwlIM6mq1ejPgLgwS7zeo31=s800-c-k-c0xffffffff-no-rj-mo"
//             }
//           },
//           "channelTitle": "HAMSTER WORLD HAMHAM",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-07-11T13:48:34Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "GGu1LGpU2Kj82-RPpNIfA4ptItY",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "HbRSAttaD2o"
//         },
//         "snippet": {
//           "publishedAt": "2023-03-09T11:04:17Z",
//           "channelId": "UCPZQpMB6jNbvnfLVAhk-0RA",
//           "title": "Escape From Talking Tom Police&#39;s Prison Story with Hamster | Funny Cartoon by HAMSTER WORLD HAMHAM",
//           "description": "Escape From Talking Tom Police's Prison Story with Hamster | Funny Cartoon by HAMSTER WORLD HAMHAM Let's watching ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/HbRSAttaD2o/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/HbRSAttaD2o/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/HbRSAttaD2o/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "HAMSTER WORLD HAMHAM",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-03-09T11:04:17Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "O0xLWwkojhHCoCkD_gD5CCjYHwM",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "MoI4oX4QeK4"
//         },
//         "snippet": {
//           "publishedAt": "2022-08-14T14:00:08Z",
//           "channelId": "UCfHTrA_ceeXZePMJRtuCuNQ",
//           "title": "18 Things Hamsters Hate",
//           "description": "In this video, we'll discuss the top 18 things that hamsters hate and you should avoid. Loud Noises Loud noises are stressful for ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/MoI4oX4QeK4/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/MoI4oX4QeK4/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/MoI4oX4QeK4/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Jaw-Dropping Facts",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-08-14T14:00:08Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "cFoeWDQYX7MwvbFyWPXScg65zOk",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "HxiY4UJHyVA"
//         },
//         "snippet": {
//           "publishedAt": "2023-03-08T10:01:29Z",
//           "channelId": "UCs2kGytjcXW24hUQsMMb5MQ",
//           "title": "🐹 Hamster Escapes the Rainbow POP IT Maze [Hamster OBSTACLE COURSE] #4",
//           "description": "Hamster Escapes the Rainbow POP IT Maze [Hamster OBSTACLE COURSE] #4 #hamsters #hamsterescape Don't forget: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/HxiY4UJHyVA/default_live.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/HxiY4UJHyVA/mqdefault_live.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/HxiY4UJHyVA/hqdefault_live.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "MR HAMSTER",
//           "liveBroadcastContent": "live",
//           "publishTime": "2023-03-08T10:01:29Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "XKmvRtuoKaNncRdBQlmf5jot6n0",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "hxFrO2ukmuU"
//         },
//         "snippet": {
//           "publishedAt": "2023-03-08T10:30:09Z",
//           "channelId": "UC7-ZcvNkrC6Y6zhkVzaApYQ",
//           "title": "Setting Up Enclosure Hamsters Roborovski Naturalistic | Rsm PETS",
//           "description": "Today we're setting up enclosure hamsters roborovski in a naturalistic style. The aquarium we use is 225 liters (90cm x 50cm x ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/hxFrO2ukmuU/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/hxFrO2ukmuU/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/hxFrO2ukmuU/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Rsm PETS",
//           "liveBroadcastContent": "none",
//           "publishTime": "2023-03-08T10:30:09Z"
//         }
//       }
//     ]
//   }

export function getTopic(topic) {
    return (fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&q=${topic}&type=video&key=${KEY}`).
      then((response) => response.json())
    );
  }
  
export function getMostPopular() {
  return (fetch (`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=9&regionCode=US&key=${KEY}`)
    .then((response) => response.json())
  );
}  

