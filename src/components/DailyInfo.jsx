import React from "react";

export default function DailyInfo({ values }) {
  if (!values) {
    return <></>;
  }
  // Define descriptions for physical values
  const getPhysicalDescription = (value) => {
    if (value >= 0.75) {
      return "Feeling strong and energetic!";
    } else if (value >= 0.25) {
      return "Feeling good, with moderate energy.";
    } else if (value >= -0.25) {
      return "Feeling average, neither too energetic nor too tired.";
    } else if (value >= -0.75) {
      return "Feeling a bit tired, might need some rest.";
    } else {
      return "Feeling exhausted, consider taking a break.";
    }
  };

  // Define descriptions for emotional values
  const getEmotionalDescription = (value) => {
    if (value >= 0.75) {
      return "Feeling extremely positive and optimistic!";
    } else if (value >= 0.25) {
      return "Feeling positive and in good spirits.";
    } else if (value >= -0.25) {
      return "Feeling emotionally stable.";
    } else if (value >= -0.75) {
      return "Feeling a bit down or moody.";
    } else {
      return "Feeling very emotional and sensitive.";
    }
  };

  // Define descriptions for intellectual values
  const getIntellectualDescription = (value) => {
    if (value >= 0.75) {
      return "Feeling highly focused and mentally sharp!";
    } else if (value >= 0.25) {
      return "Feeling mentally alert and ready to tackle tasks.";
    } else if (value >= -0.25) {
      return "Feeling average intellectually, neither particularly sharp nor dull.";
    } else if (value >= -0.75) {
      return "Feeling a bit mentally sluggish, might need extra effort to concentrate.";
    } else {
      return "Feeling mentally exhausted, take a break if possible.";
    }
  };

  return (
    <div>
      <div
        className="how-feel"
        style={{
          padding: "2vw",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div className="">
          <h5>Physcially: {getPhysicalDescription(values.physical)}</h5>
        </div>
        <div className="">
          <h5>Emotionally : {getEmotionalDescription(values.emotional)}</h5>
        </div>
        <div className="">
          <h5>
            Intellectually : {getIntellectualDescription(values.intellectual)}
          </h5>
        </div>
      </div>
      <div className="dailyinfo">
        <h4>The Physical Cycle</h4>

        <p>
          The physical aspect is at its peak, signifying enhanced energy,
          vitality, and strength. This period boosts physical well-being,
          increasing vigor, endurance, and sexual drive. However, there's a risk
          of overexertion due to amplified physical forces.
        </p>
      </div>
      <div className="dailyinfo">
        <h4>The Emotional Cycle</h4>
        <p>
          The emotional aspect indicates intensified feelings and connections
          with others during high emotional cycles. This fosters an outward
          focus, enhancing relationships, support, and understanding. Openness
          increases, making it ideal to strengthen bonds and engage in creative
          pursuits. Optimism, love, and creativity flourish, but there's a
          caution against emotional overreactions or impulsive decisions.
        </p>
      </div>
      <div className="dailyinfo">
        <h4>The Intellectual Cycle</h4>
        <p>
          During high intellectual cycles, cognitive abilities peak. Analysis,
          planning, and focus are enhanced, making it an excellent time for
          problem-solving, creative thinking, and embracing new ideas. This
          phase encourages intellectual growth and exploration, although it may
          also bring frustration if opportunities are scarce. Openness to new
          challenges and ideas is heightened, paving the way for intellectual
          achievements and advancements.
        </p>
      </div>
      <div className="dailyinfo">
        <h4>The Average Cycle</h4>
        <p>
          Days near cycle peaks are powerful, boosting endurance, emotional
          vitality, and intellectual sharpness. These periods enhance personal
          strengths, offering opportunities for peak performance in activities
          aligned with each cycle's domain.
        </p>
      </div>
    </div>
  );
}
