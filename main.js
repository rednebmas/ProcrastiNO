$(document).ready(function () {
	var labelTable = createTable(1,7);
	labelTable.setAttribute("id", "tetris-grid-y-axis-label");
	$('#tetris-grid-container').append(labelTable);

	var table = createTable(7,7);
	table = styleTable(table);
	$('#tetris-grid-container').append(table);
	addHomeworksToTetrisGrid();
});

function addHomeworksToTetrisGrid()
{
	var cell = document.getElementById('tetris-grid-cell-5-3');
	var cell2 = document.getElementById('tetris-grid-cell-5-4');
	var cell3 = document.getElementById('tetris-grid-cell-5-5');
	var cell4 = document.getElementById('tetris-grid-cell-5-2');
	console.log(cell);
	var block = document.createElement("div");
	block.setAttribute("class", "fill-block fill-block-blue");
	block.setAttribute("height", "50px");
	cell.appendChild(block);
	cell2.appendChild(block.cloneNode());
	cell3.appendChild(block.cloneNode());

	block = document.createElement("div");
	block.setAttribute("class", "fill-block fill-block-red");
	block.setAttribute("height", "25px");
	cell4.appendChild(block);
}

/**
 * Creates a table object with the specified number of rows/columns.
 * @return table dom object with each cell labeled with 
 */
function createTable(rows, columns)
{
	var table = document.createElement("table")
	for (var row = 0; row < rows; row++)
	{
		var tableRow = document.createElement("tr");
		for (var column = 0; column < columns; column++)
		{
			var cell = document.createElement("td");
			cell.setAttribute("id", "tetris-grid-cell-" + row + "-" + column);
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
	for (var i = 0; i < lastRow.children.length; i++) 
	{
		lastRow.children[i].innerHTML = weekdays[i];
	}

	return table;
}