import { Button } from "@/atoms";

const BetterExperienceSection: React.FunctionComponent = () => {
  return (
    <section className="bg-better-experence min-h-screen w-full bg-no-repeat bg-cover bg-right lg:bg-center grid place-items-center bg-fixed">
      <div className="margin-small-screen flex flex-col items-center w-full gap-12">
        <h2 className="text-primary text-lg md:text-xl text-center font-bold">
          Designing Better Experience
        </h2>
        <div className="font-extrabold text-4xl md:text-5xl lg:text-6xl text-center text-gray-800">
          Problems trying to resolve the conflict between
        </div>
        <p className="text-base lg:text-lg text-gray-600 w-full md:w-[550px] text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <div className="text-3xl lg:text-4xl font-bold text-secondary">
          $16.48
        </div>
        <Button size="lg">ADD YOUR CALL TO ACTION</Button>
      </div>
    </section>
  );
};

export default BetterExperienceSection;
