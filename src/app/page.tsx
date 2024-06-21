import Link from "next/link";

const request = async (url: string) => {
  const req = await fetch(url, {
    next: {
      revalidate: 1,
    },
  });
  const data = await req.json();

  return data;
};

async function Home() {
  const data = await request("https://dummyjson.com/products");
  console.log(data);
  return (
    <div className="flex flex-wrap w-4/5 mx-auto justify-between mt-9">
      {data.products.map((item: any) => {
        return (
          <>
            <div className="card w-96 bg-base-100 shadow-xl mb-5">
              <figure>
                <img src={item.thumbnail} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={`/product/${item.id}`}
                    className="btn btn-primary"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default Home;
