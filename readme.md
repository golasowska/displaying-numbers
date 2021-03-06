There was prepared a simple REST API server available in `server` directory. In order to execute it you
have to run `npm|yarn run start-server` command inside root directory.

This API has two endpoints:

* `GET /numbers` - this one will return an array of 10 numbers 
    ```
    {
        'data': [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9,
            10
        ]
    }
    ```

* `GET /random-numbers` - this one will return an array of 5 random numbers. For example:
    ```
    {
        'data': [
            2,
            2,
            1,
            5,
            1
        ]
    }
    ```
    
Inside `front` directory, you'll find a simple page with two cards.

Right now one should display numbers from first endpoint, while second card should be empty.    

Your task is very simple:

* first you have to create a component that will fetch and display random numbers from API every 10 seconds.
Those should be displayed inside second card.

* after you finish first task, we would like you to improve ranking component. Every time you fetch new numbers, 
you should count how many times it was drawn. Ranking should be sorted from most, to least popular number.

