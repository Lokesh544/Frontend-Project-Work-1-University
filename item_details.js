const item_details_div = document.getElementById("item_details");
const item_details_menu =
  document.getElementsByClassName("item_details_main")[0];
let toggle = false;
let pointer_in_bounds = false;

const toggle_details_menu = (data_id = 0, id = 0, t = null) => {
  if (t != null) {
    toggle = t;
  } else {
    toggle = !toggle;
  }
  if (toggle) {
    if (data_id == 1) {
      item_details_menu.innerHTML = get_details(data_1[id]);
    } else if (data_id == 2) {
      item_details_menu.innerHTML = get_details(data_2[id]);
    }
    item_details_div.style = "display: block;";
  } else {
    item_details_div.style = "display: none;";
  }
};
const check_bounds = () => {
  if (!pointer_in_bounds) toggle_details_menu();
};
const get_discription_data = (data) => {
  if (data.discription == null) {
    if (data.min_discription != null) {
      return data.min_discription.join("</p><p>");
    }
  } else if (typeof data.discription == "object") {
    return data.discription.join("</p><p>");
  } else {
    return data.discription;
  }
};
const get_details = (data) => {
  return `
    <div style="display: flex">
      <h1>${data.title}</h1>
      <div style="flex-grow: 1; flex-shrink: 1"></div>
      <h2
        class="item_details_main_close_button"
        onclick="toggle_details_menu()"
      >
        ❌
      </h2>
    </div>
    <div style="display: flex; margin-top: 2rem">
      <div>
        <img
          src="${data.img}"
        />
        <div class="item_details_main_button">
          <a href="${data.website_link}" target="_blank">Shop Now</a>
        </div>
      </div>
      <div>
        <div>
          <p>${data.details ? item_details_to_string(data.details) : ""}</p>
        </div>
        <h2 style="font-size: 1.75rem; font-weight: boldder;">Price: \$${
          data.price
        }</h2>
        <p>${get_discription_data(data)}</p>
      </div>
    </div>
  `;
};

item_details_menu.onpointerleave = () => {
  pointer_in_bounds = false;
};
item_details_menu.onpointerenter = () => {
  pointer_in_bounds = true;
};

// toggle_details_menu(0, 0, false);
