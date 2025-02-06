// // import Navbar from "./components/Navbar";
// // import Main from "./components/Main";
// // import Footer from "./components/Footer";
// // import Sidebar1 from "./components/Sidebar1";
// // import Sidebar2 from "./components/Sidebar2";

// function App() {
//   return (
//     <div className="app">
//       <Navbar />
//       <Main></Main>
//       <div className="sidebar">
//         <Sidebar1 />
//         <Sidebar2 />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

// import CBCprop1 from "./propsexample/CBCprop1";
// const App=() =>{
//   return (
//     <div>
//       <CBCprop1
//         username="Sam"
//         age={25}
//         desig={["developer", "tester"]}
//         userDetails={{ city: "Hyd", area: "Maisammaguda" }}
//         sendfun={function () {
//           alert("Hi iam from a parent component");
//         }}
//       />
//     </div>
//   );
// }
// export default App;

// import React from "react";
// //import funprops from "./propsexample/funprops";
// import funprops from "./propsexample/funprops";

// const App = () => {
//   return (
//     <div>
//       <funprops
//         username="Ashh"
//         isLoggedIn={false}
//         hobbies={"Dancing"}
//       ></funprops>
//     </div>
//   );
// };
// export default App;

import React from "react";

import FBCStateEx from "./stateexamples/FBCStateEx";
const App = () => {
  return (
    <div>
      <FBCStateEx username="Hi" company="Meta">
        <h1>This data is passed as props children</h1>
      </FBCStateEx>
    </div>
  );
};
export default App;
