let emojiList = [];

fetch('./emojis.json')
  .then(response => response.json())
  .then(data => {
    emojiList = data.emojis
    
    mapEmojis(emojiList)
  }
);


function colorGenerator() {
  let red = Math.floor(50 +(Math.random() * 200));
  let green = Math.floor(50 +(Math.random() * 200));
  let blue = Math.floor(50 +(Math.random() * 200));
  let alpha = 1;

  let color = `rgb(${red}, ${green}, ${blue}, ${alpha})`;

  return color;
}

const cardElement = document.querySelector("#cardContainer");

function mapEmojis(emojiList) {
  const cards = emojiList.map((card)=>{
    return `
        <div class="card text-center" onclick="copyToClipboard('${card.code}')">
          <div class="card-header" style="background-color:${colorGenerator()}">
          <span class="emoji-icon">${card.emoji}</span>
          </div>
          <div class="moji-code">
            ${card.code}
          </div>
          <div class="moji-description">
            ${card.description}
          </div>
        </div>
    `
  }).join('');

  cardElement.innerHTML=cards;
}


