Данный проект создан на основе обучающих видео и направлен на помощь дизайнерам в подборе цветовой гаммы для своих проектов.

Основные скрипты, на которых работает данное приложение, находятся в файле app.js. 
Константа cols нужна для того, чтобы вытягивать из index.html все классы .color и совершать над ними 
различные операции.

Далее мы вызываем addEventListener для того, чтобы отслеживать нажатие на "space". Нам это необходимо так как 
при нажатии на "space" мы запускаем рандомайзер цветов.

Следующий addEventListener необходимо для смены классов в замке, и впоследующем блокировки нужного цвета.

Функция generateRandomColor генерирует случайный цвет. Сделано это посредством случайного выбора
избранных чисел и букв, складывая которые мы вызываем определённый цвет. С помощью цикла for мы последовательно
подбираем случайные значения из константы nCode. 

Функция copyTextOnClick позволяет скопировать код цвета при клике на него.

В проекте использована небольшая библиотека chroma.js. Для установки цвета текста, который будет зависеть от цвета фона. 
Если фон слишком светлый, то цвет перекрашивается в чёрный цвет.

Функция updateColorsHash создана для того, чтобы добавлять в адресную строку выбранные цвета. 
Благодаря этому можно скопировать ссылку с выбранными цветами и отправить другому человеку, который сможет открыть сайт и сразу
увидеть выбранные другим пользователем цвета. В функцию мы передаём массив colors, в котором записаны случайные либо выбранные цвета.

Функция getColorsFromHash обеспечивает сбор и обработку hash, чтобы преобразовать его в готовый массив. 
В случае отсутствия выбранных ранее цветов, функция возвращает пустой массив.

Функция setRandomColor является основной в файле, которая объединяет весь функционал приложения.
Константа colors является массивом, который может быть инициализирован при загрузке страницы, либо брать 
значения из функции getColorsFromHash.
Далее мы вызываем для константы cols цикл forEach, в который передаём цвет (col) и индекс. 
Index необходим для подбора цветов, так как мы можем либо сгенерировать случайный цвет, либо подставить в массив цвет из hash.


This project was created on the basis of training videos and is aimed at helping designers in the selection of colors for their projects.

The main scripts that this application runs on are in the file app.js .
The cols constant is needed in order to pull from index.html all .color classes and perform
various operations on them.

Next, we call addEventListener in order to track the click on "space". We need this because
when we click on "space" we launch the color randomizer.

The next addEventListener is needed to change classes in the lock, and the subsequent lock of the desired color.

The generateRandomColor function generates a random color. This is done by randomly selecting
selected numbers and letters, adding which we cause a certain color. Using the for loop, we sequentially
select random values from the nCode constant. 

The copyTextOnClick function allows you to copy the color code when you click on it.

The project uses a small library chroma.js. To set the text color, which will depend on the background color. 
If the background is too light, then the color is repainted in black.

The updateColorsHash function is designed to add selected colors to the address bar. 
Thanks to this, you can copy the link with the selected colors and send it to another person who can open the site and immediately
see the colors selected by another user. To the function we pass an array of colors, in which random or selected colors are recorded.

The getColorsFromHash function provides the collection and processing of hash to convert it into a ready array. 
If there are no previously selected colors, the function returns an empty array.

The setRandomColor function is the main one in the file, which combines all the functionality of the application.
The colors constant is an array that can be initialized when the page loads, or take
values from the getColorsFromHash function.
Next, we call a forEach loop for the cols constant, to which we pass the color (col) and index. 
Index is necessary for color matching, since we can either generate a random color, or substitute a hash color into the array.