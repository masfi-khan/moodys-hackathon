var todo = todo || {},
    data = JSON.parse(localStorage.getItem("todoData"));

data = data || {};
function welcome() {
  var value = document.getElementById("todo-text").value;           //create value variable that corresonds with text in list
  var list = document.getElementById("ourList");                    //create list variable that corresponds with list in HTML
  var element = document.createElement('li');                       //create element variable acts as a list item
  element.innerHTML = value;                                        //element added become the data in the value variable
  list.appendChild(element);                                        //add element to list
}

(function (todo, data, $) {


    todo.init = function () {


        $.each(data, function (index, params) {

        });


        $('#add-btn').click(function (e) {

        });



    };

    var removeElement = function (id) {

    };

    todo.add = function () {
        var todotext = $('#todo-text').val();

    };


})(todo, data, jQuery);
