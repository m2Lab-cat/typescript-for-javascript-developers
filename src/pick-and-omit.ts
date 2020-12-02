export {};

type DetailedProfie = {
  name: string;
  height: number;
  weight: number;
};

type SimpleProfile = Pick<DetailedProfie, 'name' | 'weight'>;
type SmallProfile = Omit<DetailedProfie, 'height'>;

// start!
// type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
// type MySmallProfile = MyOmit<DetailedProfie, 'height'>;

//2
// type MyOmit<DetailedProfie> = Pick<DetailedProfie, Exclude<'name' | 'height' | 'weight', 'height'>>;
// type MySmallProfile = MyOmit<DetailedProfie>;

//3
// type MyOmit = Pick<DetailedProfie, Exclude<'name' | 'height' | 'weight', 'height'>>;
// type MySmallProfile = MyOmit;

//4
type MyOmit = Pick<DetailedProfie, 'name' | 'weight'>;
type MySmallProfile = MyOmit;