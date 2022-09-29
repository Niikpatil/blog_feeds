// import "./App.css";

import Blogs from "./components/Pages/Blogs";

function App() {
  const content = [
    {
      id: 1,
      title: "Meditation",
      content: "Meditaion keeps your mental helth good.",
    },
    {
      id: 2,
      title: "Stay fit",
      content: "Physical activity important for Health",
    },
    {
      id: 3,
      title: "Running",
      content: "Keep your Heart helthy",
    },
  ];

  return (
    <div className="App">
      <Blogs content={content} />
    </div>
  );
}

export default App;
