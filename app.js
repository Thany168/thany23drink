const Item = [
  {
    Img: "https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    Name: "Americano",
    des: "Americano cafe : 2$",
  },
  {
    Img: "https://hips.hearstapps.com/hmg-prod/images/ice-tea-royalty-free-image-1621872849.jpg?resize=980:*",
    Name: "Lemon Tea",
    des: "Lemon Tea : 1.2$",
  },
  {
    Img: "https://www.12taste.com/in/wp-content/uploads/2019/11/fresh-orange-juice-glass-dark-background-scaled.jpg",
    Name: "Orange Juice",
    des: "Fresh Orange Juice: 1$",
  },
  {
    Img: "https://img.freepik.com/premium-photo/coffee-wallpaper-4k_937960-19.jpg",
    Name: "Hot Latte",
    des: "Hot Latte :1.5$",
  },
  {
    Img: "https://www.buyonline.nestlewaters.ae/media/catalog/product/cache/e403b097e35b4b6dcd128f58acedd26d/6/2/6297000125114_01_1.jpg",
    Name: "Water",
    des: "Natural Water: 0.5$",
  },
  {
    Img: "https://nio-cocktails.com/cdn/shop/articles/adam-jaime-dmkmrNptMpw-unsplash_bc64e325-017c-496a-a9d9-91fc024585a2.jpg?v=1624613893",
    Name: "Queen Bee",
    des: "Queen Bee :2.2$",
  },
  {
    Img: "https://elanaspantry.com/wp-content/uploads/2020/07/The-Best-Milk-For-The-Keto-Diet.jpg",
    Name: "Fresh Milk",
    des: "Fresh Milk : 1$",
  },
  {
    Img: "https://m.media-amazon.com/images/I/81nMpudM5oL._AC_UF1000,1000_QL80_.jpg",
    Name: "Heineken",
    des: "Heineken black: 10.2$",
  },
];
getallProduct();
function getallProduct() {
  var data = "";
  for (const i of Item) {
    data += `
       <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 item-box g-3 ">
       <div class="box">
           <div class="box-img">
               <img src="${i.Img}" alt="">
           </div>
           <div class="box-title">
               <h1>${i.Name}</h1>
               <p style="color: gold;">
                   <i class="fa-regular fa-star"></i>
                   <i class="fa-regular fa-star"></i>
                   <i class="fa-regular fa-star"></i>
                   <i class="fa-regular fa-star"></i>
                   <i class="fa-regular fa-star"></i>

               </p>
               <p>${i.des}</p>
               <button class="btn btn-success text-light add_pro">Add Product</button>
                </div>
            </div>
        </div>
       `;
  }
  document.getElementById("store").innerHTML = data;
}

var count = document.querySelector(".count");
var xmark = document.querySelector(".xmark");
var table_box = document.querySelector(".table-box");
var Add_pro = document.querySelectorAll(".add_pro");
var search = document
  .querySelector(".btn_search")
  .addEventListener("click", function () {
    alert("Can not search yet. Wait me do more!!!!");
  });
var cart = document
  .getElementById("cart")
  .addEventListener("click", function () {
    table_box.style.display = "block";
  });
xmark.addEventListener("click", function () {
  table_box.style.display = "none";
});

function Gettbl() {
  var data = "";
  var index = 1;
  Add_pro.forEach((el, i) => {
    // <td><button class="btn btn-danger delete">Delete</button></td>
    el.addEventListener("click", function () {
      count.innerHTML = index;
      index++;
      data += `
            <tr>
                <td><img src="${Item[i].Img}" alt="" width="50px" height="50px" style="object-fit: cover;"></td>
                <td>${Item[i].Name}</td>
                <td><button class="btn btn-danger btn_del">Delete</button></td>
                <td><button class="btn btn-success btn_buy">Buy</button></td>

            </tr>
            `;
      document.getElementById("tbl-data").innerHTML = data;
    });
  });
}
Gettbl();
// function Delete(){
// var Del=document.querySelectorAll(".delete");
// Del.forEach((el,i)=>{
//     el.addEventListener("click",function(){
//         Item.splice(i,1);
//     })
// })
// }
var side_bar = document.getElementById("side_bar");
var bar = document.getElementById("bar").addEventListener("click", function () {
  side_bar.style.display = "block";
});
var close_side = document
  .getElementById("close_side")
  .addEventListener("click", function () {
    side_bar.style.display = "none";
  });

function loader() {
  document.querySelector(".loader-container").classList.add("fade-out");
}
function FadOut() {
  setInterval(loader, 2000);
}
window.onload = FadOut();
