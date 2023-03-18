import styles from "./style.module.css";
import TalkContent from "./TalkContent";
import TalkInfo from "./TalkInfo";
import TalkUser from "./TalkUser";

const TalkEditor = () => {
  return (
    <div className={styles.wrapper}>
      <TalkInfo />
      <TalkUser />
      <TalkContent />
    </div>
  );
};

export default TalkEditor;
