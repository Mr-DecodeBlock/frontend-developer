// @Libraries
import Image from "next/image";
import { useTranslation } from "react-i18next";

// @Components
import AnswerQuestion from "@/src/common/answer-question";

// img import
import question_image from "../../../../public/assets/img/referrals/question-image.png";

export function ReferralsQuestionSection() {
  const { t } = useTranslation();

  return (
    <div className="referrals-question-container">
      <div className="referrals-question-title-container">
        <div className="">
          <Image
            src={question_image}
            alt="theme-pure"
            className="h-100 p-relative"
            style={{ zIndex: "1" }}
          />
        </div>
        <h3 className="referrals-question-title">
          {t("referralsPage.questionSection.title")}
        </h3>
      </div>
      <AnswerQuestion style={true} />
    </div>
  );
}
