// @refresh reload
import { mount, StartClient } from '@solidjs/start/client';

window.onblur = function () {
  console.log('test');
  var link: any = window.document.querySelector("link[rel~='icon']");
  link.href = '/favicon-off.png';
};
window.onfocus = function () {
  console.log('test');
  var link: any = window.document.querySelector("link[rel~='icon']");
  link.href = '/favicon-on.png';
};

mount(() => <StartClient />, document.getElementById('app')!);
