import test from 'tape';
import * as $ from '../src/Cangjie5';

const alphabet = {
  日: 'a',
  月: 'b',
  金: 'c',
  木: 'd',
  水: 'e',
  火: 'f',
  土: 'g',
};

test('字母', t => {
  for (const k in alphabet) {
    t.equal($[k](), alphabet[k]);
  }
  t.end();
});

test('整體字', t => {
  t.equal($.業(), 'tctd');
  t.end();
})

test('組合字', t => {
  t.equal($.明(), 'ab');
  t.equal($.林(), 'dd');
  t.equal($.森(), 'ddd');
  t.equal($.涅(), 'eag');
  t.equal($.朝(), 'jjb');
  t.equal($.樑(), 'decd');
  t.end();
});
