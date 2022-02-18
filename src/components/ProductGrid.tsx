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

const ProductGrid = ({ body }) => {
    return (
        <div className="py-2 bg-primary text-white text-center">
            <div className="max-w-xl mx-auto">
                <p>{body}</p>
            </div>
        </div>
    )
}






export default ProductGrid;
