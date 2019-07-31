import React from "react";
import PropTypes from "prop-types";

const NewspaperIcon = ({ color = "#000" }) => (
  <span className="newspaper-icon">
    <svg viewBox="0 0 62 62">
      <g fill={color} fillRule="nonzero">
        <path d="M57 0H13c-2.757 0-5 2.243-5 5v13H0v9c0 2.757 2.243 5 5 5h11v30h46V5c0-2.757-2.243-5-5-5zM2 27v-7h6v7c0 1.654-1.346 3-3 3s-3-1.346-3-3zm58 33H18V30H8.974A4.948 4.948 0 0 0 10 27V5c0-1.654 1.346-3 3-3s3 1.346 3 3v23h2V5c0-1.13-.391-2.162-1.026-3H57c1.654 0 3 1.346 3 3v55z" />
        <path d="M24 7.236L27.382 14H30V4h-2v6.764L24.618 4H22v10h2zM38 12h-4v-2h4V8h-4V6h4V4h-6v10h6zM42.083 14a2.076 2.076 0 0 0 2.055-1.74L44.847 8h.306l.71 4.26A2.075 2.075 0 0 0 47.918 14 2.085 2.085 0 0 0 50 11.917V4h-2v7.917c0 .087-.151.099-.165.015L46.847 6h-3.694l-.988 5.932c-.014.083-.165.071-.165-.015V4h-2v7.917c0 1.148.934 2.083 2.083 2.083zM55 6c.551 0 1 .448 1 1h2c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3a1.001 1.001 0 0 1 0 2c-.551 0-1-.448-1-1h-2c0 1.654 1.346 3 3 3s3-1.346 3-3-1.346-3-3-3a1.001 1.001 0 0 1 0-2zM36 16h22v2H36zM36 20h2v2h-2zM40 20h18v2H40zM36 24h22v2H36zM56 28h2v2h-2zM36 28h18v2H36zM50.39 48.214L47 47.246v-.267A5.005 5.005 0 0 0 49 43v-1.793c0-2.687-2.001-4.966-4.556-5.188a5.02 5.02 0 0 0-3.822 1.294A5.017 5.017 0 0 0 39 41v2c0 1.563.754 3.04 2 3.979v.267l-3.39.968A5 5 0 0 0 34 53v1h20v-1a5 5 0 0 0-3.61-4.786zM36.175 52a2.986 2.986 0 0 1 1.985-1.862L43 48.754V45.87l-.497-.289C41.562 45.033 41 44.068 41 43v-2c0-.839.355-1.645.974-2.212a2.964 2.964 0 0 1 2.298-.776c1.529.133 2.728 1.536 2.728 3.195V43c0 1.068-.562 2.033-1.503 2.581L45 45.87v2.884l4.84 1.384A2.99 2.99 0 0 1 51.825 52h-15.65z" />
        <path d="M30 58h28V32H30v26zm2-24h24v22H32V34zM27 30c3.86 0 7-3.141 7-7s-3.14-7-7-7-7 3.141-7 7 3.14 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5zM20 32h2v2h-2zM24 32h4v2h-4zM20 36h8v2h-8zM20 40h8v2h-8zM20 44h8v2h-8zM20 48h8v2h-8zM20 52h8v2h-8zM20 56h8v2h-8z" />
      </g>
    </svg>
  </span>
);

NewspaperIcon.propTypes = {
  color: PropTypes.string
};

export default NewspaperIcon;
