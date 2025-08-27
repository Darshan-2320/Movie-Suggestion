#Netflix-Gpt
#Movie-Suggestion 

# What I Do(Progress)
    #Login Page
        - Sign in page toggle Sign up Page With Validation
        - Authenthication using firebase
            - Firebase
                - Firebase Website and make New App or Project
                - Step by Step Install Firebase
                - Firebase Login 
                - Firebase Init
                - Firebase Deploy Project
            - Sign in,Sign Up and Sign out Read Docs and call Api 
        - input Data Read for Useref Hook
        - in Authenthication When User Successfully Sign In or Sign Up then Direct Browse Page Using
          UseNavigate Hook
        - User Data Store in Redux Store
        - Using Data Grow the Browse Page 

    #Browse Page
        - Header
            - Print User Data with Carousel
            - When User Sign Out Then Direct Show Login Page
        - Maincontainer
            - FetchApi
                - All Movies Category  Api Use and Fetch Data
                - Store Data and Redux 
                    - Create Movieslice and Store data
                    - When We use any Movie Data then we can Easily use Redux Data
            - Video
                - Background Trailer Video
                    - Use Card Key and Go Youtube Search use Iframe 
            - Video Title
                - Movie Name
                - Overview
                - Rating
                - 2 Buttons
        -Secondarycontainer
            -Movie Cards Horizontal Scroll
            -Use Flex Overflow-x-scroll
            -Click then Redirect MovieDetails Page
        
    # Movie Details
        - Improve my Header
        - Bug Fix Header.js 
            - Bug:WatchList Page Can`t Loaded,its only Loaded Miniseconds
            - navigate Issue
        - Api
            - Custom Hook Using Fetch Api 
            - Store Data in Redux 
        - Left Side
            - MovieTittle
            - Rating
            - Image 
        - Right Side
            - Genre
            - Overview
            - 2 Buttons
                - Watch Trailer
                    - re-use usetrailer Hook
                    - Create Cancel Buttons
                - WatchList
                    - When User Click Watchlist
                    - Then That Movie Deatils or Card Show To WatchList Page
                    - That Data Store In redux New Slice

    # WatchList
        - Header Show Count Watch List Movies
        - Show Cards Which User Select Movies
        - Create 3 Buttons Add,Remove,Clear

    # SearchPage
        - Input Box its return value of user input using useref hook
        - Click on Search Button then Call api in dependecy array parameter handleclick
        - Store Data in redux store usin new slice (bug: check a Name )
        - Reuse moviecard Component
        - then click Redirect Moviedetails Page
# Features
    # Loign Page
        - Sign in 
        - Sign up
        - Authnethication
        - Validation
        - Succesfully then direct Browse Page

    # Browse Page   
        - Any Popular Movie Trailer In Background
        - scroll then Movie Cards Like
            - Popular Movies
            - New Realease Movie
            - Tv Shows Etc
        - There Cards are Horizontal Scroll
        - When any Cards Click Then Show Movie Details Page

    # Movie Details Page
        - Left Side Movie Poster or Pic
        - Right Side Movie Details
            - Movie Name
            - Rating
            - Time
            - etc
            - 2 Buttons 
                - Watch Trailer
                - Want Watch
        - When User Click Watchlist then Show Watchlist Page

    # Watch List Page
        - Movie Cards which User Want to Watch