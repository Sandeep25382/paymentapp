// GridStarBackground.tsx
import React, { useMemo } from 'react';
import { ViewStyle } from 'react-native';
import Svg, { Rect, Line, Circle } from 'react-native-svg';

type Props = {
  width: number;          // fixed width
  height: number;         // fixed height
  cellSize?: number;      // size of each grid box in px
  lineWidth?: number;     // grid line thickness
  lineOpacity?: number;   // grid line opacity
  starCount?: number;     // total stars
  starMinR?: number;      // min star radius
  starMaxR?: number;      // max star radius
  starOpacity?: number;   // star opacity
  style?: ViewStyle;      // extra styles if needed
  seed?: number;          // (optional) deterministic star positions
};

const GridStarBackground: React.FC<Props> = ({
  width,
  height,
  cellSize = 80, // bigger boxes now
  lineWidth = 1,
  lineOpacity = 0.15,
  starCount = 80,
  starMinR = 0.5,
  starMaxR = 1.6,
  starOpacity = 0.85,
  style,
  seed,
}) => {
  // deterministic RNG
  const rand = (() => {
    if (seed == null) return Math.random;
    let s = Math.abs(seed) + 1;
    return () => {
      s ^= s << 13; s ^= s >>> 17; s ^= s << 5;
      return ((s >>> 0) % 100000) / 100000;
    };
  })();

  const verticals = useMemo(() => {
    const lines = [];
    for (let x = 0; x <= width; x += cellSize) lines.push(x);
    return lines;
  }, [width, cellSize]);

  const horizontals = useMemo(() => {
    const lines = [];
    for (let y = 0; y <= height; y += cellSize) lines.push(y);
    return lines;
  }, [height, cellSize]);

  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < starCount; i++) {
      const x = rand() * width;
      const y = rand() * height;
      const r = starMinR + rand() * (starMaxR - starMinR);
      arr.push({ x, y, r });
    }
    return arr;
  }, [width, height, starCount, starMinR, starMaxR]);

  return (
    <Svg
      width={width}
      height={height}
      style={style}
    >
      {/* background */}
      <Rect x={0} y={0} width={width} height={height} fill="black" />

      {/* grid: vertical lines */}
      {verticals.map((x, i) => (
        <Line
          key={`v-${i}`}
          x1={x}
          y1={0}
          x2={x}
          y2={height}
          stroke="white"
          strokeOpacity={lineOpacity}
          strokeWidth={lineWidth}
        />
      ))}

      {/* grid: horizontal lines */}
      {horizontals.map((y, i) => (
        <Line
          key={`h-${i}`}
          x1={0}
          y1={y}
          x2={width}
          y2={y}
          stroke="white"
          strokeOpacity={lineOpacity}
          strokeWidth={lineWidth}
        />
      ))}

      {/* stars */}
      {stars.map((s, i) => (
        <React.Fragment key={`s-${i}`}>
          {/* soft glow */}
          <Circle cx={s.x} cy={s.y} r={s.r * 3} fill="white" opacity={0.08} />
          {/* core */}
          <Circle cx={s.x} cy={s.y} r={s.r} fill="white" opacity={starOpacity} />
        </React.Fragment>
      ))}
    </Svg>
  );
};

export default GridStarBackground;
