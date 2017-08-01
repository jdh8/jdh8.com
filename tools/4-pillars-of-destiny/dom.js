if (!("valueAsDate" in HTMLInputElement.prototype))
{
	Object.defineProperty(HTMLInputElement.prototype, "valueAsDate",
	{
		get: function() { return new Date(this.value) },
		set: function(date) { this.value = date instanceof Date ? date.toISOString().replace(/T.*/, "") : date }
	})
}

!function(form){

function run(inputs)
{
	console.log(new Date(+inputs.date.valueAsDate + +inputs.time.valueAsDate));
}

form.addEventListener("submit", function(ev)
{
	ev.preventDefault();
	ev.stopPropagation();

	run(this.elements);
})

if (!form.elements.longitude.value)
{
	var january = new Date(0);
	var july = new Date(15638400000);

	form.elements.longitude.valueAsNumber = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset()) / -4;

	navigator.geolocation.getCurrentPosition(function(position)
	{
		form.elements.longitude.valueAsNumber = position.coords.longitude;
	});
}

}(document.forms.abacus);
