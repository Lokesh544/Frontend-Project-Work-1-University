const item_details = document.getElementsByClassName("item_details")[0];
const item_details_main =
  document.getElementsByClassName("item_details_main")[0];

function set_item_details(data_id, item_id) {
  let data;
  switch (data_id) {
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
  item_details.classList.remove("hidden");
  item_details_main.innerHTML = get_item_details(data[item_id]);
  item_details_main.scrollIntoView();
}

function get_item_details(data) {
  return `
          <div style="display: flex; margin-top: 2rem">
            <div
              style="
                height: 80vh;
                display: flex;
                flex-direction: column;
                justify-content: center;
              "
            >
              <img
                src="${data.img}"
              />
              <h1>
                ${data.title}
              </h1>
            </div>
            <div>
              <div class="item_details_main_data">
                <div>
                  <p>
                    ${data.details ? item_details_to_string(data.details) : ""}
                  </p>
                </div>
                <h2 style="font-size: 1.75rem; font-weight: boldder">
                  Price: $${data.price}
                </h2>
                <p>${get_discription_data(data)}</p>
              </div>
              <div class="item_details_shop_button">
                <a href="${data.website_link}" target="_blank"
                  >Shop Now</a
                >
              </div>
            </div>
          </div>
          `;
}

const item_details_to_string = (details) => {
  const t = [];
  for (let i of Object.entries(details)) {
    t.push(`${i[0]}: ${i[1]}`);
  }
  return t.join("</p><p>");
};

const get_discription_data = (data) => {
  if (data.discription == null) {
    if (data.min_discription != null) {
      return data.min_discription.join("</p><p>");
    } else {
      return "";
    }
  } else if (typeof data.discription == "object") {
    return data.discription.join("</p><p>");
  } else {
    return data.discription;
  }
};
