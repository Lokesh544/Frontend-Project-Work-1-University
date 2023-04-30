const shop_1 = document.getElementsByClassName("shop_1")[0];
const shop_2 = document.getElementsByClassName("shop_2")[0];
const shop_3 = document.getElementsByClassName("shop_3")[0];
const shop_1_list = [];
const shop_2_list = [];
const shop_3_list = [];

const make_shop_item = (data, data_id, id) => {
  return `
<div class="shop_item">
  <img
    src="${data.img}"
  />
  <h3>
    ${data.title}
  </h3>
  <div>
    <p>${
      data.min_discription
        ? data.min_discription.join("</p><p>")
        : data.details
        ? item_details_to_string(data.details)
        : ""
    }</p>
  </div>
  <button onclick="toggle_details_menu(${data_id}, ${id})">More</button>
</div>
`;
};
const item_details_to_string = (details) => {
  const t = [];
  for (let i of Object.entries(details)) {
    t.push(`${i[0]}: ${i[1]}`);
  }
  return t.join("</p><p>");
};

for (let i = 0; i < data_1.length; i++) {
  shop_1_list.push(make_shop_item(data_1[i], 1, i));
}
for (let i = 0; i < data_2.length; i++) {
  if (shop_2_list.length >= shop_1_list.length) {
    shop_1_list.push(make_shop_item(data_2[i], 2, i));
  } else {
    shop_2_list.push(make_shop_item(data_2[i], 2, i));
  }
}

for (let i = 0; i < data_1.length; i++) {
  shop_3_list.push(make_shop_item(data_1[i], 1, i));
}
for (let i = 0; i < data_2.length; i++) {
  shop_3_list.push(make_shop_item(data_2[i], 2, i));
}

shop_1.innerHTML = shop_1_list.join("");
shop_2.innerHTML = shop_2_list.join("");
shop_3.innerHTML = shop_3_list.join("");
