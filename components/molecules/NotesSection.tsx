import { Note, SectionDescription } from "@/atoms";

const NotesSection: React.FunctionComponent = () => {
  return (
    <section className="py-16 margin-small-screen flex flex-col w-full">
      <SectionDescription label="THE BEST SERVICES" />
      <div className="my-20 grid grid-cols-3 place-items-start w-full gap-10">
        <Note
          imgUrl="/book-reader.svg"
          label="Easy Wins"
          description=" Get your best looking smile now!"
        />
        <Note
          imgUrl="/note-icon.svg"
          label="Concrete"
          description="Defalcate is most focused in helping you discover your most beautiful smile"
        />
        <Note
          imgUrl="/growth-icon.svg"
          label="Hack Growth"
          description="Overcame any hurdle or any other problem."
        />
      </div>
    </section>
  );
};

export default NotesSection;
