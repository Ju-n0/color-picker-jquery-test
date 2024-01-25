let currentColor = "rgb(0, 0, 0)";

const $cellsContainer = $("<div>").addClass("cells-container");

for (let i = 0; i < 10; i++) {
  let $newColumn = $("<div>");
  $newColumn.addClass("column");
  $cellsContainer.append($newColumn);
  for (let j = 0; j < 10; j++) {
    let $newCell = $("<div>");
    $newCell.addClass("cell");
    $newCell.on("click", () => {
      console.log($newCell.css("background-color"), currentColor);

      if ($newCell.css("background-color") === currentColor) {
        $newCell.css("background-color", "");
        return;
      }

      $newCell.css("background-color", currentColor);
    });
    $newColumn.append($newCell);
  }
}

$("body").append($cellsContainer);

$(".palet-item").on("click", (e) => {
  const color = $(e.target).data("color");
  currentColor = color;
});
