const quotes = [
  {
    quote: "우리는 그곳에서 괴로울 거야. 하지만 그보다 많이 행복할 거야.",
    author: "김초엽, 『순례자들은 왜 돌아오지 않는가』",
  },
  {
    quote: "지구에 남는 이유는 단 한 사람으로 충분했을 거야.",
    author: "김초엽, 『순례자들은 왜 돌아오지 않는가』",
  },
  {
    quote: "할머니는 그 부분을 읽을 때면 늘 미소를 지었다. \"그는 놀랍고 아름다운 생물이다.\"",
    author: "김초엽, 『스펙트럼』",
  },
  {
    quote: "지금껏 단 한 번도 본 적 없고 느낀 적 없는 무언가가 아주 그리워지는 감정이었다.",
    author: "김초엽, 『공생 가설』",
  },
  {
    quote: "아무리 가속하더라도, 빛의 속도에는 미치지 못할 것이다. 한참을 가도 그녀가 가고자 했던 곳에는 닿지 못할 것이다. 그러나 안나의 뒷모습은 자신의 목적지를 확신하는 것처럼 보였다.",
    author: "김초엽, 『우리가 빛의 속도로 갈 수 없다면』",
  },
  {
    quote: "그녀는 언젠가 정말로 슬렌포니아에 도착할지도 모른다. 어쩌면, 아주 오랜 시간이 흐른 끝에.",
    author: "김초엽, 『우리가 빛의 속도로 갈 수 없다면』",
  },
  {
    quote: "무언가 중요한 것이 가슴속에서 빠져나가버린 듯 싸늘했고, 나는 그게 생각이나 관념이 아닌 실재하는 감각임을 알았다. 그제야 어설프게 그녀를 이해할 수 있었다.",
    author: "김초엽, 『감정의 물성",
  },
  {
    quote: "단 한마디를 전하고 싶어서 그녀를 만나러 왔다. \"엄마를 이해해요.\"",
    author: "김초엽, 『관내 분실』",
  },
  {
    quote: "언젠가 자신의 우주 영웅을 다시 만난다면, 그에게 우주 저편의 풍경이 꽤 멋졌다고 말해줄 것이다.",
    author: "김초엽, 『나의 우주영웅에 관하여』",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;