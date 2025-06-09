import React from "react";
import { Gliker } from "../fonts/gliker";
import { Metadata } from "next";
import { Button } from "../components/Button";

export const metadata: Metadata = {
  title: "Regulamin",
};

const Regulations = () => {
  return (
    <section className="flex flex-col gap-8 py-12">
      <h1
        className={`text-5xl ${Gliker.className} text-background text-shadow-md `}
      >
        Regulamin wydarzenia
      </h1>

      <div className="flex flex-col gap-8 p-4  rounded-3xl w-full">
        <Button
          href="https://drive.google.com/file/d/16kLsGwARIqPA7t0teL9K-YDpanlMUV0d/view?usp=drive_link"
          text="Regulamin dla Uczestników"
          variant="light"
        />
        <Button
          href="https://drive.google.com/file/d/1EYp0DYa8_SCgwwNfmpwYc7oCXxiqGRCP/view?usp=drive_link"
          text="Regulamin dla Wystawców"
          variant="light"
        />
        <Button
          href="https://drive.google.com/file/d/1He0t-XIuogqPejQejuAxNGyZ3evAjY0a/view?usp=drive_link"
          text="Klauzula informacyjna administratora danych osobowych"
          variant="light"
        />
        <Button
          href="https://drive.google.com/file/d/107Q6yprKG2YqzASAHf_0weR16L84w0eR/view?usp=drive_link"
          text="Pisemna zgoda - oświadczenie rodzica/opiekuna prawnego uczestnika powyżej 13 roku życia"
          variant="light"
        />
        <Button
          href="https://drive.google.com/file/d/1ioXrB9DvPxqouUp0hlB3hmaHJSHMRJVV/view?usp=drive_link"
          text="Pisemna zgoda - oświadczenie rodzica/opiekuna prawnego uczestnika poniżej 13 roku życia"
          variant="light"
        />

        <Button
          href="https://drive.google.com/file/d/107Q6yprKG2YqzASAHf_0weR16L84w0eR/view?usp=drive_link"
          text="Pisemna zgoda - oświadczenie rodzica/opiekuna prawnego uczestnika powyżej 16 roku życia"
          variant="light"
        />
      </div>
    </section>
  );
};

export default Regulations;
