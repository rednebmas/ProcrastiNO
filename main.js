$(document).ready(function () {
	var table = createTable(7,8);
	table = styleTable(table);
	$('#tetris-grid-container').append(table);
	addHomeworksToTetrisGrid();

	// darkenTasksBGColor();
});

function darkenTasksBGColor()
{
	var tasks = $('.tasks');
	for (var i = 0; i < tasks.length; i++) {
		var newColor = tasks[i].colorI
	}
}

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
		lastRow.children[i+1].innerHTML = weekdays[i];
	}

	return table;
}