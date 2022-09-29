import { useState } from "react";
import Blogs from "./components/Pages/Blogs";
// import "./App.css";

function App() {
  const onDelete = (id) => {
    console.log(id);
    setArticle(
      article.filter((e) => {
        return e !== id;
      })
    );
  };

  const [article, setArticle] = useState([
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
  ]);

  return (
    <div className="App">
      <Blogs article={article} onDelete={onDelete} />
    </div>
  );
}

export default App;
