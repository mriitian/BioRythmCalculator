import React from "react";

export default function MyBio() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5vw",
        gap: "20px",
      }}
    >
      <div className="info">
        <h4>The Physical Cycle</h4>
        <p>
          This cycle, lasting approximately 23 days, relates to physical
          well-being, strength, endurance, and overall health. Peaks and troughs
          in this cycle may affect energy levels and physical performance.
        </p>
      </div>
      <div className="info">
        <h4>The Emotional Cycle</h4>
        <p>
          Spanning around 28 days, the emotional cycle impacts mood,
          sensitivity, and emotional resilience. Fluctuations in this cycle may
          influence emotional stability, creativity, and interpersonal
          relationships.
        </p>
      </div>
      <div className="info">
        <h4>The Intellectual Cycle</h4>
        <p>
          With a duration of about 33 days, the intellectual cycle influences
          cognitive abilities, problem-solving skills, and mental agility.
          Variations in this cycle may affect mental clarity, concentration, and
          decision-making abilities.
        </p>
      </div>
      <div className="info">
        <h4>The Average Cycle</h4>
        <p>
          This refers to the average value calculated from the physical,
          emotional, and intellectual cycles. It provides an overall indication
          of the individual's biorythmic state at a particular time.
        </p>
      </div>
      <div className="info">
        <h4>The Critical Days</h4>
        <p>
          Critical days occur when one or more biorythmic cycles reach their
          lowest point or transition between high and low phases. These days are
          considered to be potentially challenging, requiring extra care and
          attention to manage potential risks and fluctuations in performance
          and well-being.
        </p>
      </div>
    </div>
  );
}
