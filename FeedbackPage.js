import React, { useState } from 'react';
import './styles.css'; // Ensure this CSS file includes the necessary styles

const Feedback = () => {
  const [faculty, setFaculty] = useState('');
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
  });

  const handleFacultyChange = (event) => {
    setFaculty(event.target.value);
  };

  const handleAnswerChange = (question, answer) => {
    setAnswers({
      ...answers,
      [question]: answer,
    });
  };

  const handleSubmit = () => {
    console.log('Feedback Submitted:', { faculty, answers });
    alert('Feedback submitted successfully!');
  };

  return (
    <div className="feedback-container">
      <h2>Student Feedback Form</h2>

      {/* Faculty Dropdown */}
      <div className="question-section">
        <label htmlFor="faculty">Select Faculty:</label>
        <select id="faculty" value={faculty} onChange={handleFacultyChange}>
          <option value="">Select Faculty</option>
          <option value="Dr. Smith">Dr. Smith</option>
          <option value="Prof. Johnson">Prof. Johnson</option>
          <option value="Mr. Williams">Mr. Williams</option>
          <option value="Ms. Brown">Ms. Brown</option>
        </select>
      </div>

      {/* Question 1 */}
      <div className="question-section">
        <p>How would you rate the teaching quality?</p>
        <div className="options-container">
          {['Excellent', 'Good', 'Average', 'Poor'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="question1"
                value={option}
                checked={answers.question1 === option}
                onChange={() => handleAnswerChange('question1', option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Question 2 */}
      <div className="question-section">
        <p>Was the course material helpful?</p>
        <div className="options-container">
          {['Yes', 'No'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="question2"
                value={option}
                checked={answers.question2 === option}
                onChange={() => handleAnswerChange('question2', option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Question 3 */}
      <div className="question-section">
        <p>Would you recommend this course to other students?</p>
        <div className="options-container">
          {['Yes', 'No'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="question3"
                value={option}
                checked={answers.question3 === option}
                onChange={() => handleAnswerChange('question3', option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Additional Question 4 */}
      <div className="question-section">
        <p>How would you rate the course content?</p>
        <div className="options-container">
          {['Excellent', 'Good', 'Average', 'Poor'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="question4"
                value={option}
                checked={answers.question4 === option}
                onChange={() => handleAnswerChange('question4', option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Additional Question 5 */}
      <div className="question-section">
        <p>Was the pace of the course appropriate?</p>
        <div className="options-container">
          {['Yes', 'No'].map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="question5"
                value={option}
                checked={answers.question5 === option}
                onChange={() => handleAnswerChange('question5', option)}
              />
              {option}
            </label>
          ))}
        </div>
      </div>

      {/* Submit Button */}
      <button className="submit-btn" onClick={handleSubmit}>
        Submit Feedback
      </button>
    </div>
  );
};

export default Feedback;
