// Create a "close" button and append it to each list item
var myNodelist = [];
var myDoneList = [];
var myPriorityList = [];
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("Done");
  span.className = "done";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// Click on a done button to hide the current list item
var done = document.getElementsByClassName("done");

var priority = document.getElementsByClassName("priority");

// Create a new list item when clicking on the "Add" button
function newElement() {
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);

  var li = document.createElement("li");
  li.appendChild(t);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }

  document.getElementById("myInput").value = "";

  var e = document.createElement("SPAN");
  e.className = "priority";
  e.innerHTML = '<i class="fa fa-star-o"></i>';
  li.appendChild(e);

  for (i = 0; i < priority.length; i++) {
    priority[i].onclick = function () {
      var ul = this.parentElement.parentElement;

      const items = ul.childNodes;
      console.log(ul, items);
      moveItem(i, 0, ul, items);
    };
  }

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

  var span = document.createElement("SPAN");
  span.innerHTML = "Mark as Done";
  span.className = "done";
  li.appendChild(span);

  for (i = 0; i < done.length; i++) {
    done[i].onclick = function () {
      const text = this.parentElement;
      const s = text.innerHTML
        .replace(/<[^>]*>/g, "")
        .replace("\u00D7", "")
        .replace("Mark as Done", "");
      console.log(s);
      addToDone(s);
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

function addToDone(text) {
  var t = document.createTextNode(text);

  var li = document.createElement("li");
  li.className = "done-task";
  li.appendChild(t);

  document.getElementById("done-list").appendChild(li);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}

const moveItem = (from, to, ul, items) => {
  if (to > items.length - 1 || to < 0) return;

  const item = items[from - 1];
  console.log(item);
  if (!item) return;

  ul.removeChild(item);
  ul.insertBefore(item, ul.children[to]);
};
