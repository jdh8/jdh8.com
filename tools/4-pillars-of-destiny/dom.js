"use strict";
{
	const form = document.forms.abacus;
	const inputs = form.elements;

	form.addEventListener("submit", function(ev)
	{
		ev.preventDefault();
		ev.stopPropagation();

		console.log(inputs.date.valueAsDate, inputs.time.valueAsDate);
	});

	if (!inputs.longitude.value)
	{
		const january = new Date(0);
		const july = new Date(15638400000);

		longitude.valueAsNumber = Math.max(january.getTimezoneOffset(), july.getTimezoneOffset()) / -4;

		navigator.geolocation.getCurrentPosition(function(position)
		{
			inputs.longitude.valueAsNumber = position.coords.longitude;
		});
	}
}
