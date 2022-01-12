import React from "react";
import "./App.css";
import Navigation from "./components/navbar/Navigation";
import Footer from "./components/footer/Footer";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import NotFound from "./components/notFound/NotFound"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
// import "fullpage.js/vendors/scrolloverflow";
// import ReactFullpage from "@fullpage/react-fullpage";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
            <About />
            <Portfolio />
            <Contact />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/portfolio">
            <Portfolio />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <Redirect exact to="/404" />
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

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
//     const anchors = ["home", "about", "portfolio", "contact"];

//     return (
//       <ReactFullpage
//         anchors={anchors}
//         navigation
//         scrollingSpeed={600}
//         navigationTooltips={anchors}
//         scrollOverflow={true}
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

//               <MySection content={ <Portfolio />} />

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
// export default App;