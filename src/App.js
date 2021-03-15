import React from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
//import "fullpage.js/vendors/scrolloverflow";
//import ReactFullpage from "@fullpage/react-fullpage";

const App = () => {
  return (
    <div>
 
        <Navigation />
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <Footer />

    </div>
  )
}

export default App;

// class MySection extends React.Component {
//   render() {
//     return (
//       <div className="section">
//         <div>{this.props.content}</div>
//       </div>
//     );
//   }
// }
// class App extends React.Component {
//   onLeave(origin, destination, direction) {
//     //console.log("Leaving section " + origin.index);
//   }
//   afterLoad(origin, destination, direction) {
//     //console.log("After load: " + destination.index);
//   }
//   render() {
//     const anchors = ["home", "about", "contact"];

//     return (
//       <ReactFullpage
//         anchors={anchors}
//         navigation
//         scrollingSpeed={600}
//         navigationTooltips={anchors}
//         scrollOverflow={false}
//         scrollBar={true}
//         licenseKey='YOUR_KEY_HERE'
//         onLeave={this.onLeave.bind(this)}
//         afterLoad={this.afterLoad.bind(this)}
        
//         render={({ state, fullpageApi }) => {
//           return (
//             <>           
//              <Navigation /> 
//               <MySection content={<Home />} />

//               <MySection content={<About />} />

//               <MySection content={ <Contact />} />
//               {/* <button onClick={() => fullpageApi.moveTo(1, 0)}>
//                   Move top
//                 </button> */}
 
//               <Footer /> 
//             </>
//           );
//         }}
//       />
//     );
//   }
// }