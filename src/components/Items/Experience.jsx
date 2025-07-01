import React from "react";

function Experience({ experience: { year, degree, address, content } }) {
  return (
    <div className="entry">
      <div className="title">
        <span>{year}</span>
      </div>
      <div className="body">
        <h4 className="mt-0 mb-2">{degree}</h4>
        <p className="">{address}</p>

        <p className="mt-2">
          {/* <strong>Responsibilities</strong> */}
        </p>
        {/* Render content as a list if it's an array */}
        {Array.isArray(content) ? (
          <ul className="list-disc ml-0">
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </div>
    </div>
  );
}

export default Experience;
