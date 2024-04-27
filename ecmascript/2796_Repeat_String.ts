declare global {
  interface String {
    replicate(times: number): string;
  }
}

String.prototype.replicate = function (times): string {
  return Array(times + 1).join(this);
};

String.prototype.replicate = function (times): string {
  let result = "";
  for (let i = 0; i < times; i += 1) {
    result += this;
  }
  return result;
};

String.prototype.replicate = function (times): string {
  return times ? this + this.replicate(times - 1) : "";
};
