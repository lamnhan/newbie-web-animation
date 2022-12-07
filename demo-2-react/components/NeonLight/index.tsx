"use client";
import styles from "./NeonLight.module.scss";

export default function NeonLight() {
  return (
    <div className={styles.main}>
      <svg viewBox="0 0 450 300">
        <g id="bg">
          <image
            id="bg-image"
            x="-30"
            y="-10"
            width="500"
            height="350"
            href="/street.jpg"
          ></image>
        </g>

        <g id="shape" transform="scale(1.5) translate(50 30)">
          <g className={styles.panel}>
            <line
              x1="30"
              y1="-40"
              x2="30"
              y2="0"
              stroke="#373737"
              strokeWidth="3"
            ></line>
            <line
              x1="160"
              y1="-40"
              x2="160"
              y2="0"
              stroke="#373737"
              strokeWidth="3"
            ></line>
            <rect
              x="-17"
              y="-10"
              rx="30"
              width="230"
              height="62"
              fill="#373737"
              stroke="#171717"
              strokeWidth="3"
            ></rect>
          </g>

          <g id="logo" transform="scale(1.2)">
            <circle
              className={styles.logoBG}
              cx="17"
              cy="17"
              r="17"
              fill="#000000"
            ></circle>
            <g transform="translate(-0.5 -12)">
              <path
                className={styles.colorC}
                d="m25.4 19.6c-.2-.1-.3-.2-.5-.2-2.6-1.1-4.3-1.5-4.9-1.5-1.1.1-2.3.5-3.6 1.2-.9.5-1.6.8-2.2 1.2-.6.3-1.1.6-1.5.8-.2.1-1.2.5-1.3.6-1.4.5-2.1.9-2.2.9 0 0-.2 0-.7.1-.4.1-.9.2-1.6.4 1.7-3.1 4.8-5.5 8.6-6.1 3.6-.9 7.2.3 9.9 2.6zm-14.7 15.6c.2.5.2 1 0 1.4-.1.1-.2.3-.3.4l-.6.6c-.2.1-.4.3-.5.4-2-1.8-3.4-4.2-3.9-7-.4-2.1-.2-4.2.5-6.1h1.3c.2.1.4.3.5.7.6 1.8 2.6 8.6 3 9.6z"
              />
              <defs>
                <path
                  id="color-M-def"
                  d="m24.9 35.4c-.5-1.1-1.1-2.2-1.7-3.2s-1.3-2-2-3.1c-.2 0-.6.2-.9.6-.4.4-.8 1-1.2 1.9-.9 1.7-1.3 2.7-1.4 2.7h-.3c-.3-.1-.5-.3-.6-.9 0-.7-.1-1.3-.2-2v-.1c-.1-.6-.9-7.2-.9-7.4 0-.1 0-1.4-.3-2.1-.2-.6-.6-.6-.7-.6s-1 .6-1.1.6c-.7.4-1 .8-1 1.4 0 .7 0 1.6.1 2l2.1 8.4c0 .1.1.2.2.3s.6.6.9.7h1.5c.3 0 .6.1.8.1.3.1.7.1 1 .2.4-.1.6 0 .9-.5.3-.4 1.3-2.2 1.5-2.1s.3.3.3.4-.1.4-.4.9-.7 1.3-1.3 2.3c-1 1.9-1.4 2.8-1.6 2.9-.1 0-.5-.1-1.2-.4-2.5-.7-5.2.4-5.4.5 0 0-.1 0-.2.1-.1 0-.2.1-.3.2 2.4 1.4 5.3 2 8.2 1.4 2.5-.4 4.6-1.6 6.3-3.2-.3-.2-.6-1-1.1-2z"
                />
              </defs>
              <use href="#color-M-def" style={{ fill: "var(--off-fill)" }} />
              <use href="#color-M-def" className={styles.colorM} />
              <path
                className={styles.colorY}
                d="m22.8 22.2c1 .6 1.4 1 1.4 1.3 0 .2-.1.4-.3.7s-.6.7-1.1 1.1c-.5.5-.9.9-1.2 1.3-.3.3-.5.7-.8.6-.3-.4-.5-.8-.5-1.2v-2-.3c0-.6 0-1.1.1-1.5 0-.4.1-.7.1-.8.6-.2 1.4.1 2.3.8zm6.7 4.6c.5 2.8 0 5.5-1.2 7.8-.3-.9-.9-2-1.6-3.6-.6-1.4-1.4-2.7-2-3.7-.5-.9-.7-1.5-.7-1.8 0-.2.5-.8 1.6-1.7.5-.4 1-.8 1.3-1s.5-.4.6-.4.1 0 .1-.1c1 1.2 1.6 2.8 1.9 4.5z"
              />
            </g>
          </g>

          <g id="text">
            <text
              className={styles.below}
              x="50"
              y="33"
              fontSize="36"
              fontWeight="500"
              style={{ fill: "var(--off-fill)" }}
            >
              <tspan>ラ</tspan>
              <tspan>ク</tspan>
              <tspan>ス</tspan>
              <tspan>ル</tspan>
            </text>
            <g className={styles.above}>
              <text
                x="50"
                y="33"
                fontSize="36"
                fontWeight="500"
                style={{ fill: "var(--on-fill)" }}
              >
                <tspan>ラ</tspan>
                <tspan>ク</tspan>
                <tspan>ス</tspan>
                <tspan>ル</tspan>
              </text>
              <text
                x="50"
                y="33"
                fontSize="36"
                fontWeight="500"
                style={{ fill: "var(--on-fill)" }}
              >
                <tspan>ラ</tspan>
                <tspan>ク</tspan>
                <tspan>ス</tspan>
                <tspan>ル</tspan>
              </text>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
