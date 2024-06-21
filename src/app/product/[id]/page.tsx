type ParamsInterface = {
    params: {
        id: number;
    };
};


const request = async (id: number) => {
    const req = await fetch(`${"https://dummyjson.com/products/" + id}`, {
        next: {
            revalidate: 1,
        },
    });
    const data = await req.json();

    return data;
};

async function SingleProduct(params: ParamsInterface) {
    const product = await request(params.params.id);
    return (
        <>
            <div className="card card-compact  w-96 mb-10 bg-base-200 ml-10 shadow-2xl">
                <figure><img src={product.thumbnail} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-lg font-bold">Name: {product.title}</h2>
                    <div className="card-actions items-center flex">
                        <p className=" text-md font-bold">Brand: {product.brand}</p>
                        <p className="text-yellow-600 font-semibold">Rating: {product.rating}</p>
                    </div>
                    <p>{product.description}</p>
                    <div className="card-actions items-center flex justify-end">
                        <p className="text-lg font-medium">Price: ${product.price}</p>
                        <button className="btn px-10 text-md btn-primary">Buy</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;