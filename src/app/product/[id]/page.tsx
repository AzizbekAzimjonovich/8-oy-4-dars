import Link from "next/link";

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
      <div className="card lg:card-side bg-base-100 shadow-xl w-4/5 mx-auto mt-9">
        <figure>
          <img src={product.thumbnail} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.title}</h2>
          <p>{product.description}</p>
          <p>category : {product.category}</p>
          <p>price : {product.price}</p>
          <p>brand : {product.brand}</p>
          <p>
            reviews : {product.reviews[0].comment} ,{" "}
            {product.reviews[0].reviewerName} ,{" "}
            {product.reviews[0].reviewerEmail}
          </p>
          <div className="card-actions justify-end">
            <Link href={"/"} className="btn btn-primary">
              Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProduct;
