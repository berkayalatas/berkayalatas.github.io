import voting from '../assets/img/voting.PNG'
import movieTracker from '../assets/img/movie.PNG'
import pcWorld from '../assets/img/pcWorld.PNG'
import slicepizza from '../assets/img/slicepizza.PNG'
import writingroom from '../assets/img/writingroom.PNG'
import hotel from '../assets/img/hotel.jpg'
import archer from '../assets/img/archer.jpg'
import tesla from '../assets/img/tesla.png'
import vehicle1 from '../assets/img/vehicle1.PNG'

const portfolioData = [
    {
        id:8,
        projectTitle: "Vehicle Network",
        technologies: "React.js - Next.js - Firebase",
        image: vehicle1,
        description: "User-to-user car rental application, Users can list their own cars or rent a car from others.The application includes features such as user authentication, car filtering, updating and deleting your car, etc. Users can determine the nearest cars on the map.",
        githubLink: "https://github.com/berkayalatas/vehicle_network",
        projectWebsite: "https://vehicle-network.vercel.app"
    },
    {
        id:9,
        projectTitle: "Travel Book",
        technologies: "Next.js - React.js",
        image: hotel,
        description: "This is a booking application for travelers. People can see and book rooms in cities. Map integration makes it easier to find rooms.",
        githubLink: "https://github.com/berkayalatas/travel_book",
        projectWebsite: "https://travel-book.vercel.app"
    },
    {
        id:10,
        projectTitle: "Archer",
        technologies: "React.js",
        image: archer,
        description: "Sports equipment e-commerce web application.",
        githubLink: "https://github.com/berkayalatas/archer_ecommerce",
        projectWebsite: "https://archerdb-4601b.web.app/"
    },
    {
        id:0,
        projectTitle: "Voting",
        technologies: "React.js - Node.js - Mongo DB",
        image: voting,
        description: " It is a company rating app. Current and previous employees can rate few questions about the company. All Users can get some idea about the company conditions.",
        githubLink: "https://github.com/berkayalatas/voting",
        projectWebsite: "https://company-voting.netlify.app"
    },
    {
        id:1,
        projectTitle: "Movie Tracker",
        technologies: "React.js",
        image: movieTracker,
        description: "Search Any Movie, Check the latest movies, popular movies, and most rated movies, Also add movies to your own wishlist and watched list.",
        githubLink: "https://github.com/berkayalatas/movie-tracker",
        projectWebsite: "https://movie-tracker-reactapp.netlify.app"
    },
    {
        id:3,
        projectTitle: "Slice Pizza",
        technologies: "PHP - Laravel - MySQL",
        image: slicepizza,
        description: "Customers can create pizza and order. Only restaurant staff can, see orders and make changes.",
        githubLink: "https://github.com/berkayalatas/slice_pizza",
        projectWebsite: "https://slicepizzarestaurant.herokuapp.com"
    },
    {
        id:4,
        projectTitle: "Writing Room",
        technologies: "Python - Django",
        image: writingroom,
        description: "It is a social media app that different users can log in and create their own posts, update posts. They can see other users' posts. Also, they can reset their passwords and change profile pictures.",
        githubLink: "https://github.com/berkayalatas/writing_room",
        projectWebsite: "http://berkayalatas.pythonanywhere.com"
    },
    {
        id:2,
        projectTitle: "PC World",
        technologies: "PHP - MySQL -Bootstrap",
        image: pcWorld,
        description: "A sample e-commerce website consisting of computers only. Customers can add products to their wishlist. They can check computers from different sections and see the total price of their products.",
        githubLink: "https://github.com/berkayalatas/e-commerce-PcWorld",
        projectWebsite: "https://pcworld-ecommerce.herokuapp.com"
    },
    {
        id:6,
        projectTitle: "Tesla Clone",
        technologies: "HTML-CSS-JS",
        image: tesla,
        description: "Tesla Website Clone with Bootstrap.Designed with Bootstrap Studio.",
        githubLink: "https://github.com/berkayalatas/tesla_website",
        projectWebsite: "https://tesla-template.netlify.app"
    },
]

export default portfolioData;