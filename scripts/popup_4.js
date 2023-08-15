document.querySelectorAll(".like").forEach(button => {
	button.addEventListener("click", () => {
		document.querySelectorAll(".like span").forEach((span, i) => {
			span.innerHTML = (span.innerHTML * 1) + 1;
		});
	});
});