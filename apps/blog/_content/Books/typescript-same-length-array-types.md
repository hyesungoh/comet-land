---
title: 'TypeScript, 항상 같은 길이인 두 배열 Type 정의하기'
date: 2022-03-09 20:24:00
category: 'JavaScript'
draft: false
---

![typescript logo](https://user-images.githubusercontent.com/26461307/157260791-b53f48fe-f971-45b0-825c-f04df3bf6c33.png)

TypeScript 환경에서 같은 길이의 배열을 사용해야했던 환경에서, TypeSafe하게 작성하고자 공부한 내용을 공유해보겠습니다.

## 주어진 상황

```tsx
interface Props {
  aArray: string[];
  bArray: number[];
}

function useFoo({ aArray, bArray }: Props) {
  if (aArray.length === bArray.length) {
    // 무조건 같아야하는 상황 !!
  }
}
```

TypeScript 기반 React 환경에서 custom hook을 개발할 때 맞이한 상황이였습니다.

위 코드와 같이 두 배열을 입력받아야했으며, **항상 두 배열의 길이가 같아야했죠.**

길이가 정해져있었다면 Tuple type으로써 간단히 작성할 수 있었겠지만, 정해진 배열의 길이가 없다는 점이 문제였습니다.

> 예를 들어 aArray의 길이가 3, bArray의 길이가 2일 때, 런타임 환경 에러가 아닌 개발 환경에서 에러를 띄워야 했습니다.

## 해결 과정

### 아이디어의 출처

동일한 길이의 배열을 사용하는 custom hook의 경우 framer-motion의 useTransform에서 아이디어를 얻었기 때문에 해당 라이브러리 코드를 최대한 참고하였습니다.

- [framer/motion github](https://github.com/framer/motion)

```tsx
// framer/motion/packages/framer-motion/src/value/use-transform.ts 발췌
export type InputRange = number[];
type SingleTransformer<I, O> = (input: I) => O;
type MultiTransformer<I, O> = (input: I[]) => O;

// ... 중략

export function useTransform<I, O>(
  value: MotionValue<number>,
  inputRange: InputRange,
  outputRange: O[],
  options?: TransformOptions<O>
): MotionValue<O>;

export function useTransform<I, O>(input: MotionValue<I>, transformer: SingleTransformer<I, O>): MotionValue<O>;

export function useTransform<I, O>(
  input: MotionValue<I> | MotionValue<string>[] | MotionValue<number>[] | MotionValue<string | number>[],
  inputRangeOrTransformer: InputRange | Transformer<I, O>,
  outputRange?: O[],
  options?: TransformOptions<O>
): MotionValue<O>;
```

제가 미쳐 파악하지 못한 부분이 있을 수도 있었지만, 기본적으로 custom hook을 overload하여 선언하고 있었습니다.

일단 제 상황에서는 overload를 통해 custom hook을 선언하는 것은 비생산적인 해결방법이라고 판단하였으며, 같은 길이를 보장하는 코드는 찾지 못하였습니다. _물론 제 이해력이 부족해서 이해하지 못하는 것일 수도 있습니다._

결론을 말씀드리자면, 아이디어의 출처인 framer-motion에서는 해결 방법을 찾지 못하였고, 더욱 자세히 보고싶으신 분들은 [발췌 링크](https://github.com/framer/motion/blob/main/packages/framer-motion/src/value/use-transform.ts)를 확인해보시면 좋을 것 같습니다.

### 도와줘 Stackoverflow !

결국 해결 방법을 떠올리지 못하고, Stackoverflow에 질문 글을 올리게 되었고 답변을 달아주신 고마운 분 덕분에 해결할 수 있게 되었습니다.

적용 방법은 다음과 같습니다.

```tsx
// Custom Hook
interface Props<T extends string[]> {
  aArray: [...T];
  bArray: [...{ [I in keyof T]: number }];
}

function useFoo<T extends string[]>({ aArray, bArray }: Props<T>) {}

// Component
function SomeComponent() {
  // 👍 Success
  useFoo({ aArray: ['h', 'e', 'l'], bArray: [1, 2, 3] });

  // 💩 Error with
  // Type '[number, number]' is not assignable to type '[number, number, number]'.
  // Source has 2 element(s) but target requires 3.
  useFoo({ aArray: ['h', 'e', 'l'], bArray: [1, 2] });

  return <div></div>;
}
```

답변을 달아주신 분께서 사용한 개념들에 대해 정성스럽게 작성해주셔서 정리 및 공유해보겠습니다.

### Tuple

가장 먼저 알아야할 개념은 `tuple`입니다.

튜플은 간단히 설명드리자면, 포함된 요소의 수와 위치의 type을 정확히 알고 있는 다른 종류의 Array입니다.

> A tuple type is another sort of Array type that knows exactly how many elements it contains, and exactly which types it contains at specific positions. [typescriptlang.org 발췌](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

```ts
type FirstTuple = [number, boolean, string];

// 💩 Error
const barArray: FirstTuple = [2, 'bar'];

// 👍 Success
const fooArray: FirstTuple = [1, false, 'foo'];

// const firstFoo: number
const firstFoo = fooArray[0];

// const secondFoo: string
const secondFoo = fooArray[2];
```

단순히 `string[]`과 같은 type과 다르게, 수와 위치에 따른 type 값을 정확히 알고 있는 type입니다.

참고하시면 좋을 링크는 다음과 같습니다.

- [typescriptlang.org tuple](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types)

### Mapped types

`mapped type`이란 TypeScript 3.1 버전부터 사용 가능한 기능으로써,

JavaScript의 `map`처럼, 기존 정의되어 있는 타입을 새로운 타입으로 변환하는 문법을 의미합니다.

```ts
type Names = 'foo' | 'bar' | 'hyesung';

type Person = { [K in Names]: number };

const PersonObject: Person = {
  foo: 20,
  bar: 23,
  hyesung: 25,
};
```

위처럼 mapped types 방식으로 기존 `Names` type을 이용해 Names의 이름을 key 값으로 가지고 있으며, number 타입의 value를 가지고 있는 `Person` type을 선언할 수 있습니다.

이 때 generic을 이용해 타입을 주입하여 더욱 유연하게 사용할 수 있습니다.

```ts
type MapToNumber<T extends string> = {
  [K in T]: number;
};

type Names = 'foo' | 'bar' | 'hyesung';

type Person = MapToNumber<Names>;

const PersonObject: Person = {
  foo: 20,
  bar: 23,
  hyesung: 25,
};
```

JavaScript의 map 함수와 같이 다양한 방면으로 사용할 수 있는 타입 선언 방법이라고 알고 계시면 좋을 것 같으며, 참고하시면 좋을 링크는 다음과 같습니다.

- [타입스크립트 핸드북 맵드 타입](zhttps://joshua1988.github.io/ts/usage/mapped-type.html#%EB%A7%B5%EB%93%9C-%ED%83%80%EC%9E%85-mapped-type-%EC%9D%B4%EB%9E%80)
- [typescriptlang.org Mapped types on tuples and arrays](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-1.html#mapped-types-on-tuples-and-arrays)

### Variadic Tuple Types

Variadic Tuple Types, 즉 `가변 인자 튜플 타입`은 제가 놓인 상황의 문제와 상당히 비슷한 문제를 해결하기 위해 TypeScript 4.0 버전부터 사용 가능하게 되었습니다.

공식 문서에서 보여주고 있는 문제 상황은 JavaScript의 concat 함수의 type에 대한 이야기부터 시작합니다.

```js
function concat(arr1, arr2) {
  return [...arr1, ...arr2];
}
```

만약 concat 상황을 overload로써 타입을 지정하자면 다음과 같이 되었을 것이라고 기술되어 있습니다.

```ts
function concat(arr1: [], arr2: []): [];
function concat<A>(arr1: [A], arr2: []): [A];
function concat<A, B>(arr1: [A, B], arr2: []): [A, B];
function concat<A, B, C>(arr1: [A, B, C], arr2: []): [A, B, C];

function concat<A2>(arr1: [], arr2: [A2]): [A2];
function concat<A1, A2>(arr1: [A1], arr2: [A2]): [A1, A2];
function concat<A1, B1, A2>(arr1: [A1, B1], arr2: [A2]): [A1, B1, A2];
// ... 축약
```

제가 놓인 상황과 같이 굉장히 비생산적으로 느껴집니다.

```ts
function concat<T, U>(arr1: T[], arr2: U[]): Array<T | U>;
```

이를 해결하기 위해 단순히 array type으로 선언할 시, 입력 길이나 요소 순서에 대해 어떤 것도 처리하지 않는 것을 문제라고 정의해두었습니다.

그렇기 때문에 typescript 4.0은 타입 추론 개선과 함께 Tuple type 구문의 spread 연산자에 generic을 사용할 수 있는 것을 사용해 해결하였다고 기술되어 있습니다.

> TypeScript 4.0 brings two fundamental changes, along with inference improvements, to make typing these possible. The first change is that spreads in tuple type syntax can now be generic. This means that we can represent higher-order operations on tuples and arrays even when we don’t know the actual types we’re operating over. When generic spreads are instantiated (or, replaced with a real type) in these tuple types, they can produce other sets of array and tuple types. - [typescriptlang.org 발췌](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html)

이를 통해 작성된 concat의 type은 다음과 같습니다.

```ts
type Arr = readonly any[];
function concat<T extends Arr, U extends Arr>(arr1: T, arr2: U): [...T, ...U] {
  return [...arr1, ...arr2];
}
```

단락의 초반에서 언급하였던 overload 문제를 death by a thousand overloads, 천 개의 오버로드로 인한 죽음이라고 표현한다고 하는데요. 이러한 문제를 extends와 spread 연산자와 같은 익숙한 키워드로 해결해 나가는 것을 배웠다고 말씀드릴 수 있을 것 같습니다.

더불어 tuple의 나머지 요소에 대해 끝뿐만 아니라 어느 곳에서도 발생할 수 있는 것에 완화되었다는 것이 변경점이라고 하는데요. 참고해보실 분들은 아래 공식 문서와 pull request를 확인해보시면 좋을 것 같습니다.

- [typescriptlang.org Variadic Tuple Types](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-0.html#variadic-tuple-types)
- [microsoft/TypeScript Variadic tuple types pull request](https://github.com/microsoft/TypeScript/pull/39094)

## 다시 보는 결과물

```ts
interface Props<T extends string[]> {
  aArray: [...T];
  bArray: [...{ [I in keyof T]: number }];
}

function useFoo<T extends string[]>({ aArray, bArray }: Props<T>) {}

function FooComponent() {
  useFoo({
    aArray: ['h', 'e', 'l'],
    bArray: [1, 2],
  }); // 💩 Error

  useFoo({
    aArray: ['a', 'b', 'c'],
    bArray: [1, 2, 3],
  }); // 👍 Success
}
```

`bArray: [...{ [I in keyof T]: number }]` 부분에 명시적으로 spread 연산자를 이용해 튜플인 것을 기입하여도 되지만, `aArray: [...T]`에서 spread 연산자를 사용하였다면, 아래 예시와도 같이 사용할 수 있습니다.

```ts
interface Props<T extends any[]> {
  aArray: [...T];
  bArray: { [I in keyof T]: number };
}

function useFoo<T extends string[]>({ aArray, bArray }: Props<T>) {}

function FooComponent() {
  useFoo({
    aArray: ['h', 'e', 'l'],
    bArray: [1, 2],
  }); // 💩 Error

  useFoo({
    aArray: ['a', 'b', 'c'],
    bArray: [1, 2, 3],
  }); // 👍 Success
}
```

제가 보기엔 `[...T]`에서 타입 추론이 되어 정상 동작하는 것으로 파악되나, 명시적으로 작성하기 위해 spread 연산자를 같이 활용하는 것이 좋아보입니다.

직접 확인하시고 싶으신 분들은 [TypeScript Playground 링크](https://www.typescriptlang.org/play?#code/JYOwLgpgTgZghgYwgAgApQPYAcDOAeAFWQgA9IQATHZOEATwG0BdAPmQG8BYAKGT5oCCUKHDoAuZAwB0MgkwDcPfsgBGQkeMkyp7SQElkoZAGsIdDDGRyJIAK4BbFdGQBfBTxc8eMWyARhgDBBkWxwIADEMDEJiMghKahwwKFAAc2YWAApdOHVRABpVPLpXCXRsfAIWAEoOVy9uHz8AoORIjABhDHssIPiwTNquXn5QiKjspWV+XOFRCQYAcgALRcLFiDXkRYAbRaZ8qemiuc0GAEZCgCYmI9dq+WQAeifkQF4NwEqd5ABRYQwoBp3MbtSYjY6zDQLRZwLaLFSwhD7Q5g6ZqU4LS7IK6FADMBzuLlqL3egFkd5AAZVsCCQOBwHkB3B4oEgsEQKHKuCuMVI5CoNHoGQ4dwh8y0sncKLRkLqDAMRlM5ks1mQdkczhcihRCGKEl0ssMwQVFisTAkKiiOwgtFcms8jMavn8gWCwKiXKIPPifKSKRA6VY2UEp0KUtEpTQmE5hBqdTt3kdLWC7S6PT64CugyFKNdGAzw2OfBFZxWsM26z2+JRylDZ0x2OQeORBeQ2vRkngOzChQ7YVuKMJj2Jnx+fwB9qBYXaebuyiLUJh63h60RlebNYx11xq4LrelDGStgghQPR+QJ77ykJz1ebzJlOpEFpHiAA)를 확인해주시면 좋을 것 같습니다.

## 마치며

제가 겪는 문제 상황에서 검색을 하여도 필요로 하는 답을 찾지 못하여 Stackoverflow에 직접 질문을 올리고 답변을 받아보는 경험을 할 수 있었습니다. _제 검색 능력의 부족일 수도 있습니다..._

정성스런 답변을 받아 많은 것을 공부하고 알아갈 수 있었던 경험이였다고 생각되며, 해당 포스팅을 보고 저와 비슷한 상황을 겪고 있는 분들에게 도움이 되었으면 좋을 것 같은 마음과 함께 글을 마치겠습니다. 긴 글 읽어주셔서 감사합니다.

## 참고

- [필자가 질문한 Stackoverflow](https://stackoverflow.com/questions/71370238/how-to-check-is-interfaces-two-props-length-is-same)
- [typescript lang](https://www.typescriptlang.org/)
- [타입스크립트 핸드북](https://joshua1988.github.io/ts/)
- [framer/motion github](https://github.com/framer/motion)
- [microsoft/TypeScript github](https://github.com/microsoft/TypeScript)
