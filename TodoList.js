class TodoList extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `
        <style>
        ul{
        list-style:square;
        font-size:20px;
        }
        div{
            display: flex;
            flex-direction: column;
            margin-left:450px;
            width:20%;
            position:relative;
            padding:30px;
        }
        h1{
            text-align:center;
        }
        #inputBox{
            padding: 8px 10px;
            border: 2px double;
            font-size:20px;
            margin:10px
        }
        button{
            font-weight: 500;
            font-size: 16px;
            background-color: #0d75ec;
            border: none;
            color: #ffffff;
            cursor: pointer;
            outline: none;
            width: 93%;
            height: 35px;
            margin-left:10px;
            border-radius: 5px;
            font-family: 'Poppins',sans-serif;
        }

        </style>
        <div classname="main" >
        <h1>ToDoList</h1>
        <input type="text" id="inputBox">
        <button id="itemButton">Add item </button>
        <ul id="itemList" ></ul>
        </div>
        `;
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));

    // Access the content
    this.inputBox = this.shadowRoot.querySelector("#inputBox");
    this.itemButton = this.shadowRoot.querySelector("#itemButton");
    this.itemList = this.shadowRoot.querySelector("#itemList");

    // Add eventListener
    this.itemButton.addEventListener("click", this.addItem.bind(this));
  }
  // addItem function
    addItem = () => {
        const list = document.createElement("li");
        list.textContent = this.inputBox.value;
        this.itemList.appendChild(list);
        this.inputBox.value = "";
  };
}

customElements.define("todo-list", TodoList);
