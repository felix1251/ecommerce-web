/* eslint-disable @next/next/no-img-element */
const ProductDescription: React.FunctionComponent = () => {
  return (
    <div className="flex gap-10 bg-white pb-16">
      <div className="flex flex-col gap-10 margin-min-screen">
        <div className="justify-center py-12 border-b-2 border-b-zinc-200 hidden md:flex">
          <ul className="flex gap-10 text-lg font-semibold text-zinc-500">
            <li>Description</li>
            <li>Additional Information</li>
            <li>Reviews (0)</li>
          </ul>
        </div>
        <div className="grid gap-10 md:grid-cols-5 w-full">
          <div className="flex flex-col gap-6 md:col-span-3">
            <h2 className="text-3xl text-gray-800 font-bold">
              the quick fox jumps over{" "}
            </h2>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
            <blockquote className="py-4 px-8 my-4 border-s-4 border-secondary">
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </blockquote>
            <p>
              Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.
            </p>
          </div>
          <img
            src="/product-description-image.png"
            alt="product-description-image"
            className="h-[300px] md:h-[400px] md:col-span-2 2-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
