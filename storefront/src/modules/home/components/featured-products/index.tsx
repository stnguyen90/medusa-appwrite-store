import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()

  return (
    <div className="content-container py-12">
      <div className="flex flex-col mb-8">
        <h2 className="text-xl font-bold">Swag Collection</h2>
      </div>
      <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
        {data
          ? data.map((product) => (
              <li key={product.id}>
                <ProductPreview {...product} />
              </li>
            ))
          : Array.from(Array(4).keys()).map((i) => (
              <li key={i}>
                <SkeletonProductPreview />
              </li>
            ))}
      </ul>
    </div>
  )
}

export default FeaturedProducts
