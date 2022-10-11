import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import AddBlog from "./components/Pages/AddBlog";
import Blogs from "./components/Pages/Blogs";
import About from "./components/Layouts/About";
import Main from "./components/Layouts/Main";
import "./App.css";

function App() {
  const [article, setArticle] = useState([
    {
      id: 1,
      title: "Meditation",
      content:
        "Meditation can give you a sense of calm, peace and balance that can benefit both your emotional well-being and your overall health. You can also use it to relax and cope with stress by refocusing your attention on something calming. Meditation can help you learn to stay centered and keep inner peace.",
    },
    {
      id: 2,
      title: "Physical activity",
      content:
        "Regular moderate intensity physical activity can increase HDL (good) cholesterol while maintaining or offsetting increases in LDL (bad) cholesterol. Research supports the theory that high intensity aerobic activity is needed to lower LDL levels",
    },
    {
      id: 3,
      title: "Running",
      content:
        " Running is an incredibly efective fat burning exercise. In fact, when it comes to losing weight, it's difficult to beat. According to data from the American Council on Exercise, a runner who weighs 180 pounds burns 170 calories when running for 10 minutes at a steady pace",
    },
  ]);

  const onDelete = (delete_id) => {
    console.log(delete_id);

    // ___Method - 1 : To Delete using splice___
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
      <Main>
        <Routes>
          <Route
            path="/"
            element={<Blogs article={article} onDelete={onDelete} />}
          ></Route>
          <Route path="addblog" element={<AddBlog addBlog={addBlog} />}></Route>
          <Route path="about" element={<About />}></Route>
        </Routes>
      </Main>
    </div>
  );
}

export default App;
