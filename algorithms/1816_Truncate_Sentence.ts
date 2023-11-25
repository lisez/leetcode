// approach 1
function truncateSentence_1(s: string, k: number): string {
  if (!k) return "";

  let offset = -1;
  let times = k;

  do {
    offset = s.indexOf(" ", offset + 1);
    if (!~offset && times) {
      offset = s.length;
    }
    times -= 1;
  } while (~offset && times && offset < s.length);

  return s.slice(0, offset);
}

// approach 2
function truncateSentence(s: string, k: number): string {
  let lastPos = 0;
  s += " ";

  for (let i = 0; i < k; i += 1) {
    lastPos = s.indexOf(" ", lastPos + 1);
  }

  return s.slice(0, lastPos);
}
