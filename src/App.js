import { useState } from "react";
import Blogs from "./components/Pages/Blogs";

function App() {
  const [article, setArticle] = useState([
    {
      id: 1,
      title: "Meditation",
      content: "Meditation keeps your mental health good.",
    },
    {
      id: 2,
      title: "Stay fit",
      content: "Physical activity important for Health",
    },
    {
      id: 3,
      title: "Running",
      content: "Keep your Heart healthy",
    },
  ]);

  const onDelete = (delete_id) => {
    console.log(delete_id);
    setArticle(
      article.filter((e) => {
        return e !== delete_id;
      })
    );
  };

  return (
    <div className="App">
      <Blogs
        article={article}
        onDelete={onDelete}
        //  onEdit={onEdit}
      />
    </div>
  );
}

export default App;
