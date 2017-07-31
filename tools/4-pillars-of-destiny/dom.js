if (!("valueAsDate" in HTMLInputElement.prototype))
{
	Object.defineProperty(HTMLInputElement.prototype, "valueAsDate",
	{
		get: function() { return new Date(this.value) },
		set: function(date) { this.value = date instanceof Date ? date.toISOString().replace(/T.*/, "") : date }
	})
}

function cancel(ev)
{
	ev.preventDefault();
	ev.stopPropagation();
}

!function(form){

form.addEventListener("submit", cancel);

form.addEventListener("submit", function(ev)
{
	console.log(this.elements.date.valueAsDate);
})

}(document.forms.abacus);
