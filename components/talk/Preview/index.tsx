import { toPng } from "html-to-image";
import { useCallback, useRef } from "react";
import styles from "./style.module.css";

const generateDateTimeString = (date: Date) => {
  const dateString = new Intl.DateTimeFormat("ko", {
    dateStyle: "medium",
  })
    .format(date)
    .replaceAll(". ", "-")
    .replace(".", "_");
  const timeString = new Intl.DateTimeFormat("en", {
    timeStyle: "medium",
  })
    .format(date)
    .replaceAll(":", "-")
    .replace(" ", "-");
  return dateString + timeString;
};

const TalkPreview = () => {
  const previewRef = useRef<HTMLDivElement>(null);

  const onClickExportImage = useCallback(() => {
    if (!previewRef.current) return;

    toPng(previewRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const date = generateDateTimeString(new Date());
        const link = document.createElement("a");
        link.download = `[${date}] octo-generate-talk.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [previewRef]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.preview} ref={previewRef}>
        Preview
      </div>
      <div className={styles.button_box}>
        <button
          type="button"
          onClick={onClickExportImage}
          className={styles.export_button}
        >
          이미지 다운로드
        </button>
      </div>
    </div>
  );
};

export default TalkPreview;
