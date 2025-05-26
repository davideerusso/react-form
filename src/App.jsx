import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    setErrorMessage("");

    if (newArticle === "") {
      setErrorMessage("L'input non può essere vuoto");
      return;
    }

    const newArticleLIst = [...articleList, newArticle];
    setArticleList(newArticleLIst);
    setNewArticle("");
  };
  const handleToDelete = (indexDelete) => {
    const newArticleLIst = articleList.filter(
      (article, index) => index != indexDelete
    );
    setArticleList(newArticleLIst);
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
          <li key={index}>
            {article}
            <FontAwesomeIcon
              onClick={() => handleToDelete(index)}
              icon="fa-solid fa-trash"
            />
          </li>
        ))}
      </ul>
    </>
  );
}
