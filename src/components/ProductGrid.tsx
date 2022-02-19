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
    /*if (!products || products.length === 0) return (
        <h1>No Products</h1>
    );*/
    return (
        <div className="py-2 bg-primary text-white text-center">
            <h1>Product Grid</h1>
            <div className="max-w-xl mx-auto">
                {products.map((product) => (
                    <Product key={product.id} {...product} />
                ))}
            </div>
        </div>
    )
}






export default ProductGrid;
