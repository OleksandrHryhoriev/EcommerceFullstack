import type {
   CreateProduct,
   UpdateProduct,
   ProductId,
   PartialUpdateProduct,
} from "./types.ts";
import ProductsDataAccess from "./dataAccess.ts";
import ApiError from "../../core/error/apiError.ts";

const productsDataAccess = new ProductsDataAccess();

class ProductsService {
   async getProductsList() {
      const products = await productsDataAccess.getProductsList();

      return products;
   }
   async getProductById(id: ProductId) {
      const product = await productsDataAccess.getProductById(id);

      if (!product) throw ApiError.notFound("Product not found");

      return product;
   }
   async createProduct(newProduct: CreateProduct) {
      const product = await productsDataAccess.createProduct(newProduct);

      return product;
   }
   async updateProduct(productData: UpdateProduct, id: ProductId) {
      const product = await productsDataAccess.updateProduct(productData, id);

      if (!product) throw ApiError.notFound("Product not found");

      return product;
   }
   async partialUpdateProduct(
      productData: PartialUpdateProduct,
      id: ProductId,
   ) {
      const product = await productsDataAccess.partielUpdateProduct(
         productData,
         id,
      );

      if (!product) throw ApiError.notFound("Product not found");

      return product;
   }
   async deleteProduct(id: ProductId) {
      const product = await productsDataAccess.deleteProduct(id);

      if (!product) throw ApiError.notFound("Product not found");

      return product;
   }
}

export default ProductsService;
