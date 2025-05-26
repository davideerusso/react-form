import { useState } from "react";

useState;
export default function App() {
  const [newArticle, setNewArticle] = useState("");
  const [articleList, setArticleList] = useState([
    "Farina",
    "Acqua",
    "Sale",
    "Lievito",
  ]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newArticleLIst = [...articleList, newArticle];
    setArticleList(newArticleLIst);
    setNewArticle("");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          value={newArticle}
          onChange={(e) => setNewArticle(e.target.value)}
          type="text"
        ></input>
        <button>invia</button>
      </form>
      <ul>
        {articleList.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </>
  );
}
