import {
  Apple,
  Cherry,
  Flower,
  Hammer,
  Heart,
  Leaf,
  Package,
  ShoppingCart,
  Sprout,
  Star,
} from "lucide-react";
import { useProducts } from "../model/useProducts";

const OurProducts = () => {
  const { data, isLoading, isError } = useProducts();

  const categories = [
    { id: "all", label: "ALL", icon: Leaf },
    { id: "bundles", label: "BUNDLES", icon: Package },
    { id: "herbs", label: "HERBS", icon: Sprout },
    { id: "vegetables", label: "VEGETABLES", icon: Apple },
    { id: "fruits", label: "FRUITS", icon: Cherry },
    { id: "supplies", label: "SUPPLIES", icon: Hammer },
    { id: "flowers", label: "FLOWERS", icon: Flower },
  ];

  if (isLoading) {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Our Products</h2>
        <p>Loading...</p>
      </section>
    );
  }

  if (isError) {
    return (
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">Our Products</h2>
        <p>Error loading products</p>
      </section>
    );
  }

  return (
    <section className="container">
      <h2 className="text-2xl font-bold mt-[48px] mb-[40px]">Our Products</h2>

      <div className="flex items-center mb-[32px] gap-4">
        {categories.map((category) => {
          const IconComponent = category.icon;
          return (
            <button
              key={category.id}
              className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-gray-300 transition-colors whitespace-nowrap min-w-fit"
            >
              <IconComponent className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-gray-700">
                {category.label}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-[30px] ">
        {data?.map((product: any) => (
          <div
            key={product.id}
            className="w-80 bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow "
          >
            <div className="relative p-6 bg-white">
              <button className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <Heart className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </button>
              <div className="flex justify-center">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="max-h-40 object-contain"
                />
              </div>
            </div>

            <div className="p-4 bg-white">
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">(123)</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                {product.title}
              </h3>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-gray-900">
                  ${product.price}
                </span>
                <button className="p-2 bg-green-50 hover:bg-green-100 rounded-lg transition-colors">
                  <ShoppingCart className="w-5 h-5 text-green-600" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
