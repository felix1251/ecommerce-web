import { Note, SectionDescription } from "@/atoms";

const NotesSection: React.FunctionComponent = () => {
  return (
    <section className="py-16 margin-small-screen flex flex-col w-full">
      <SectionDescription />
      <div className="mt-20 grid grid-cols-3 w-full">
        <Note
          imgUrl="/book-reader.svg"
          label="Easy Wins"
          description=" Get your best looking smile now!"
        />
        <Note
          imgUrl="/note-icon.svg"
          label="Concrete"
          description=" Get your best looking smile now!"
        />
        <Note
          imgUrl="/growth-icon.svg"
          label="Hack Growth"
          description=" Get your best looking smile now!"
        />
      </div>
    </section>
  );
};

export default NotesSection;
