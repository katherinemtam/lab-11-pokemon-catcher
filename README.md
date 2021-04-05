## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps

### HTML
1. Radio buttons for 3 Pokemon
    - label, input, img
        - each input has type="radio", same name
2. Button to catch Pokemon
    - button
3. Rounds/Number of Pokemon caught
    - div or p
4. Display of Pokedex
    - results page
        - Pokemon, encounters, captures

### States
- Encounters
- Captures
- Rounds

### Events
- onLoad
    - generate 3 pokemon

- onClick
    - generate 3 new Pokemon
        - which pokemon is selected?
    - increment encounter state
    - increment capture state
    - check capture state
        - if 10 captures, redirect

### Functions
    - get, set to localStorage
    - generate 3 pokemon
        - array with 3 indexes
            - Math.random
                - while loop to to ensure uniqueness
    - increase encounter
    - increase capture

