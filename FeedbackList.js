import React from "react";

const FeedbackList = ({ feedbacks }) => {
  return (
    <div>
      <h2>Feedbacks</h2>
      <ul>
        {feedbacks.map((item, index) => (
          <li key={index}>
            <strong>{item.name}:</strong> {item.feedback}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FeedbackList;