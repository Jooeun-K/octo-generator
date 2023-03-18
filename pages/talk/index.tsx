import TalkEditor from "@/components/talk/Editor";
import TalkPreview from "@/components/talk/Preview";
import styles from "./style.module.css";

const Talk = () => {
  return (
    <div className={styles.container}>
      <TalkPreview />
      <TalkEditor />
    </div>
  );
};

export default Talk;
