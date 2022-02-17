import Product from "./Product";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";
import Section from "../components/Section";
import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types"
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { getComponent } from '@stackbit/components';

const ProductGrid = ({ products }) => {
    //if (!products || products.length === 0) return null;
    console.log("products: ", products)
    return (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <h1>Shop</h1>
            {products.map((product: { id: any; }) => (
                <Product key={product.id} {...product} />
            ))}
        </div>
    );
};

/*export const getStaticProps: GetStaticProps = async () => {
    const { result: productIds } = await printful.get("sync/products");

    const allProducts = await Promise.all(
        productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
    );
    console.log("All: ", allProducts)
    const products: PrintfulProduct[] = allProducts.map(
        ({ result: { sync_product, sync_variants } }) => ({
            ...sync_product,
            variants: sync_variants.map(({ name, ...variant }) => ({
                name: formatVariantName(name),
                ...variant,
            })),
        })
    );

    return {
        props: {
            products: shuffle(products),
        },
    };
};*/

export default ProductGrid;
