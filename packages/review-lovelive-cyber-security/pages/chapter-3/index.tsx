import AppLayout from "@/components/AppLayout";
import { chapters } from "@/resources/chapters";
import ChapterFrontispiece from "@/components/ChapterFrontispiece";

const Chapter3Intro = () => {
  const { title } = chapters["3"];

  return (
    <AppLayout hideMenu={true}>
      <ChapterFrontispiece chapterNumber={3} chapterTitle={title} />
    </AppLayout>
  );
};

export default Chapter3Intro;
