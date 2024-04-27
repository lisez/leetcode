class Word {
  #word = "";

  #hasMark = false;
  #hasChar = false;
  #hasHyphen = false;
  #closedHyphen = false;

  #result = true;

  #check(w: string) {
    switch (true) {
      case w >= "a" && w <= "z": {
        if (this.#hasHyphen) this.#closedHyphen = true;
        if (this.#hasMark) this.#result = false;
        this.#hasChar = true;
        break;
      }

      case !!~".,!".indexOf(w): {
        if (this.#hasMark) this.#result = false;
        if (!this.#hasChar) this.#result = false;
        this.#hasMark = true;
        break;
      }

      case (w >= "A" && w <= "Z") || (w >= "0" && w <= "9"): {
        this.#result = false;
        break;
      }

      case w === "-": {
        if (this.#hasHyphen) this.#result = false;
        if (!this.#hasChar) this.#result = false;
        this.#hasHyphen = true;
        break;
      }

      default:
        break;
    }
  }

  get word(): string {
    return this.#word;
  }

  add(w: string): void {
    if (this.#result) this.#check(w);
    this.#word += w;
  }

  valid(): boolean {
    if (this.word.length === 0) return false;
    if (this.word.length === 1 && this.#hasMark) return true;
    if (!this.#result) return false;
    if (this.#hasHyphen && !this.#closedHyphen) return false;
    return true;
  }
}

export function countValidWords(sentence: string): number {
  let count = 0;

  let lastWord = new Word();
  for (const w of sentence) {
    if (w === " ") {
      if (lastWord.word.length) {
        const result = lastWord.valid();
        if (result) console.log(lastWord.word, result);
        count += +result;
      }
      lastWord = new Word();
    } else if (w) {
      lastWord.add(w);
    }
  }
  count += +lastWord.valid();

  return count;
}

console.log(
  countValidWords(
    "s -6x2 .2v hle826lk4cvc 58-w   t hqulb k1  sg6 8 2-tshzq t-kul.a r- tmc8 6q60xebttg sb9j t 79 ec,r5 n zw7dxk62q6mh y i4 6 sb1b!2 !h  e6 3zsj  a ,r5 , s ixceuso4 r 8o  53  3c9  .5 b3r  uxjg77252k2u, ue-oeo ,nn -e2 jtdcrpn6j ow1v3 f41vhw3 ts! -o 62xk cf f x 6l bk-2p-dq6 a8 dr  5zp m,,ibe,y-klgqj b73-  gz9,1  fa123 n22-6htq zcim,36. dknp,wroou339 xq   25wb. w,.fw bpft- - 8mha r sgk shshf, .z wnp8 p oi,y 7 ia 5  w y p-iocy3 s19v9 kvk9oe6  n n  7ppwtz e  goyzkk8k8b5ugn !26z- afv0t4 xt2j o,  u7 d!,0a q8ax3jyd dnz 2d h 4j jo! on4utd3n0, hz  ol  yh2 n7vg88v!4u!fhtksel3y xoi jy q83  4t5 ! xgn 3 5hq d bdvmd8 i c 7l ez04  a !e8oa55l8pj  z u  sxtr     5,,io1q65cml tv vbv lutwxaa6  q,8  n 30s   qu4w,r 82ywofe 9  6o4b!,  q,6 u6o frkj j,15 v!.    bphqk  f,g-gc4-u73 a  cx  . 1 b sw2robvz !! dpp lll pyz4hlyp4g 05 6  aikjgywpggj  r5wcx0n 7od  8q4bs y ng59af5h9  f1-i49g3rq4aotala.em ob9w ,8vjrq-88 t  x  84as9g  ua6mpo  mwc-  .g8doz9vfpc c. h5 70q8b bjl4xdvmwd23  m!z-   xiimsd-h6. 98ulv!6",
  ),
);
