import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default function Contacts() {
  return (
    <div className="Container-contacts">
      <p className="Contacts">
        Let's stay connected... Check out my{" "}
        <a
          className="Github"
          href="https://github.com/Saldaba95/react-search-engine"
          target="blank"
        >
          GitHub
        </a>{" "}
        and{" "}
        <a
          className="Shecodes"
          href="https://www.shecodes.io/graduates/66500-sarei-aldaba"
          target="blank"
        >
          SheCodes
        </a>
        .
      </p>
    </div>
  );
}
