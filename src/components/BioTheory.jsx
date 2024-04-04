import React from "react";

export default function BioTheory() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        padding: "5vw",
      }}
    >
      <h3>Theory of Biorythms</h3>
      <div className="theory">
        The theory of biorythms suggests that human life is influenced by three
        primary cycles: physical, emotional, and intellectual. These cycles are
        believed to follow regular patterns and affect various aspects of an
        individual's well-being and behavior.
      </div>
      <div className="infos">
        <h4>The Physical Cycle</h4>
        <h6>Duration: Approximately 23 days</h6>
        <p>
          This cycle reflects physical energy, stamina, and vitality. A peak in
          the physical cycle suggests high energy levels and enhanced physical
          performance, while a trough indicates lower energy and potential
          susceptibility to fatigue or illness.
        </p>
      </div>
      <div className="infos">
        <h4>The Emotional Cycle</h4>
        <h6>Duration: Approximately 28 days</h6>
        <p>
          The emotional cycle influences mood, emotional sensitivity, and
          interpersonal interactions. Peaks in this cycle may correspond to
          periods of heightened emotional sensitivity or creativity, while
          troughs may indicate emotional stability or resilience.
        </p>
      </div>
      <div className="infos">
        <h4>The Intellectual Cycle</h4>
        <h6>Duration: Approximately 33 days</h6>
        <p>
          This cycle relates to cognitive functions, mental clarity, and
          problem-solving abilities. Peaks in the intellectual cycle may
          coincide with periods of heightened mental acuity and productivity,
          while troughs may indicate challenges in concentration or
          decision-making.
        </p>
      </div>
    </div>
  );
}
