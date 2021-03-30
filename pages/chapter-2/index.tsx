import AppLayout from "@/components/AppLayout";
import { chapters } from "@/resources/chapters";
import ChapterFrontispiece from "@/components/ChapterFrontispiece";

const Chapter2Intro = () => {
  const { title } = chapters["2"];

  return (
    <AppLayout hideMenu={true}>
      <ChapterFrontispiece chapterNumber={2} chapterTitle={title} />
    </AppLayout>
  );
};

export default Chapter2Intro;
