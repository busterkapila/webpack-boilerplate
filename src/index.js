import getTestComponent from './components/testComponent';
import './style.css';

function component() {
  const element = document.createElement('div');
  const testComp = getTestComponent();
  element.innerHTML = 'Hello World';
  element.appendChild(testComp);
  return element;
}

const reloading = document.readyState === 'complete';
if (module.hot) {
  module.hot.accept(err => (console.log('HMR ERROR', err)));
  
  if (reloading) {
    console.log('HMR Reloading');
    onLoad();
  } else {
    console.log('HMR Enabled');
    bootstrap();
  }
} else {
  console.log('HMR Not Supported');
  bootstrap();
}

function onLoad() {
  document.getElementById('App').innerHTML = '';
  document.getElementById('App').appendChild(component());
}

function bootstrap() {
  window.addEventListener('load', onLoad);
}
