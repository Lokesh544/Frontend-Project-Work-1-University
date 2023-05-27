const shop_items_main = document.getElementsByClassName("shop_items_main")[0];
const shop_items = document.getElementsByClassName("shop_items")[0];

function set_shop_items(shop_id) {
  let data;
  switch (shop_id) {
    case 1:
      data = data_1;
      break;
    case 2:
      data = data_2;
      break;
    case 3:
      data = data_3;
      break;
    case 4:
      data = data_4;
      break;
    case 5:
      data = data_5;
      break;
    case 6:
      data = data_6;
      break;
    case 7:
      data = data_7;
      break;
  }
  let shop_items_list = [];
  for (let i = 0; i < data.length; i++) {
    shop_items_list.push(get_shop_item(data[i], shop_id, i));
  }
  shop_items_main.classList.remove("hidden");
  shop_items.innerHTML = shop_items_list.join("");
  shop_items.scrollIntoView();
}

function get_shop_item(data, data_id, id) {
  return `
          <div class="shop_item" onclick="set_item_details(${data_id}, ${id})">
            <img
              src="${data.img}"
            />
            <h3>
              ${data.title}
            </h3>
          </div>
          `;
}
