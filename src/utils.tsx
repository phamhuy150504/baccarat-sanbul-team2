import c1 from '../src/assets/images/c1.png'
import c2 from '../src/assets/images/c2.png'
import c3 from '../src/assets/images/c3.png'
import c4 from '../src/assets/images/c4.png'
import c5 from '../src/assets/images/c5.png'
import c6 from '../src/assets/images/c6.png'
import c7 from '../src/assets/images/c7.png'
import c8 from '../src/assets/images/c8.png'
import c9 from '../src/assets/images/c9.png'
import c10 from '../src/assets/images/c10.png'
import c11 from '../src/assets/images/c11.png'
import c12 from '../src/assets/images/c12.png'
import c13 from '../src/assets/images/c13.png'

import d1 from '../src/assets/images/d1.png'
import d2 from '../src/assets/images/d2.png'
import d3 from '../src/assets/images/d3.png'
import d4 from '../src/assets/images/d4.png'
import d5 from '../src/assets/images/d5.png'
import d6 from '../src/assets/images/d6.png'
import d7 from '../src/assets/images/d7.png'
import d8 from '../src/assets/images/d8.png'
import d9 from '../src/assets/images/d9.png'
import d10 from '../src/assets/images/d10.png'
import d11 from '../src/assets/images/d11.png'
import d12 from '../src/assets/images/d12.png'
import d13 from '../src/assets/images/d13.png'

import h1 from '../src/assets/images/h1.png'
import h2 from '../src/assets/images/h2.png'
import h3 from '../src/assets/images/h3.png'
import h4 from '../src/assets/images/h4.png'
import h5 from '../src/assets/images/h5.png'
import h6 from '../src/assets/images/h6.png'
import h7 from '../src/assets/images/h7.png'
import h8 from '../src/assets/images/h8.png'
import h9 from '../src/assets/images/h9.png'
import h10 from '../src/assets/images/h10.png'
import h11 from '../src/assets/images/h11.png'
import h12 from '../src/assets/images/h12.png'
import h13 from '../src/assets/images/h13.png'

import s1 from '../src/assets/images/s1.png'
import s2 from '../src/assets/images/s2.png'
import s3 from '../src/assets/images/s3.png'
import s4 from '../src/assets/images/s4.png'
import s5 from '../src/assets/images/s5.png'
import s6 from '../src/assets/images/s6.png'
import s7 from '../src/assets/images/s7.png'
import s8 from '../src/assets/images/s8.png'
import s9 from '../src/assets/images/s9.png'
import s10 from '../src/assets/images/s10.png'
import s11 from '../src/assets/images/s11.png'
import s12 from '../src/assets/images/s12.png'
import s13 from '../src/assets/images/s13.png'


export const listCard = [
  { v: 1, f: c1 },
  { v: 2, f: c2 },
  { v: 3, f: c3 },
  { v: 4, f: c4 },
  { v: 5, f: c5 },
  { v: 6, f: c6 },
  { v: 7, f: c7 },
  { v: 8, f: c8 },
  { v: 9, f: c9 },
  { v: 10, f: c10 },
  { v: 0, f: c11 },
  { v: 0, f: c12 },
  { v: 0, f: c13 },
  { v: 1, f: h1 },
  { v: 2, f: h2 },
  { v: 3, f: h3 },
  { v: 4, f: h4 },
  { v: 5, f: h5 },
  { v: 6, f: h6 },
  { v: 7, f: h7 },
  { v: 8, f: h8 },
  { v: 9, f: h9 },
  { v: 10, f: h10 },
  { v: 0, f: h11 },
  { v: 0, f: h12 },
  { v: 0, f: h13 },
  { v: 1, f: s1 },
  { v: 2, f: s2 },
  { v: 3, f: s3 },
  { v: 4, f: s4 },
  { v: 5, f: s5 },
  { v: 6, f: s6 },
  { v: 7, f: s7 },
  { v: 8, f: s8 },
  { v: 9, f: s9 },
  { v: 10, f: s10 },
  { v: 0, f: s11 },
  { v: 0, f: s12 },
  { v: 0, f: s13 },
  { v: 1, f: d1 },
  { v: 2, f: d2 },
  { v: 3, f: d3 },
  { v: 4, f: d4 },
  { v: 5, f: d5 },
  { v: 6, f: d6 },
  { v: 7, f: d7 },
  { v: 8, f: d8 },
  { v: 9, f: d9 },
  { v: 10, f: d10 },
  { v: 0, f: d11 },
  { v: 0, f: d12 },
  { v: 0, f: d13 },
];



export const handleFillCard = (
  ms: number,
  div: HTMLElement,
  top: string,
  right: string
) => {
  return new Promise<void>((resolve) => {
    return setTimeout(() => {
      div.style.top = top;
      div.style.right = right;
      resolve()
    }, ms);
  })
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

