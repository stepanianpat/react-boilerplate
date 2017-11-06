import UnsupportedBrowserDetection from './utils/unsupportedBrowserDetection';
require('es5-shim');
require('es5-shim/es5-sham');

const detection = new UnsupportedBrowserDetection();

window.onload = () => {
  detection.check(() => {
    setTimeout(() => window.initApp());
  });
};
