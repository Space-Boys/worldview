/* This file is just a stub to test the browserify build task */
import $ from 'jquery';
import { DateSelector } from 'worldview-components';
import { parse as mapParser } from './map/wv.map';
import builder from './map/wv.map.datelinebuilder';

export default function () {
  console.log($, DateSelector, mapParser, builder);
};

export const stub2 = (function() {
  return 'stub';
})();
