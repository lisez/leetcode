type F = (x: number) => number;

function compose(functions: F[]): F {
  return function (x) {
    let y = x;
    for (let i = functions.length - 1; i >= 0; i -= 1) {
      y = functions[i](y);
    }
    return y;
  };
}
