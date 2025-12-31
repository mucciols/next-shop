export interface StrapiProductPicture {
  id: number;
  url: string;
  title: string;
}

export interface Product {
  id:number;
  title: string;
  description: string;
  price:number;
  picture: StrapiProductPicture;
  pictureUrl: string;
}