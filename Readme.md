# Restaurant logistic

App for restaurant to manage tables in restaurant, taking orders, creating a summary of the table and the whole day in
the restaurant.

# Tech

- Typescript
- React
- Json-server

# Local Working

- opening local server on port 3500 with command ,,**_json-server --watch data/db.json --port 3500_**"
- opening local project with command ,,_**npm run dev**_"

# Next features?

- add object with list of food and price ( maybe from db.json with rtk query?s) **_<strong>DONE</strong>_**
- fetch and chose in every table food **_<strong>DONE</strong>_**
- add summary in every table
- if table is close, add check to total summary
- on click in menu element show new page with details
- add img of food? **_<strong>DONE</strong>_**
- add guest cunter in reservation and next add how price per person money/people spend -> summary of day
- adding new food to menu ( form with name,price,description,img)
- add form in contact
- add react router, to food description/summary etc etc
- style it better in the end **_<strong>DONE</strong>_**
- if someone order same food then add all items in same order and ad x example 'item 3x'
- New page with menu boxes on click show description add some filters like:
    - drinks,dinner and subfilters like vege etc
    - add filters to data/db.json && add price  **_<strong>DONE</strong>_**

# Think about

- add calnedar with dates and then in summary of they filter all orders per date
- if you add calendar to reservation, then tables also need to be updated and filtered by date

# Information for me

- add new disptach for addReservation with number of people ( change type for reservation to object and inside add name
  and number)





