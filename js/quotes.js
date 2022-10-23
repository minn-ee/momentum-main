const quotes = [
  { quote: "그러나 시간이 지나도 아물지 않는 일들이 있지", author: "IU" },
  {
    quote: "내가 날 온전히 사랑하지 못해서 맘이 가난한 밤이야",
    author: "IU",
  },
  {
    quote: "거울 속에 마주친 얼굴이 어색해서 습관처럼 조용히 눈을 감아",
    author: "IU",
  },
  {
    quote: "아이는 그렇게 오랜 시간 겨우 내가 되려고 아팠던 걸까",
    author: "IU",
  },
  {
    quote:
      "파도가 되어 어디로든 달려가고 싶어 작은 두려움 아래 천천히 두 눈을 뜨면",
    author: "IU",
  },
  {
    quote: "세상은 그렇게 모든 순간 내게로 와 눈부신 선물이 되고",
    author: "IU",
  },
  {
    quote: "숱하게 의심하던 나는 그제야 나에게 대답할 수 있을 것 같아",
    author: "IU",
  },
  {
    quote: "물결을 거슬러 나 돌아가 내 안의 바다가 태어난 곳으로",
    author: "IU",
  },
  {
    quote: "휩쓸려 길을 잃어도 자유로와 더이상 날 가두는 어둠에 눈 감지 않아",
    author: "IU",
  },
  { quote: "두 번 다시 날 모른 척 하지 않아", author: "IU" },
  { quote: "또다시 헤매일지라도 돌아오는 길을 알아", author: "IU" },
];
const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
