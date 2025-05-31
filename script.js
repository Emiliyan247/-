const comments = [
  {
    author: "Паисий Хилендарски",
    quote: "„О, неразумни юроде! Поради что се срамиш да се наречеш българин?“",
    interpretation: "Днес това е призив да се гордеем с българската си идентичност.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Paisij_Hilendarski.jpg"
  },
  {
    author: "Георги С. Раковски",
    quote: "„Българийо, за тебе те умряха...“",
    interpretation: "Жертвата на героите има смисъл, ако сме достойни за нея. Това ни задължава да изграждаме по-справедливо и честно общество. Държавата трябва да отразява достойнството на народа си.",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Georgi_Sava_Rakovski.jpg"
  },
  {
    author: "Любен Каравелов",
    quote: "„Ако спечеля, печели цял народ – ако загубя, губя само мене си.“",
    interpretation: "Истинският лидер действа в името на всички, не само за себе си. Днес това е пример за лична отговорност и гражданска доблест. Рисковете в името на общото благо са най-стойностни.",
    image: "https://upload.wikimedia.org/wikipedia/commons/e/e2/Lyuben_Karavelov.jpg"
  },
  {
    author: "Христо Ботев",
    quote: "„Тоз, който падне в бой за свобода, той не умира.“",
    interpretation: "Делата на смелите надживяват телата им. Ботев ни учи, че каузите остават, когато са водени със сърце и истина. Всяка борба за справедливост ни прави по-близки до свободата.",
    image: "images/botev.jpg"
  },
  {
    author: "Васил Левски",
    quote: "„Времето е в нас и ние сме във времето; то нас обръща и ние него обръщаме.“",
    interpretation: "Левски ни напомня, че ние не сме безсилни пред обстоятелствата. Можем да променяме бъдещето чрез действията си днес. Всеки човек има значение в хода на историята.",
    image: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Vasil_Levski_portrait.jpg"
  },
  {
    author: "Добри Чинтулов",
    quote: "„Стани, стани, юнак балкански!“",
    interpretation: "Това е зов за пробуждане и действие. Днес означава да не сме пасивни пред неправдата и бездействието. Всеки от нас може да бъде „юнак“ – чрез знания, доблест и активна позиция.",
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Dobri_Chintulov.jpg"
  }
];

const gallery = document.getElementById("gallery");

comments.forEach(({ author, quote, interpretation, image }) => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${image}" alt="${author}" class="portrait">
    <div class="quote">${quote}</div>
    <div class="interpretation">${interpretation}</div>
    <div class="author"><strong>${author}</strong></div>
  `;

  gallery.appendChild(card);
});
