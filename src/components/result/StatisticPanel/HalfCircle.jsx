export default function HalfCircle(props) {
  const { score } = props;

  return (
    <div className="score-wrap">
      <div className="score">
        <div className="score-bar">
          <div className="placeholder">{progressBar(100)}</div>
          <div className="score-circle">{progressBar(score, true)}</div>
        </div>
        <div className="score-value">
          <div className="score-name">Score</div>
          <div className="score-number">{Math.round(score)}%</div>
        </div>
      </div>
    </div>
  );
}

function progressBar(widthPerc, gradient = false) {
  const radius = 65;
  const dashArray = (Math.PI * radius * widthPerc) / 100;

  return (
    <svg width="200" height="120">
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        strokeWidth="20"
        strokeLinecap="round"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${dashArray} 10000`}
        stroke={gradient ? "url(#score-gradient)" : "#e5e5e5"}
      ></circle>
      {gradient && (
        <defs>
          <linearGradient id="score-gradient">
            <stop offset="0%" stopColor="green" />
            <stop offset="25%" stopColor="green" />
            <stop offset="100%" stopColor="green" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}
