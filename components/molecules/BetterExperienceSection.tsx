import { Button } from "@/atoms";

const BetterExperienceSection: React.FunctionComponent = () => {
  return (
    <section className="bg-better-experence min-h-screen w-full bg-no-repeat bg-cover bg-center grid place-items-center bg-fixed">
      <div className="margin-small-screen flex flex-col items-center w-full gap-12">
        <h2 className="text-primary text-xl text-center font-bold">
          Designing Better Experience
        </h2>
        <div className="font-extrabold text-6xl text-center text-gray-800">
          Problems trying to resolve the conflict between
        </div>
        <p className="font text-lg text-gray-600 w-[550px] text-center">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </p>
        <div className="text-4xl font-bold text-secondary">$16.48</div>
        <Button size="lg">ADD YOUR CALL TO ACTION</Button>
      </div>
    </section>
  );
};

export default BetterExperienceSection;
