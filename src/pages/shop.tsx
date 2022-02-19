import * as React from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";
import Section from "../components/Section";
import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";
import ProductGrid from "../components/ProductGrid";
import { sourcebitDataClient } from 'sourcebit-target-next';
import { withRemoteDataUpdates } from 'sourcebit-target-next/with-remote-data-updates';
import { getComponent } from '@stackbit/components';


type IndexPageProps = {
    products: PrintfulProduct[];
};

const IndexPage: React.FC<IndexPageProps> = ({ products }) => (
    <ProductGrid products={products} />





);

export const getStaticProps: GetStaticProps = async () => {
    const { result: productIds } = await printful.get("sync/products");

    const allProducts = await Promise.all(
        productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
    );

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
};

export default IndexPage;
