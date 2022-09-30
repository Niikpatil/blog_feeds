import { useState } from "react";
import { Footer } from "./components/Layouts/Footer";
import Header from "./components/Layouts/Header";
import AddBlog from "./components/Pages/AddBlog";
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

    // ___Case-1 : To Delete___
    // const DeleteTask = [...article];
    // DeleteTask.splice(delete_id, 1);

    setArticle(
      article.filter((id) => {
        return id !== delete_id;
      })
    );
  };

  // input from user get added
  const addBlog = (title, content) => {
    // we need to a generate id for unique key value
    let id = article.length !== 0 ? article[article.length - 1].id + 1 : 1;

    const newBlog = {
      id: id,
      title: title,
      content: content,
    };
    setArticle([...article, newBlog]);
    // console.log(newBlog);
  };

  return (
    <div className="App">
      <Header />
      {/* <AddBlog addBlog={addBlog} /> */}
      <Blogs article={article} onDelete={onDelete} />
      <Footer />
    </div>
  );
}

export default App;
