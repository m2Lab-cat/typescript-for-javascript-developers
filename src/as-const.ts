export {};

let name = 'Taro';

name = 'Ham';

let nickname = 'Ham' as const;
nickname = 'Ham';

let profile = {
  name: 'Taro',
  height: 178
} as const;

// profile.name = 'Ham';
// profile.height = 180;