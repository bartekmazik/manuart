import { Button } from "./components/Button";
import { Gliker } from "./fonts/gliker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nie znaleziono strony",
};

const NotFound = () => {
  return (
    <div className="flex bg-background rounded-4xl w-full h-[60vh] flex-col gap-8 items-start justify-start p-12 my-12">
      <h1 className={`${Gliker.className} text-5xl text-primary`}>
        Strona której szukasz nie została znaleziona{" "}
      </h1>
      <Button variant="green" text="POWRÓT DO STRONY GŁÓWNEJ" href="/" />
    </div>
  );
};

export default NotFound;
