export interface product {
    _id: string;
    title?: string;
    image: {
        asset: {
            _ref: string;
            type: "image";
        }
    };
    price: number;
    type: "product";
}