export const
取碼 = (...indices) => (a) => {
  // 負數下標從末尾倒查
  const absolute = i => i < 0 ? i + a.length : i;
  let last = null;
  return indices.reduce((code, index) => {
    // 忽略越界下標
    if (index >= a.length || index < -a.length) {
      return code;
    }
    // 從不同方向連續取同一碼，只取一次
    if (last !== null && (last < 0 && absolute(last) == index ||
                          index < 0 && absolute(index) == last)) {
      last = index;
      return code;
    }
    last = index;
    return code + a.charAt(absolute(index));
  }, '');
},
首碼 = 取碼(0),
尾碼 = 取碼(-1),
首尾 = 取碼(0, -1),
首次尾 = 取碼(0, 1, -1),
前三末一 = 取碼(0, 1, 2, -1);
