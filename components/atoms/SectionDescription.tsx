interface ISectionDescriptionProps {
  withExtraDescription?: boolean;
}

const SectionDescription: React.FunctionComponent<ISectionDescriptionProps> = ({
  withExtraDescription = true,
}) => {
  return (
    <div
      className={`flex flex-col ${
        withExtraDescription ? "justify-center text-center" : "justify-start"
      } gap-3`}
    >
      {withExtraDescription && (
        <h2 className="font-semibold text-lg text-neutral-500">
          Featured Products
        </h2>
      )}
      <div
        className={`uppercase font-extrabold text-2xl text-gray-800 ${
          withExtraDescription ? "" : "-mb-3"
        }"`}
      >
        Bestseller Products
      </div>
      {withExtraDescription && (
        <p className="font-medium text-neutral-500">
          Problems trying to solve the conflict between
        </p>
      )}
    </div>
  );
};

export default SectionDescription;
