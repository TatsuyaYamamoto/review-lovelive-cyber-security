import { NextPage } from "next";

import ChapterStepper from "@/components/ChapterStepper";
import AppLayout from "@/components/AppLayout";

const Intro: NextPage = () => {
  return (
    <AppLayout>
      <div>hogehoge</div>
      <ChapterStepper open={true} />
    </AppLayout>
  );
};

export default Intro;
