const quotes = [
    {
        quote: "세계는 한권의 책이다. 여행하지 않는 사람들은 그 책의 한 페이지만 일근 것과 같다.",
        author: "아우구스티누스"
    },
    {
        quote: "여행이란 우리가 사는 장소를 바꿔주는 것이 아니라 우리의 생각과 편견을 바꿔주는 것이다.",
        author: "작가, 아나톨 프랑스"
    },
    {
        quote: "진정한 여행은 새로운 풍경을 보는 것이 아니라 새로운 눈을 가지는데 있다.",
        author: "마르셀 푸르스트"
    },
    {
        quote: "삶은 당신의 안전지대를 벗어나야 비로소 시작된다.",
        author: "작가,닐 도날드 월쉬"
    },
    {
      quote: "여행을 많이 해서 자신의 생각과 삶의 형태를 여러 번 바꿔 본 사람보다 더 완전한 사람은 없다.",
      author: "시인, 알퐁스 드 라마"
    },
    {
        quote: "목적지에 닿아야 행복해지는 것이 아니라 여행하는 과정에서 행복을 느낀다.",
        author: "작가, 앤드류 매튜스"
    },
    {
        quote: "직업은 주머니를 가득 채우지만, 모험은 당신의 영혼을 채워줍니다.",
        author: "배우, 제이미 린비티"
    },
    {
        quote: "우리는 처음 자기 자신을 잃기 위해 여행을 한다. 그러고 나서 우린 자기 자신을 찾기 여해 여행을 한다",
        author: "에세이스트, 피코 아이어"
    },
    {
        quote: "여행은 다른 문화, 다른 사람을 만나고 결국에는 자기 자신을 만나는 것이다.",
        author: "국제구호활동가, 한비야"
    },
    {
        quote: "여행은 길을 찾는 데 꼭 필요한 도구들이 들어있는 숨겨 놓은 선물 상자 같은 것.",
        author: "이애경"
    }
];

const quote = document.querySelector("#quote  span:first-child");
const author = document.querySelector("#quote  span:last-child");

console.log(quotes[0-9]);
const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText =todaysQuote.quote;
author.innerText ="- "+todaysQuote.author+" -";
