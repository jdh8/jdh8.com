"use strict";

!function(){

function MaybeDate(string)
{
	var time = Date.parse(string);
	return time == time ? new Date(time) : null;
}

function identity(x) { return x }

var converter =
{
	"datetime-local": identity,
	date: identity,
	time: function(s) { return "1970-01-01T" + s + "Z" }
}

var extractor =
{
	"datetime-local": function(s) { return s.slice(0, -1) },
	date: function(s) { return /[^T]*/.exec(s)[0] },
	time: function(s) { return /T([^Z]*)/.exec(s)[1] }
}

if (!("valueAsDate" in HTMLInputElement.prototype))
{
	Object.defineProperty(HTMLInputElement.prototype, "valueAsDate",
	{
		get: function()
		{
			var f = converter[this.getAttribute("type").toLowerCase()];
			return f ? MaybeDate(f(this.value)): null;
		},
		set: function(date)
		{
			var s = date.toJSON();
			this.value = s || extractor[this.getAttribute("type").toLowerCase()](s);
		}
	})
}

}();
