$(document).ready(function () {
	var table = createTable(7,8);
	table = styleTable(table);
	$('#tetris-grid-container').append(table);
	addHomeworksToTetrisGrid();
	darkenTasksBGColor();
	highlightColumn(1, '#777777');
	highlightColumn(2, '#777777');
	highlightColumn(3, '#8E8E8E');
});

function highlightColumn(column, color)
{
	for (var i = 0; i < 6; i++) {
		var cell = $('#tetris-grid-cell-' + i + '-' + column)[0];
		cell.style.backgroundColor = color;
	}
}

function darkenTasksBGColor()
{
	// var tasks = $('.task');
	// for (var i = 0; i < tasks.length; i++) {
	// 	var newColor = shade(tasks[i].style.backgroundColor, -0.1);
	// 	tasks[i].style.backgroundColor = newColor;
	// }
}

function addHomeworksToTetrisGrid()
{
	var delay = 0.0;

	// cells to fill with fake blocks
	var cell1 = document.getElementById('tetris-grid-cell-5-3');
	var cell2 = document.getElementById('tetris-grid-cell-5-4');
	var cell3 = document.getElementById('tetris-grid-cell-5-5');
	var cell4 = document.getElementById('tetris-grid-cell-5-2');

	var block1 = document.createElement("div");
	block1.setAttribute("class", "fill-block fill-block-blue color-2 color-2-outset-border");
	block1.setAttribute("height", "50px");

	block2 = document.createElement("div");
	block2.setAttribute("class", "fill-block fill-block-purple color-3 color-3-outset-border");
	block2.setAttribute("height", "25px");

	block3 = document.createElement("div");
	block3.setAttribute("class", "fill-block fill-block-green color-1 color-1-outset-border");
	block3.setAttribute("height", "100px");

	// Tuesday
	delay = appendChildIncrementally(cell4, block2, delay);

	// Wednesday
	delay = appendChildIncrementally(cell1, block1, delay);
	delay = appendChildIncrementally(cell1, block2, delay);
	delay = appendChildIncrementally(cell1, block3, delay);

	// Thursday
	delay = appendChildIncrementally(cell2, block1, delay);
	delay = appendChildIncrementally(cell2, block2, delay);

	// Friday
	delay = appendChildIncrementally(cell3, block1, delay);
}

// Returns new delay
function appendChildIncrementally(cell, block, delay) {
	// console.log(cell);
	setTimeout(function() {
		cell.appendChild(block.cloneNode());
		console.log("appended");
	}, delay * 1000);
	return delay + .1;
}

/**
 * Creates a table object with the specified number of rows/columns.
 * @return table dom object with each cell labeled with 
 */
function createTable(rows, columns)
{
	var hours = 5.0;
	var table = document.createElement("table")
	for (var row = 0; row < rows; row++)
	{
		var tableRow = document.createElement("tr");
		for (var column = 0; column < columns; column++)
		{
			var cell = document.createElement("td");
			cell.setAttribute("id", "tetris-grid-cell-" + row + "-" + column);
			if (column == 0)
			{
				cell.setAttribute("class", "first-column");
				if (row != 0 && row != rows - 1)
				{
					var tableLabel = document.createElement("span");
					tableLabel.innerHTML = hours + "h";
					hours -= 1;
					cell.appendChild(tableLabel);
				}
			}
			tableRow.appendChild(cell);
		}
		table.appendChild(tableRow);
	}

	return table;
}

function styleTable(table)
{
	table.setAttribute("class", "tetris-grid");
	var weekdays = ['M', 'T', 'W', 'Th', 'F', 'S', 'S'];
	var lastRow = table.children[table.children.length-1];
	lastRow.setAttribute("class", "last-row");
	for (var i = 0; i < weekdays.length; i++) 
	{
		var span = document.createElement("span");
		span.innerHTML = weekdays[i];
		lastRow.children[i+1].appendChild(span);
	}

	return table;
}