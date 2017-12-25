"use strict";
{
	const input = document.getElementById("string");
	const tbody = document.getElementById("result");

	input.parentElement.parentElement.addEventListener("submit", function(ev)
	{
		ev.preventDefault();
		ev.stopPropagation();

		tbody.parentElement.hidden = true;

		for (let k = tbody.rows.length - 1; k >= 0; --k)
			tbody.deleteRow(k);

		const string = input.value;

		for (let k = 0; k < string.length; ++k) {
			const code = string.codePointAt(k);
			const row = tbody.insertRow();

			row.insertCell().textContent = String.fromCodePoint(code);
			row.insertCell().textContent = "U+" + code.toString(16).toUpperCase().padStart(4, "0");

			if (code >= 0x10000)
				++k;
		}

		tbody.parentElement.hidden = false;
	});
}
