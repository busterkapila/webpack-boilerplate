export default function getTestComponent() {
	const comp = document.createElement('div');
	comp.classList.add('important');
	comp.innerHTML = 'this is the 123456 test-component';

	return comp;
}