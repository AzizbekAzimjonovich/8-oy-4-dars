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
    <div>
      <h3 className="text-2xl font-semibold text-center">Products list</h3>
      <p className="text-center text-md mb-6">You can click on the name of any product and see more information about it! 👌</p>
      <h1 className="text-xl">
        {data.products.map((item: any) => {
          return (
            <>
              <Link className="flex ml-6 items-center gap-3" href={`/product/${item.id}`}>
                <p className="">{item.id}</p>
                <h1>{item.title}</h1>
              </Link>
            </>
          )
        })}
      </h1>
    </div>
  )
}

export default Home