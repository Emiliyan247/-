const comments = [
  {
    author: "Паисий Хилендарски",
    quote: "„О, неразумни юроде! Поради что се срамиш да се наречеш българин?“",
    interpretation: "Днес това е призив да се гордеем с българската си идентичност.",
    images: "images/paisii.jpg"
  },
  {
    author: "Георги С. Раковски",
    quote: "„Българийо, за тебе те умряха...“",
    interpretation: "Жертвата на героите има смисъл, ако сме достойни за нея. Това ни задължава да изграждаме по-справедливо и честно общество. Държавата трябва да отразява достойнството на народа си.",
    images: "images/rakowski.jpg"
  },
  {
    author: "Любен Каравелов",
    quote: "„Ако спечеля, печели цял народ – ако загубя, губя само мене си.“",
    interpretation: "Истинският лидер действа в името на всички, не само за себе си. Днес това е пример за лична отговорност и гражданска доблест. Рисковете в името на общото благо са най-стойностни.",
    images: "images/karawelow.jpg"
  },
  {
    author: "Христо Ботев",
    quote: "„Тоз, който падне в бой за свобода, той не умира.“",
    interpretation: "Делата на смелите надживяват телата им. Ботев ни учи, че каузите остават, когато са водени със сърце и истина. Всяка борба за справедливост ни прави по-близки до свободата.",
    images: "images/botev.jpg"
  },
  {
    author: "Васил Левски",
    quote: "„Времето е в нас и ние сме във времето; то нас обръща и ние него обръщаме.“",
    interpretation: "Левски ни напомня, че ние не сме безсилни пред обстоятелствата. Можем да променяме бъдещето чрез действията си днес. Всеки човек има значение в хода на историята.",
    images: "images/lewski.jpg"
  },
  {
    author: "Добри Чинтулов",
    quote: "„Стани, стани, юнак балкански!“",
    interpretation: "Това е зов за пробуждане и действие. Днес означава да не сме пасивни пред неправдата и бездействието. Всеки от нас може да бъде „юнак“ – чрез знания, доблест и активна позиция.",
    images: "images/chintilow.jpg"
  }
];

const gallery = document.getElementById("gallery");

comments.forEach(({ author, quote, interpretation, image }) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${images}" alt="${author}" class="portrait">
    <div class="quote">${quote}</div>
    <div class="interpretation">${interpretation}</div>
    <div class="author"><strong>${author}</strong></div>
  `;

  gallery.appendChild(card);
});
