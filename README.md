# its-real
## This app created vine
### after clone please type npm i and npm run dev
1. Знакомы ли вы с AntDesign?
Да я использовал AntDesign, ее применение ни чем не отличается от других библиотек UI компонентов.
2. 2. Знаком ли React Native. Какой опыт работы?
С React Native пока работать не приходилось.
3. Писали ли вы тест с использованием jest? Может быть на чем то другом приходилось писать тесты?
Именно на jest тесты не писал, использовал react testing library (по сути jest)
Ссылка на некоторые проекты, выполненные на React:
https://github.com/nos64/memory-game-react - вариант игры memory game (ссылка на деплой в README репо)
https://github.com/nos64/task-manager_clone - вариант трекера задач. Выполнено в команде из 3 человек.
#### Задание 1 Дана строка, содержащая скобки трёх видов (круглые, квадратные и фигурные) и любые другие символы. Посчитайте сколько скобок расставлено корректно а сколько нет. Например, в строке ([]{})[] скобки расставлены корректно, а в строке ([]] — нет. В первом случае правильно расставлено 8 скобок. Во втором случае указаны 2 скобки правильно, и 2 не правильно.

Задачу можно решить, например с помощью стека.
Создаем пустой массив-стек.
Создаем массив-словарь с открывающимися скобками
Создаем переменную счетчик правильных скобок с начальным значением 0 и переменную счетчик не правильно расставленных скобок с начальным значением 0.
Запускаем цикл for от 0 до длинны входящей строки, проверяем если элемент строки содержится в массиве открывающихся скобок, то добавляем текущий элемент строки в стэк или если текущий элемент не содержится в массиве-словаре открывающихся скобок, то проверяем если стек пуст, то возвращаем false и переходим к следующему элементу строки в цикле for. Если стек не пуст и текущий элемент строки не содержится в словаре открывающихся скобок о проверяем равна ли текущая закрывающая скобка находящейся в стеке открывающей, если равна то увеличиваем переменную счетчик на 2 и убираем открывающуюся скобку из стека  pop(). 
Для получения не правильно расставленных скобок вычитаем из длины строки со скобками  количество правильно расставленных скобок.
  
      function braces(braces){
        let stack = [];
        const open = ['(', '[', '{'];
        let rightCount = 0;
        let wrongCount = 0
        for(let i=0; i < braces.length; i++){
          if (open.includes(braces[i])) {
            stack.push(braces[i]);
          } else{
            if(stack.length === 0) return false
            if( (braces[i] === ']' && stack[stack.length-1] === '[')
            || (braces[i] === '}' && stack[stack.length-1] === '{')
            || (braces[i] === ')' && stack[stack.length-1] === '(')) {
              stack.pop();
              rightCount += 2
            }
          }
        }
        wrongCount = braces.length - rightCount
        return {
          'rightBraces': rightCount,
          'wrongBraces': wrongCount
        }
      }
  
**Файл с решением задачи дополнительно разместил в: src/utils/braces.ts**


Задание 2 Вам необходимо сделать функциональными компонентами следующую задачу: На странице есть список и кнопка добавления в этот список нового элемента. 
Каждый элемент списка отображает свой порядковый номер и обратный отсчет в секундах до его автоматического удаления из списка. 
Каждый добавленный элемент, должен находится в нем случайное количество секунд от 10 до 30. При исчезновении во всем списке пересчитывается порядковый номер.
 Пример: Пользователь нажал на кнопку добавить три раза. В списке появилось три элемента. 
1. Исчезнет через 13 секунд 
2. Исчезнет через 25 секунд 
3. Исчезнет через 15 секунд.


 По истечению 13 секунд, из списка будет удален 1 элемент. 
И он станет вот таким: 
1. Исчезнет через 12 секунд 
2. Исчезнет через 2 секунды
