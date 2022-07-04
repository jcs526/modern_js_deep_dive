const o = { x: { y: 1 } };

// 얕은 복사
const c1 = { ...o };
console.log(c1 === 0); // 35wkd "스프레드 문법" 참고
console.log(c1.x === o.x); // true

// lodash의 cloneDeep을 사용한 깊은 복사
// "npm install lodash"로 ladash를 설치한 후, Node.js 환경에서 실행
const _ = require('lodash');

// 깊은 복사
const c2 = _.cloneDeep(o);
console.log(c2 === 0); // false
console.log(c2.x === o.x); // false