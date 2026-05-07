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



// =========================================================================

function showSecretTip() {
  document.getElementById('secret-tip').style.display = 'block';
}

document.addEventListener("DOMContentLoaded", function() {
  
  var btnHideSecret = document.getElementById('btn-hide-secret');
  if (btnHideSecret) {
    // Призначаємо функцію властивості onclick
    btnHideSecret.onclick = function() {
      document.getElementById('secret-tip').style.display = 'none';
    };
  }

  // Метод addEventListener, різні обробники на одну подію 
  var btnCheckReady = document.getElementById('btn-check-ready');
  if (btnCheckReady) {
    //  Змінює візуальний стан кнопки
    btnCheckReady.addEventListener('click', function() {
      this.textContent = "Перевірку пройдено!";
      this.style.backgroundColor = "#a7d7b4"; // Робимо зеленою
      this.style.color = "#1f3b2b";
    });
    
    // Виводить повідомлення
    btnCheckReady.addEventListener('click', function() {
      alert("Документи в порядку! Ви повністю готові до подорожі.");
    });
  }

  var btnVip = document.getElementById('btn-vip');
  if (btnVip) {

    var vipHandler = {
      handleEvent: function(event) {
        var targetBtn = event.currentTarget;
        
        // Змінюємо кнопку
        targetBtn.textContent = "👑 VIP-статус активовано!";
        targetBtn.style.backgroundColor = "#c2185b";
        targetBtn.style.color = "white";
        
        alert("Вітаємо! Ви отримали знижку 10% на всі тури.");

        targetBtn.removeEventListener('click', this);
      }
    };

    // Призначаємо об'єкт як обробник події
    btnVip.addEventListener('click', vipHandler);
  }

  // Спливання та делегування 
  var luggageList = document.getElementById('luggage-list');
  if (luggageList) {
    // Замість того, щоб вішати обробник на кожен <li> окремо, 
    // ми вішаємо ОДИН обробник на батьківський <ul>. 
    // Завдяки "спливанню", клік по <li> підніметься до <ul>.
    luggageList.addEventListener('click', function(event) {
      if (event.target.tagName === 'LI') {
        // викреслювання
        event.target.style.textDecoration = "line-through";
        event.target.style.color = "#8e0038";
        event.target.style.backgroundColor = "#fce4ec";
        if (!event.target.textContent.includes("✓")) {
          event.target.textContent += " ✓ (Зібрано)";
        }
      }
    });
  }

});


document.addEventListener("DOMContentLoaded", function() {

  // Делегування
  const list = document.getElementById('priority-list');
  if (list) {
    list.onclick = function(event) {
      let target = event.target;
      if (target.tagName !== 'LI') return; 

      target.classList.toggle('highlight-item');
    };
  }

  // 
  const menu = document.getElementById('menu-actions');
  
  const actionMethods = {
    makeSurprise: function() {
      alert("✨ Ви знайшли квиток у бізнес-клас!");
    },
    toggleTheme: function() {
      document.body.style.filter = document.body.style.filter === 'invert(1)' ? 'none' : 'invert(1)';
    },
    resetAll: function() {
      location.reload(); 
    }
  };

  if (menu) {
    menu.onclick = function(event) {
      let method = event.target.dataset.method;
   
      if (method && actionMethods[method]) {
        actionMethods[method](); 
      }
    };
  }

  
  //
  document.addEventListener('click', function(event) {
    let behavior = event.target.dataset.behavior;

    if (behavior === 'counter') {
      // Поведінка: Лічильник
      let count = parseInt(event.target.textContent.match(/\d+/)) || 0;
      event.target.textContent = `Лічильник кліків: ${++count}`;
    }

    if (behavior === 'toggle-hint') {
      // Поведінка: Показати підказку
      alert(event.target.dataset.hint);
    }
  });

});



   // --- 1: mouseover, mouseout, event.target, event.relatedTarget

// Обробник наведення на зображення
document.addEventListener('mouseover', function(event) {
  if (event.target.tagName === 'IMG') {
    let target = event.target; 
    let related = event.relatedTarget; 

    // Змінюємо стиль 
    target.style.outline = "5px solid #ff4081"; 
    target.style.transform = "scale(1.05)";
    target.style.transition = "all 0.3s ease";
    
    console.log("Курсор перейшов з:", related ? related.tagName : "поза вікном", "на:", target.tagName);
  }
});

// Обробник виходу миші з зображення
document.addEventListener('mouseout', function(event) {
  if (event.target.tagName === 'IMG') {
    let target = event.target;
    
    // Повертаємо стиль назад
    target.style.outline = "none";
    target.style.transform = "scale(1)";
  }
});


// --- ЗАВДАННЯ 2: Drag-and-drop (mousedown, mousemove, mouseup) 

// Створюємо зону кошика 
const dropZone = document.createElement('div');
dropZone.id = 'travel-wishlist';
dropZone.innerHTML = `<h3>🎒 Мій список</h3><ul id="wishlist-items"></ul>`;
Object.assign(dropZone.style, {
  position: 'fixed', top: '100px', right: '20px', width: '200px',
  minHeight: '100px', border: '2px dashed #a7d7b4', backgroundColor: '#f6fffa',
  padding: '10px', zIndex: '1000', borderRadius: '10px'
});
document.body.append(dropZone);

// Логіка перетягування для всіх фото
document.querySelectorAll('img').forEach(img => {
  img.addEventListener('mousedown', function(event) {
    event.preventDefault(); 

    // Створюємо клона для візуального перетягування
    let shiftX = event.clientX - img.getBoundingClientRect().left;
    let shiftY = event.clientY - img.getBoundingClientRect().top;

    let clone = img.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.zIndex = 1000;
    clone.style.width = '100px'; // Робимо меншим при перетягуванні
    clone.style.opacity = '0.7';
    document.body.append(clone);

    function moveAt(pageX, pageY) {
      clone.style.left = pageX - shiftX + 'px';
      clone.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    //  (mousemove)
    document.addEventListener('mousemove', onMouseMove);

    // Закінчення перетягування 
    document.addEventListener('mouseup', function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      
      // Перевіряємо
      let rect = dropZone.getBoundingClientRect();
      if (e.clientX > rect.left && e.clientX < rect.right &&
          e.clientY > rect.top && e.clientY < rect.bottom) {
          
          let li = document.createElement('li');
          li.textContent = "📍 " + (img.alt || "Країна"); // Беремо назву з alt
          document.getElementById('wishlist-items').append(li);
      }

      clone.remove();
      document.removeEventListener('mouseup', onMouseUp);
    });
  });

  img.ondragstart = function() { return false; }; // Вимикаємо стандартний drag
});