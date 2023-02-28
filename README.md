# Houlak

Houlak BackEnd Challenge

## Install

```bash
git clone https://github.com/pablom555/HoulakBackEnd.git
yarn install
```

## Create Database
### You need have PostgresSQL in your system, set your user and password in .env file (DATABASE_URL)

```bash
npx prisma migrate dev --name init
```

## Run 
```bash
yarn run build
yarn run start
```

## Available Endpoints

### api/v1/spotify/login
log into spotify. You need to run this endpoint before you can use the api. You can put this url in your browser.

### api/v1/spotify/Guns
returns Guns And Roses's albums ordered by popularity

```json
{
    "artistId": "3qm84nBOXUEQ2vnTfUTTFC",
    "artistName": "Guns N' Roses",
    "artistImages": [
        {
            "height": 640,
            "url": "https://i.scdn.co/image/ab6761610000e5eb50defaf9fc059a1efc541f4c",
            "width": 640
        },
        {
            "height": 320,
            "url": "https://i.scdn.co/image/ab6761610000517450defaf9fc059a1efc541f4c",
            "width": 320
        },
        {
            "height": 160,
            "url": "https://i.scdn.co/image/ab6761610000f17850defaf9fc059a1efc541f4c",
            "width": 160
        }
    ],
    "albums": [
        {
            "id": "3I9Z1nDCL4E0cP62flcbI5",
            "name": "Appetite For Destruction",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27368384dd85fd5e95831252f60",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0268384dd85fd5e95831252f60",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485168384dd85fd5e95831252f60",
                    "width": 64
                }
            ],
            "popularity": 81,
            "release_date": "1987-07-21",
            "total_tracks": 12
        },
        {
            "id": "0CxPbTRARqKUYighiEY9Sz",
            "name": "Use Your Illusion I",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273e44963b8bb127552ac761873",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02e44963b8bb127552ac761873",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851e44963b8bb127552ac761873",
                    "width": 64
                }
            ],
            "popularity": 78,
            "release_date": "1991-09-17",
            "total_tracks": 16
        },
        {
            "id": "00eiw4KOJZ7eC3NBEpmH4C",
            "name": "Use Your Illusion II",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27392d21aef6c0d288cc4c05973",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0292d21aef6c0d288cc4c05973",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485192d21aef6c0d288cc4c05973",
                    "width": 64
                }
            ],
            "popularity": 75,
            "release_date": "1991-09-18",
            "total_tracks": 14
        },
        {
            "id": "28yHV3Gdg30AiB8h8em1eW",
            "name": "Appetite For Destruction",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27321ebf49b3292c3f0f575f0f5",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0221ebf49b3292c3f0f575f0f5",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485121ebf49b3292c3f0f575f0f5",
                    "width": 64
                }
            ],
            "popularity": 75,
            "release_date": "1987-07-21",
            "total_tracks": 12
        },
        {
            "id": "3edmYBHOTxfz8NxJE1QmTP",
            "name": "Appetite For Destruction (Super Deluxe Edition)",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2737e1774622a9c5f52b7dd1c33",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e027e1774622a9c5f52b7dd1c33",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048517e1774622a9c5f52b7dd1c33",
                    "width": 64
                }
            ],
            "popularity": 66,
            "release_date": "1987-07-21",
            "total_tracks": 51
        },
        {
            "id": "0suNLpB9xraAv1FcdlITjQ",
            "name": "Chinese Democracy",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273e29a351729da4d29214e54e2",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02e29a351729da4d29214e54e2",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851e29a351729da4d29214e54e2",
                    "width": 64
                }
            ],
            "popularity": 63,
            "release_date": "2008-11-23",
            "total_tracks": 14
        },
        {
            "id": "4ieR19hRkKeE81CalJPQNu",
            "name": "The Spaghetti Incident?",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273d8a68fd3e16f7ff6932b47d9",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02d8a68fd3e16f7ff6932b47d9",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851d8a68fd3e16f7ff6932b47d9",
                    "width": 64
                }
            ],
            "popularity": 61,
            "release_date": "1993-11-23",
            "total_tracks": 12
        },
        {
            "id": "1nnC02B9bhYh6IVFOoij0k",
            "name": "Use Your Illusion (Super Deluxe)",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273273eef956e3293dd0c1b89b1",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02273eef956e3293dd0c1b89b1",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851273eef956e3293dd0c1b89b1",
                    "width": 64
                }
            ],
            "popularity": 60,
            "release_date": "2022-11-11",
            "total_tracks": 77
        },
        {
            "id": "1RCAG3LrDwYsNU5ZiUJlWi",
            "name": "G N' R Lies",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273d2c9d673548c12ad1c32e38d",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02d2c9d673548c12ad1c32e38d",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851d2c9d673548c12ad1c32e38d",
                    "width": 64
                }
            ],
            "popularity": 59,
            "release_date": "1988-11-29",
            "total_tracks": 8
        },
        {
            "id": "3ZwjaVcnVo2TwhK8N8WWVs",
            "name": "Live Era '87-'93",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273910d3e3977eb25c5a5c8adb1",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02910d3e3977eb25c5a5c8adb1",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851910d3e3977eb25c5a5c8adb1",
                    "width": 64
                }
            ],
            "popularity": 56,
            "release_date": "1999-11-23",
            "total_tracks": 22
        },
        {
            "id": "3Qf4H3NYSp3BMIRe6WOyOA",
            "name": "Greatest Hits",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27315d11ba311f61577c5e18370",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0215d11ba311f61577c5e18370",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485115d11ba311f61577c5e18370",
                    "width": 64
                }
            ],
            "popularity": 55,
            "release_date": "2020-08-28",
            "total_tracks": 15
        },
        {
            "id": "33HYdYXXadqsdZ1NsYmS6o",
            "name": "Use Your Illusion I (Deluxe Edition)",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2732ab85e10aa698513679ff509",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e022ab85e10aa698513679ff509",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048512ab85e10aa698513679ff509",
                    "width": 64
                }
            ],
            "popularity": 52,
            "release_date": "2022-11-11",
            "total_tracks": 29
        },
        {
            "id": "2UWJ1UJybSEmQZ87lQHmp0",
            "name": "Hard Skool",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273c36e70cc8773d82d21520331",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02c36e70cc8773d82d21520331",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851c36e70cc8773d82d21520331",
                    "width": 64
                }
            ],
            "popularity": 49,
            "release_date": "2021-09-24",
            "total_tracks": 1
        },
        {
            "id": "22BtZeG6Kq2VvQVlZCgCAG",
            "name": "Use Your Illusion II (Deluxe Edition)",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273a22cc37f3e0cef1529b54a41",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02a22cc37f3e0cef1529b54a41",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851a22cc37f3e0cef1529b54a41",
                    "width": 64
                }
            ],
            "popularity": 42,
            "release_date": "2022-11-11",
            "total_tracks": 27
        },
        {
            "id": "6AK5hiec0u0guq19bKlSMm",
            "name": "Shadow Of Your Love",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273e60da07908a74190116673d3",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02e60da07908a74190116673d3",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851e60da07908a74190116673d3",
                    "width": 64
                }
            ],
            "popularity": 41,
            "release_date": "2018-05-04",
            "total_tracks": 1
        },
        {
            "id": "0dMoESugZcGjrttbxxxqdV",
            "name": "ABSUЯD",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2733d83d846aa9f817352b12694",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e023d83d846aa9f817352b12694",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048513d83d846aa9f817352b12694",
                    "width": 64
                }
            ],
            "popularity": 39,
            "release_date": "2021-08-06",
            "total_tracks": 1
        },
        {
            "id": "3eEUdIcGVpBEgQ086nCTmE",
            "name": "Welcome To The Jungle (1986 Sound City Session)",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2739d72298d1e18769f3931f5b6",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e029d72298d1e18769f3931f5b6",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048519d72298d1e18769f3931f5b6",
                    "width": 64
                }
            ],
            "popularity": 31,
            "release_date": "2018-06-08",
            "total_tracks": 1
        },
        {
            "id": "3DBIk4M0qaT0QR5DMIXnJq",
            "name": "Move To The City (1988 Acoustic Version)",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b27355598d2d52fc249fa166a3ca",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e0255598d2d52fc249fa166a3ca",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d0000485155598d2d52fc249fa166a3ca",
                    "width": 64
                }
            ],
            "popularity": 26,
            "release_date": "2018-06-22",
            "total_tracks": 1
        },
        {
            "id": "5S1uPYZSgeAkZYxvFuJBeW",
            "name": "Use Your Illusion I",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b2737b421040d2684d1968be08d7",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e027b421040d2684d1968be08d7",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d000048517b421040d2684d1968be08d7",
                    "width": 64
                }
            ],
            "popularity": 18,
            "release_date": "2022-11-11",
            "total_tracks": 16
        },
        {
            "id": "3R5UKfbGpobsD4KHNbYReV",
            "name": "Use Your Illusion II",
            "images": [
                {
                    "height": 640,
                    "url": "https://i.scdn.co/image/ab67616d0000b273387cc549d4344f737a7f49b2",
                    "width": 640
                },
                {
                    "height": 300,
                    "url": "https://i.scdn.co/image/ab67616d00001e02387cc549d4344f737a7f49b2",
                    "width": 300
                },
                {
                    "height": 64,
                    "url": "https://i.scdn.co/image/ab67616d00004851387cc549d4344f737a7f49b2",
                    "width": 64
                }
            ],
            "popularity": 17,
            "release_date": "2022-11-11",
            "total_tracks": 14
        }
    ]
}
```