# Technology Portal News Server
Technology Portal News is application for {.......}. This app has : 
* RESTful endpoint for asset's CRUD operation
* JSON formatted response

&nbsp;
# All endpoints in server
list endpoints:
- POST /register
- POST /login
- GET /news
- GET /weather
- GET /music

&nbsp;
# RESTful endpoints

### POST /register
_Request:_

- body 

    ```json
    {
        "userName" : "Mail",
        "email" : "mail@email",
        "password" : "binmail"
    }
    ```

_Response:_

- body 

    ```json
    {
        "email" : "mail@email",
        "password" : "binmail"
    }
    ```
### POST /login
_Request:_

- body 

    ```json
    {
        "email" : "mail@email",
        "password" : "binmail"
    }
    ```

_Response:_

- body 

    ```json
    {
    "access_token" : "jwt_access_token"
    }
    ```
### GET /news
_Request:_

- headers 

    ```json
    {
    "access_token" : "jwt_access_token"
    }
    ```

_Response:_

- body 

    ```json
    {
        "userName" : "Mail",
        "email" : "mail@email",
        "password" : "binmail"
    }
    ```
### GET /weather
_Request:_

- headers 

    ```json
    {
    "access_token" : "jwt_access_token"
    }
    ```
- params 

    ```json
    {
    "lat" : "<latitude>",
    "lon" : "<longitude>"
    }
    ```

_Response:_

- body 

    ```json
    {
    "coord": {
        "lat" : "<latitude>",
        "lon" : "<longitude>"
    },
    "weather": [
        {
            "id": "<id>",
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
        }
    ],
    "base": "stations",
    "main": {
        "temp": "<number>",
        "feels_like": "<number>",
        "temp_min": "<number>",
        "temp_max": "<number>",
        "pressure": "<number>",
        "humidity": "<number>",
        "sea_level": "<number>",
        "grnd_level": "<number>"
    },
    "visibility": "<number>",
    "wind": {
        "speed": "<number>",
        "deg": "<number>"
    },
    "rain": {
        "1h": "<number>"
    },
    "clouds": {
        "all": "<number>"
    },
    "dt": "<timestamp>",
    "sys": {
        "country": "ID",
        "sunrise": "<timestamp>",
        "sunset": "<timestamp>"
    },
    "timezone": "<number>",
    "name": "<city>",
    "cod": 200
}
    ```
### GET /music
_Request:_

- headers 

    ```json
    {
    "access_token" : "jwt_access_token"
    }
    ```

- params 

    ```json
    {
    "keyword" : "key word lagu"
    }
    ```


_Response:_

- body 

    ```json
    [
    {
        "tags": [
            {
                "url": "<url_tag>",
                "name": "<name_tag>",
                "key": "<key_tag>"
            },
            {
                "url": "<url_tag>",
                "name": "<name_tag>",
                "key": "<key_tag>"
            }
            ...
        ],
        "play_count": "<integer play_count_number>",
        "user": {
            "url": "<url_user>",
            "username": "<username>",
            "name": "<name>",
            "key": "<key>",
            "pictures": {
                "medium": "<url_picture_medium>",
                "320wx320h": "<url_picture_329wx320h>",
                "extra_large": "<url_picture_extra_large>",
                "large": "<url_picture_large>",
                "640wx640h": "<url_picture_640wx640h>",
                "medium_mobile": "<url_picture_medium_mobile>",
                "small": "<url_picture_small>",
                "thumbnail": "<url_picture_thumbnail>"
            }
        },
        "key": "<songs_key>",
        "created_time": "<timestamp_created_time>",
        "audio_length": "<integer audio_length_number>",
        "slug": "<slug>",
        "favorite_count": "<integer favorite_count_number>",
        "listener_count": "<integer listener_count_number>",
        "name": "<songs_name>",
        "url": "<songs_url>",
        "pictures": {
                "medium": "<url_picture_medium>",
                "320wx320h": "<url_picture_329wx320h>",
                "extra_large": "<url_picture_extra_large>",
                "large": "<url_picture_large>",
                "640wx640h": "<url_picture_640wx640h>",
                "medium_mobile": "<url_picture_medium_mobile>",
                "small": "<url_picture_small>",
                "thumbnail": "<url_picture_thumbnail>"
        },
        "repost_count": "<integer repost_count_number>",
        "updated_time": "<timestamp_created_time>",
        "comment_count": "<integer audio_length_number>",
        "html": "<html_widget_code>"
    }
]
    ```
