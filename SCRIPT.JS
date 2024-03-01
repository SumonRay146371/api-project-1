const showCatagory = async () => {
  loader.classList.remove("hidden");

  const response = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await response.json();
  let store = data.data.news_category;
  //   console.log(store);
  handleCatagory(store);
};

const searchNews = () => {
  const inputText = document.getElementById("inputText").value;
  if (inputText) {
    showNews(inputText);
  } else {
    alert("please search ");
  }
};



// show loading
let loader = document.getElementById("loading");

// Show Catagory  STEP==> 1
// **************************************************
const handleCatagory = (store) => {
    const container = document.getElementById("newsCatagory");
    store.forEach((item) => {
        // console.log(item);
        let div = document.createElement("div");
        div.innerHTML = `<button onclick="showNews('${item.category_id}')" class='btn bg-sky-300 text-black'>${item.category_name}</button>`;
        container.appendChild(div);
    });
};
// **************************************************  
// Show News  STEP==> 2

const showNews = async (id) => {
  console.log(id);
  const response = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const data = await response.json();
  let datas = data.data;
  // console.log(datas);
  const newsContainer = document.getElementById("newsContainer");
  newsContainer.innerHTML = "";

  if (datas.length > 0) {
    loader.classList.add("hidden");
  }
 
  //  AMAKE ARRAY KHUJE PAITE HBE 
  datas.forEach((item) => {
    // console.log(item);
    let div = document.createElement("div");
    div.innerHTML = `
    <div class="">
    <img src="${item.image_url}" alt="">
</div>
<div class="">
    <h1>The best fashion influencers to follow for sartorial inspiration</h1>
    <p></p>
        <p> </p>
</div>
    `;

    newsContainer.appendChild(div);
  });
};
showNews("01");
showCatagory();

// jokhn load nibe tokhn jate first id wala data ta dekhai  tai function e default man dibo

// show data
// parse id and make id dynamic
// clear container
//
