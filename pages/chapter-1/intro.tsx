import AppLayout from "@/components/AppLayout";
import ChapterFrontispiece from "@/components/ChapterFrontispiece";
import { chapters } from "@/resources/chapters";

const Chapter1Intro = () => {
  const { title } = chapters["1"];

  return (
    <AppLayout hideMenu={true}>
      <ChapterFrontispiece chapterNumber={1} chapterTitle={title} />
    </AppLayout>
  );
};

export default Chapter1Intro;
