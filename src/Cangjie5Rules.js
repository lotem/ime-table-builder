import {首碼, 尾碼, 首尾, 首次尾, 前三末一} from './Encoder';

const 取 = f => (a, b) => f(b ? a() + b() : typeof a === 'function' ? a() : a);

const
次字首 = 取(首尾),
次字身 = 取(首尾),
字首 = (a, b) => b ? 取(首碼)(a) + 取(尾碼)(b) : 取(首尾)(a),
字身 = (a, b) => b ? 首次尾(a(次字首) + b(次字身)) : 取(首次尾)(a),
組合字 = (a, b) => a(字首) + b(字身),
整體字 = 取(前三末一);

export default function $(code) {
  return (成分 = 整體字) => 成分(code);
}

const 組合 = (a, b) => (成分 = 組合字) => 成分(a, b);

export const
上下 = 組合,
左右 = 組合,
包圍 = 組合,
整體 = (...parts) => (成分 = 整體字) => 成分(parts.reduce((c, a) => c + a(), ''));
