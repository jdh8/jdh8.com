"use strict";

!function(){

var form = document.forms.abacus;
var inputs = form.elements;

function MaybeDate(string)
{
	var time = Date.parse(string);
	return time == time ? new Date(time) : null;
}

if (!("valueAsDate" in HTMLInputElement.prototype))
{
	Object.defineProperty(inputs.date, "valueAsDate",
	{
		get: function() { return MaybeDate(this.value) },
		set: function(date) { this.value = /[^T]*/.exec(date.toJSON() || "")[0] }
	})

	Object.defineProperty(inputs.time, "valueAsDate",
	{
		get: function() { return MaybeDate("1970-01-01T" + this.value + "Z") },
		set: function(date) { this.value = /T([^Z]*)/.exec(date.toJSON() || "T")[1] }
	});
}

form.addEventListener("submit", function(ev)
{
	ev.preventDefault();
	ev.stopPropagation();

	console.log(inputs.date.valueAsDate, inputs.time.valueAsDate);
});

if (!inputs.longitude.value)
{
	var january = new Date(0);
	var july = new Date(15638400000);

	longitude.valueAsNumber = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset()) / -4;

	navigator.geolocation.getCurrentPosition(function(position)
	{
		inputs.longitude.valueAsNumber = position.coords.longitude;
	});
}

}();
