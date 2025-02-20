// DownloadButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const ButtonDownloadCv = () => {
  const handleDownload = () => {
    const fileURL =
      "https://drive.google.com/file/d/1wi7lTj7lY1Bsh7bM4Hu-3qodINB_7EmZ/view?usp=sharing";
    window.open(fileURL, "_blank");
  };

  return (
    <Button
      variant={"outline"}
      className="uppercase flex items-center gap-2 2xl:text-xl 2xl:px-8 2xl:py-6"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl 2xl:text-3xl" />
    </Button>
  );
};

export default ButtonDownloadCv;
