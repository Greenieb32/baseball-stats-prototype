# Baseball Stats Prototype

This project is designed to be a prototype of an interactive tool to display Batting Average (AVG) and On-Base Plus Slugging (OPS) over time for any MLB player. For the purpose of this prototype those stats and other counting stats used to create AVG and OPS are displayed on the app for three player's 2018 MLB Season.

## Features

Below is a listing of features developed for this prototype:

### Player Summary Page

After selecting a player from the home screen, you are taken to the stats summary screen, where you can see the player’s totals for the 2018 season along with graphs displaying game by game changes in the players AVG and OPS. There are also links to take you to the pages for the below two features.

### AVG and OPS Graphs

Separate pages were created to display both the AVG and OPS graphs. These pages were designed to allow the graphs to be larger and allow a slightly different view of the player's season compared to the summary page graphs.

### Season Game Log

For people who just want to look at raw data, the season game log was included, which displays the players counting stats game by game as well as derived stats for each game and cumulative derived stats for the season to that point.

## Future Improvements

These are features that were considered for the prototype but due to time and effort concerns, they are saved for any future releases of the app.

## Monthly Stats

Pages and views for monthly stats were considered, but the graphs and game log were chosen as I believe them to be better showings of a player’s AVG and OPS over time. A more fully built out version of this app would most likely include further breakdowns of the chosen stats. 
### API Call Efficiency 

This prototype uses API calls to fetch data for the players as well as their game-by-game stats. Currently all these calls successfully fetch the required data but not in the most efficient manner. When data is being fetched none of it is stored, so the API is called every time the data is needed. Future improvements to this prototype would be to store data and only fetch if needed. 

### Responsive Design

Currently this prototype is designed with desktop web browsers in mind. A future improvement would be to improve how the data is displayed for all screen sizes including mobile phones and tablets, but for a prototype with this data a focus on desktop web browsers was chosen.

## Technologies/Libraries Used

- React
- HTML/CSS
- JavaScript
- React Router 
- React UUID
- Recharts
