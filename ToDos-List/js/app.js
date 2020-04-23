

(function (window) {

    function ready(fn) {
        if (document.readyState != 'loading') {
            fn();
        } else {
            document.addEventListener('DOMContentLoaded', fn);
        }
    }

    function addSomeTodos() {
        for (var i = 0; i < 2; i++) {
            let newTodo = new Todo(`Task ${i}`, "next week", 1);
            newTodo.render();
        }
    }

    function getLocalData() {

    }

    function onReady() {

        let inputTodo = new InputTodo();
        inputTodo.render();
        addSomeTodos();

        // addListeners();
    }

    ready(onReady);


})(window);

