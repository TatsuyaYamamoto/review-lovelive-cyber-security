import { useRouter } from "next/router";

import AppLayout from "@/components/AppLayout";
import ChapterFrontispiece from "@/components/ChapterFrontispiece";
import { chapters } from "@/resources/chapters";
import { useEffect } from "react";

const Chapter1Intro = () => {
  const router = useRouter();
  const { title } = chapters["1"];

  useEffect(() => {
    setTimeout(() => {
      router.push(`/chapter-1/section-1`);
    }, 2000);
  }, []);

  return (
    <AppLayout hideMenu={true}>
      <ChapterFrontispiece chapterNumber={1} chapterTitle={title} />
    </AppLayout>
  );
};

export default Chapter1Intro;
