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
          <div className="score-number text-[#2C73C2] text-3xl">{Math.round(score)}%</div>
          <div className="score-name">Your score</div>
        </div>
      </div>
    </div>
  );
}

function progressBar(widthPerc, gradient = false) {
  const radius = 80;
  const dashArray = (Math.PI * radius * widthPerc) / 100;

  return (
    <svg width="200" height="120" >
      <circle
        cx="100"
        cy="100"
        r={radius}
        fill="none"
        strokeWidth="25"
        strokeLinecap="round"
        strokeDashoffset={-1 * Math.PI * radius}
        strokeDasharray={`${dashArray} 10000`}
        stroke={gradient ? "url(#score-gradient)" : "#e5e5e5"}
      ></circle>
      {gradient && (
        <defs>
          <linearGradient id="score-gradient">
            <stop offset="0%" stopColor="#2C73C2" />
            <stop offset="25%" stopColor="#2C73C2" />
            <stop offset="100%" stopColor="#2C73C2" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
}
