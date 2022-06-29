const number = Array(50)
	.fill()
	.map((_, i) => i + 1);

const frontend = [3, 6, 9, 12, 18, 20, 24, 27, 33, 36, 39, 42, 48];
const backend = [5, 10, 20, 25, 35, 40, 50];
const double = [15, 30, 45];

function forResult(value) {
	if (frontend.includes(value)) return value ? "Frontend" : value;
	if (backend.includes(value)) return value ? "Backend" : value;
	if (double.includes(value)) return value ? "Frontend Backend" : value;
	return value;
}

function result() {
	console.log(number.map(forResult));
}

result();
