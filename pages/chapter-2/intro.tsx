import { useEffect } from "react";
import { useRouter } from "next/router";

import AppLayout from "@/components/AppLayout";
import { chapters } from "@/resources/chapters";
import ChapterFrontispiece from "@/components/ChapterFrontispiece";

const Chapter2Intro = () => {
  const router = useRouter();
  const { chapterNumber, title } = chapters["2"];

  useEffect(() => {
    setTimeout(() => {
      router.push(`/chapter-2/section-1`);
    }, 2000);
  }, []);

  return (
    <AppLayout hideMenu={true}>
      <ChapterFrontispiece chapterNumber={chapterNumber} chapterTitle={title} />
    </AppLayout>
  );
};

export default Chapter2Intro;
