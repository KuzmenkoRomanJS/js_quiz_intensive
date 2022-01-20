"use strict";

const main = document.querySelector(".main");
const selection = document.querySelector(".selection");
const title = document.querySelector(".main__title");

const getData = () => {
  const dataBase = [
    {
      id: "01",
      theme: "Тема01",
      result: [
        [40, "Неплохо, но можно лучше!"],
        [80, "Хорошо, но есть пробелы!"],
        [100, "Отлично!"],
      ],
      list: [
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "не правильный",
            "не правильный",
          ],
          correct: 2,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "не правильный",
            "не правильный",
          ],
          correct: 2,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "не правильный",
            "не правильный",
          ],
          correct: 2,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "не правильный",
            "не правильный",
          ],
          correct: 2,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "не правильный",
            "не правильный",
          ],
          correct: 2,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
          correct: 1,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "правильный3",
            "не правильный",
          ],
          correct: 3,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "правильный3",
            "не правильный",
          ],
          correct: 3,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
      ],
    },
    {
      id: "02",
      theme: "Тема02",
      result: [
        [30, "Неплохо, но можно лучше!"],
        [60, "Хорошо, но есть пробелы!"],
        [100, "Отлично!"],
      ],
      list: [
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "не правильный",
            "не правильный",
          ],
          correct: 2,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "не правильный",
            "не правильный",
          ],
          correct: 2,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "не правильный",
            "не правильный",
          ],
          correct: 2,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "не правильный",
            "не правильный",
          ],
          correct: 2,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
          correct: 1,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "правильный3",
            "не правильный",
          ],
          correct: 3,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
        {
          type: "checkbox",
          question: "Вопрос",
          answer: [
            "правильный1",
            "правильный2",
            "правильный3",
            "не правильный",
          ],
          correct: 3,
        },
        {
          type: "radio",
          question: "Вопрос",
          answer: [
            "правильный1",
            "не правильный",
            "не правильный",
            "не правильный",
          ],
        },
      ],
    },
  ];

  return dataBase;
};

const hideElem = (elem) => {
  let opacity = getComputedStyle(elem).getPropertyValue("opacity");

  const animation = () => {
    opacity -= 0.05;
    elem.style.opacity = opacity;

    if (opacity > 0) {
      requestAnimationFrame(animation);
    } else {
      elem.style.display = "none";
    }
  };

  requestAnimationFrame(animation);
};

const renderTheme = (themes) => {
  const list = document.querySelector(".selection__list");
  list.textContent = "";

  const buttons = [];

  for (let i = 0; i < themes.length; i += 1) {
    const li = document.createElement("li");
    li.className = "selection__item";

    const button = document.createElement("button");
    button.className = "selection__theme";
    button.dataset.id = themes[i].id;
    button.textContent = themes[i].theme;

    li.append(button);
    list.append(li);

    buttons.push(button);
  }
  return buttons;
};

const createAnswer = (data) => {
  const type = data.type;

  return data.answer.map((item) => {
    const label = document.createElement("label");
    label.className = "answer";
    const input = document.createElement("input");
    input.type = type;
    input.name = "answer";
    input.className = `answer__${type}`;

    const text = document.createTextNode(item);

    label.append(input, text);

    return label;
  });
};

const renderQuiz = (quiz) => {
  hideElem(title);
  hideElem(selection);

  const questionBox = document.createElement("div");
  questionBox.className = "main__box main__box-question";

  main.append(questionBox);

  let questionCount = 0;

  const showQuestion = () => {
    const data = quiz.list[questionCount];
    questionCount += 1;

    questionBox.textContent = "";

    const form = document.createElement("form");
    form.className = "main__form-question";
    form.dataset.count = `${questionCount}/${quiz.list.length}`;

    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.className = "main__subtitle";
    legend.textContent = data.question;

    const answer = createAnswer(data);

    const button = document.createElement("button");
    button.className = "main__button question__next";
    button.type = "submit";
    button.textContent = "Подтвердить";

    fieldset.append(legend, ...answer);

    form.append(fieldset, button);

    questionBox.append(form);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let ok = false;
      const answer = [...form.answer].map((input) => {
        if (input.checked) ok = true;
        return input.checked ? input.value : false;
      });
      console.log(answer);

      if (ok) {
        console.log(answer);
      } else {
        console.error("Не выбран вариант ответа. Выбирите");
      }
    });
  };

  showQuestion();
};

const addClick = (buttons, data) => {
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const quiz = data.find((item) => item.id === btn.dataset.id);
      renderQuiz(quiz);
    });
  });
};

const initQuiz = () => {
  const data = getData();

  const buttons = renderTheme(data);

  addClick(buttons, data);
};

initQuiz();
