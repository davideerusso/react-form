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
      <section className="container container-form">
        <div className="input-container ">
          <form className="input-flex " onSubmit={handleFormSubmit}>
            <input
              className="input "
              value={newArticle}
              onChange={(e) => setNewArticle(e.target.value.trim())}
              type="text"
              minLength="3"
              placeholder="Inserisci testo"
            ></input>

            <button className="button">invia</button>
          </form>
          <p className="error"> {errorMessage && <p>{errorMessage}</p>}</p>
        </div>

        <div
          className="container-list 
        "
        >
          <ul className="ul-flex">
            {articleList.map((article, index) => (
              <li className="list-li border" key={index}>
                <div>{article}</div>

                <div>
                  <FontAwesomeIcon
                    className="icon-trash"
                    onClick={() => handleToDelete(index)}
                    icon="fa-solid fa-trash"
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
