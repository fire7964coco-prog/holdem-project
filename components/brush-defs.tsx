/**
 * SVG <filter> definitions for the rough-brush highlight effect (==text== syntax).
 * Mounted once at root layout; referenced by mark.brush-hl::before via filter: url(#rough-brush).
 */
export function BrushDefs() {
  return (
    <svg
      style={{ position: "absolute", width: 0, height: 0, overflow: "hidden" }}
      aria-hidden="true"
    >
      <defs>
        <filter id="rough-brush" x="-8%" y="-35%" width="116%" height="170%">
          <feTurbulence type="fractalNoise" baseFrequency="0.032 0.055" numOctaves={3} seed={12} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={9} xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="rough-brush-red" x="-8%" y="-35%" width="116%" height="170%">
          <feTurbulence type="fractalNoise" baseFrequency="0.038 0.06" numOctaves={3} seed={5} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={9} xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id="rough-brush-green" x="-8%" y="-35%" width="116%" height="170%">
          <feTurbulence type="fractalNoise" baseFrequency="0.030 0.058" numOctaves={3} seed={19} result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale={9} xChannelSelector="R" yChannelSelector="G" />
        </filter>
      </defs>
    </svg>
  );
}
