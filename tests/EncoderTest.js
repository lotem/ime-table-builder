import test from 'tape';
import {取碼, 首碼, 尾碼, 首尾, 首次尾, 前三末一} from '../src/Encoder';

test('取碼', t => {
  t.equal(取碼(0, 1, 2, -1)('abcdefg'), 'abcg');
  t.equal(取碼(0, 1, 2, -1)('abcd'), 'abcd');
  t.equal(取碼(0, -1)('abc'), 'ac');
  t.equal(取碼(0, -1)('ab'), 'ab');
  t.equal(取碼(0, -1)('a'), 'a');
  t.equal(取碼(0)('abc'), 'a');
  t.equal(取碼(-1)('a'), 'a');
  t.end();
});

test('取不足', t => {
  // 不重複取末筆
  t.equal(取碼(0, 1, 2, -1)('abc'), 'abc');
  // 忽略越界下標
  t.equal(取碼(0, 1, 2, -1)('ab'), 'ab');
  t.equal(取碼(0, 1, 2, -1)('a'), 'a');
  t.end();
});

test('重複取碼', t => {
  t.equal(取碼(1, 1)('abc'), 'bb');
  t.equal(取碼(-1, -1)('abc'), 'cc');
  t.equal(取碼(0, 1, 0, 1)('abc'), 'abab');
  t.equal(取碼(0, 1, 2, 1)('ab'), 'abb');
  // 從不同方向連續取同一碼，只取一次
  t.equal(取碼(0, 1, 2, -1, -1)('abc'), 'abcc');
  t.end();
});

test('首碼', t => {
  t.equal(首碼('abc'), 'a');
  t.equal(首碼('xy'), 'x');
  t.equal(首碼('z'), 'z');
  t.end();
});

test('尾碼', t => {
  t.equal(尾碼('abc'), 'c');
  t.equal(尾碼('xy'), 'y');
  t.equal(尾碼('z'), 'z');
  t.end();
});

test('首尾', t => {
  t.equal(首尾('abcd'), 'ad');
  t.equal(首尾('ab'), 'ab');
  t.equal(首尾('a'), 'a');
  t.end();
});

test('首次尾', t => {
  t.equal(首次尾('abcd'), 'abd');
  t.equal(首次尾('abc'), 'abc');
  t.equal(首次尾('ab'), 'ab');
  t.equal(首次尾('a'), 'a');
  t.end();
});

test('前三末一', t => {
  t.equal(前三末一('abcdefg'), 'abcg');
  t.equal(前三末一('abcd'), 'abcd');
  t.equal(前三末一('abc'), 'abc');
  t.equal(前三末一('ab'), 'ab');
  t.equal(前三末一('a'), 'a');
  t.end();
});
