function showDeveloperInfo(lastName, firstName, role = "Розробник сторінки") {
  return "Розробник: " + lastName + " " + firstName + "\nПосада: " + role;
}

function compareStrings(str1, str2) {
  var bigger = str1;

  if (str2.length > str1.length) {
    bigger = str2;
  } else if (str2.length === str1.length && str2 > str1) {
    bigger = str2;
  }

  return "Більший рядок: " + bigger;
}

function renderDeveloperInfo() {
  alert(showDeveloperInfo("Тесленко", "Вероніка"));
}

function runCompareFromInputs() {
  var firstInput = document.getElementById("str-one");
  var secondInput = document.getElementById("str-two");

  if (!firstInput || !secondInput) {
    return;
  }

  alert(compareStrings(firstInput.value, secondInput.value));
}

function runWelcomeDialog() {
  alert("Ласкаво просимо на сайт про подорожі!");

  var country = prompt("Яку країну ти хочеш відвідати?", "Італія");
  var output = document.getElementById("dream-country");
  if (!output) {
    return;
  }

  if (country !== null && country.trim() !== "") {
    output.textContent = "Твоя країна мрії: " + country + ". Чудовий вибір!";
  } else {
    output.textContent = "Обери країну мрії, щоб почати планувати подорож.";
  }
}

function goToDestinations() {
  location.href = "destinations.html";
}

function showDateViaDocumentWrite() {
  var popup = window.open("", "_blank", "width=520,height=260");
  if (!popup) {
    alert("Дозволь відкриття нового вікна для демонстрації document.write().");
    return;
  }

  popup.document.write("<!DOCTYPE html><html lang='uk'><head><meta charset='UTF-8'><title>document.write()</title></head><body>");
  popup.document.write("<h2>Повідомлення для користувача</h2>");
  popup.document.write("<p>Поточна дата: " + new Date().toLocaleString("uk-UA") + "</p>");
  popup.document.write("</body></html>");
  popup.document.close();
}

document.addEventListener("DOMContentLoaded", function() {
  var mainLink = document.getElementById("main-link");
  if (mainLink) {
    mainLink.title = "Поточна сторінка меню";
  }

  var page = location.pathname.split("/").pop();

  if (page === "destinations.html") {
    var images = document.querySelectorAll("img");
    images.forEach(function(img) {
      img.style.border = "3px solid #c2185b";
      img.style.padding = "2px";
      img.style.borderRadius = "8px";
    });

    // Демонстрація DOM-операцій у прихованому вузлі (без змін візуалу сторінки)
    var sandbox = document.createElement("div");
    sandbox.style.display = "none";
    document.body.append(sandbox);

    var sample = document.createElement("p");
    sample.textContent = "Початковий текст";
    sandbox.append(sample);

    sample.innerHTML = "<strong>innerHTML</strong> приклад";
    sample.outerHTML = "<p id='outer-sample'>outerHTML приклад</p>";

    var outerSample = document.getElementById("outer-sample");
    if (outerSample && outerSample.firstChild) {
      var textNodeValue = outerSample.firstChild.data;
      outerSample.textContent = "nodeValue/data довжина: " + textNodeValue.length;
    }

    var createdParagraph = document.createElement("p");
    var createdText = document.createTextNode("Створено через createElement + createTextNode");
    createdParagraph.append(createdText);
    sandbox.append(createdParagraph);

    var prepended = document.createElement("p");
    prepended.textContent = "prepend()";
    sandbox.prepend(prepended);

    var afterNode = document.createElement("p");
    afterNode.textContent = "after()";
    prepended.after(afterNode);

    var replacement = document.createElement("p");
    replacement.textContent = "replaceWith()";
    afterNode.replaceWith(replacement);

    createdParagraph.remove();
    sandbox.remove();
  }
});
