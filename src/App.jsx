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
  const [errorMessage, setErrorMessage] = useState();

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log(newArticle);
    {
      newArticle === ""
        ? setErrorMessage("L'input non può essere vuoto")
        : setErrorMessage("");
    }

    console.log(newArticle);

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
          minlength="3"
        ></input>

        <button>invia</button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
      <ul>
        {articleList.map((article, index) => (
          <li key={index}>{article}</li>
        ))}
      </ul>
    </>
  );
}
