


/**
 * An Abstract Class which be inherited to form the Todo class and the input class.
 * The main reason for existence of this class is to share event listener code for both
 * Todo and InputTodo.
 *
* */
class AbstractTodo {
    constructor() {
        this.templateElem = document.importNode(document.getElementById("todo").content, true);
    }

    _addListeners() {
        let dropDownDiv = this.templateElem.querySelector(".dropdown"),
            defaultDue = this.templateElem.querySelector(".default-item"),
            dropDownContent = this.templateElem.querySelector(".dropdown-content");

        function showDropDown() {
            dropDownContent.classList.add("show");
        }

        function hideDropDown() {
            dropDownContent.classList.remove("show");
        }

        function setDueColor() {
            if (defaultDue.textContent == "today") {
                defaultDue.classList.remove("tomorrow-color");
                defaultDue.classList.remove("next-week-color");

            } else if (defaultDue.textContent == "tomorrow") {
                defaultDue.classList.remove("next-week-color");
                defaultDue.classList.remove("tomorrow-color");
                defaultDue.classList.add("tomorrow-color");

            } else if (defaultDue.textContent == "next week") {
                defaultDue.classList.remove("next-week-color");
                defaultDue.classList.remove("tomorrow-color");
                defaultDue.classList.add("next-week-color");
            }
        }

        function setDefaultDue(target) {
            defaultDue.textContent = target.textContent;
            setDueColor();
            hideDropDown();
        }

        function deleteTodo() {
            parentNode.remove();
        }

        dropDownDiv.addEventListener("click", (event) => {
            if (event.target.isSameNode(defaultDue)) {
                showDropDown();
            } else if (event.target.classList.contains("dropdown-item")) {
                setDefaultDue(event.target);
            } else if (event.target.classList.contains("delete-icon")) {
                deleteTodo();
            } else {
                hideDropDown();
            }
        });

        dropDownDiv.addEventListener("mouseenter", (event) => {
            showDropDown();
        });

        dropDownDiv.addEventListener("focus", (event) => {
            if (event.target.isSameNode(defaultDue)) {
                showDropDown();
            }
        });

        dropDownDiv.addEventListener("mouseleave", (event) => {
            hideDropDown();
        });

        setDueColor();
    }
}


class Todo extends AbstractTodo {
    constructor(task, due, number) {
        super();
        this.task = task.trim();
        this.due = due.trim();
        this.number = number;
    }

    _assembleTodoElem() {
        let todoDesc = this.templateElem.querySelector(".todo-task");
        todoDesc.textContent = this.task;

        this.templateElem.querySelector(".default-item").textContent = this.due;
    }

    render() {
        this._assembleTodoElem();
        this._addListeners();
        document.querySelector(".todo-main").appendChild(this.templateElem);
        this.appendedElem = document.querySelector(".todo-item:last-child");
        this.addDeleteListener();
    }

    addDeleteListener() {
        this.appendedElem.querySelector(".delete-icon").addEventListener("click", (event) => {
            this.appendedElem.remove();
        });
    }
}

class InputTodo extends AbstractTodo {
    constructor() {
        super();
    }

    _assembleTodoElem() {
        // replace the p elem with input div
        let inputElem = document.importNode(document.getElementById("input").content, true),
            addButton = document.importNode(document.getElementById("addButton").content, true);


        this.templateElem.querySelector(".flex-container").replaceChild(
            inputElem,
            this.templateElem.querySelector(".todo-task")
        );
        this.templateElem.querySelector(".flex-container").replaceChild(
            addButton,
            this.templateElem.querySelector(".button-wrapper")
        );
    }

    _addListeners() {
        super._addListeners();
        let inputField = this.templateElem.getElementById("todo-adder"),
            addButton = this.templateElem.getElementById("add-button"),
            defaultDue = this.templateElem.querySelector(".default-item"),

            resetDue = function (event) {
                defaultDue.textContent = "today";
                defaultDue.classList.remove("tomorrow-color");
                defaultDue.classList.remove("next-week-color");

            }.bind(this),

            addTodo = function (event) {
                if (inputField.value.trim() != "") {
                    let todoInputText = inputField.value.trim(),
                        dueDate = defaultDue.textContent;

                    let newTodo = new Todo(todoInputText, dueDate, 1);
                    newTodo.render();

                    inputField.value = "";
                    resetDue();
                }
            }.bind(this);

        addButton.addEventListener("click", addTodo);

        inputField.addEventListener("keypress", (event) => {
            if (event.keyCode == 13) {
                addTodo(event);
            }
        });
    }

    render() {
        this._assembleTodoElem();
        this._addListeners();

        let theChild = document.querySelector(".todo-main").appendChild(this.templateElem);
        this.appendedChild = document.querySelector(".todo-item:last-child");

    }
}