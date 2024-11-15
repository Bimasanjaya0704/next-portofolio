// DownloadButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const ButtonDownloadCv = () => {
  const handleDownload = () => {
    const fileURL =
      "https://drive.google.com/file/d/1F2xZA7BknEB3YsxnGrjQL5R5N8vf6TWB/view?usp=sharing";
    window.open(fileURL, "_blank");
  };

  return (
    <Button
      variant={"outline"}
      className="uppercase flex items-center gap-2"
      onClick={handleDownload}
    >
      <span>Download CV</span>
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default ButtonDownloadCv;
