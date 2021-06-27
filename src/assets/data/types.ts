export interface Product {
  id: string;
  sku: string;
  name: string;
  barcode: string;
  maker: string;
  category: string;
  principle: string;
  base: string;
  price: {
    price: number;
    finalPrice: number;
    taxes: number;
    discount: number;
    industryPrice: number;
    pmcPrice: number;
  };
  quantityAvailable: number;
  validUntil: number;
  imageURL: string;
}
