class Counter {
  constructor(private n: number) {
    this.n = n;
    this.increase = this.increase.bind(this);
  }
  increase() {
    return this.n++;
  }
}

export function createCounter(n: number): () => number {
  const counter = new Counter(n);
  return () => counter.increase();
}
