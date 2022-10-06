jQuery(function () {
  console.log("jQuery READY");

  $("#btn-get").on("click", function () {
    $.get(
      "https://61d411968df81200178a8a4c.mockapi.io/mock/api/groups",
      function (data, status) {
        for (let i = 0; i < data.items.length; i++) {
          let item = data.items[i]
          let card = $(`
          <div class="card" style="width: 14rem;">
            <img src="${item.leader}" class="card-img-top" style="height: 160px;">
            <div class="card-body">
              <h5 class="card-title">${item.name}</h5>
              <p class="card-text">${item.createdAt}</p>
              <button class="btn btn-outline-primary w-100">Hello</button>
            </div>
          </div>`);

          $("#container").append(card);
        }
      }
    );
  });
});

