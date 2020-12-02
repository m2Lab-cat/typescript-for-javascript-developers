export {};

function error(message: string): never {
  throw new Error(message);
}

try {
  let result = error('test');
  console.log({result}); // これは実行されない
} catch(error) {
  console.log({error});
}

let foo: void = undefined;
let bar: never = error('only me!');
