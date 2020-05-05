import React from "react";
import "./styles.css";
export default function App() {
  const Form = () => {
    var todoText = "";
    var todoLength = 0;
    return (
      <div>
        <form
          onSubmit={e => {
            e.preventDefault();
            if (!todoText !== "") {
              addTodo(todoText);
            }
            todoText = "";
            document.getElementById("input").value = "";
            todoLength = 0;
            document.getElementById("counter").innerHTML = 27;
          }}
        >
          <input
            id="input"
            type="text"
            placeholder="Add Todo..."
            className="textBox"
            onChange={textbox => {
              todoText = textbox.target.value;
              todoLength = todoText.length;
              document.getElementById("counter").innerHTML = 27 - todoLength;
            }}
            maxLength="27"
          />
          <p id="counter">27</p>
        </form>
      </div>
    );
  };

  function addTodo(text) {
    const div = document.createElement("div");
    const button = document.createElement("button");
    const todoText = document.createTextNode(text);
    const img = document.createElement("img");
    const App = document.getElementById("App");

    button.setAttribute("class", "todo");
    button.setAttribute("id", " ");

    img.setAttribute("class", "trashIcon");
    img.setAttribute(
      "src",
      "https://img.icons8.com/ultraviolet/40/000000/xbox-x.png"
    );

    button.appendChild(todoText);
    button.appendChild(img);
    div.appendChild(button);
    App.appendChild(div);

    button.addEventListener("click", () => {
      try {
        button.setAttribute("id", "btnClicked");
      } catch (TypeError) {}
    });

    img.addEventListener("click", () => {
      div.remove();
    });
  }

  return (
    <div className="App" id="App">
      <Form />
    </div>
  );
}
