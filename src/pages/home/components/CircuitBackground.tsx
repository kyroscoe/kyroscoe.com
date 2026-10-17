import { Pause, Play } from 'lucide-react';
import { setMotionPaused, useMotionEnabled, useMotionPaused } from '../../../utils/motion';

const traces = [
  { path: 'M0 44H148L212 108H484', x: 484, y: 108 },
  { path: 'M32 114H186L256 184H520', x: 520, y: 184 },
  { path: 'M0 196H112L174 258H444', x: 444, y: 258 },
  { path: 'M88 224H222L288 290H492', x: 492, y: 290 },
  { path: 'M54 296H144L200 352H468', x: 468, y: 352 },
  { path: 'M154 378H280L338 436H520', x: 520, y: 436 },
  { path: 'M202 60H288L344 10', x: 344, y: 10 },
];

export function CircuitBackground() {
  const motionEnabled = useMotionEnabled();
  return <div className="circuit-background" aria-hidden="true">
    {[0, 1].map((corner) => <svg className={`circuit-corner circuit-corner-${corner}`} viewBox="0 0 520 480" focusable="false" key={corner}>
        {traces.map((trace, index) => {
          const duration = `${8 + index * 0.8}s`;
          const begin = `${-(index * 1.7 + corner * 3)}s`;
          return <g key={trace.path}>
            <path className="circuit-trace" d={trace.path} vectorEffect="non-scaling-stroke" />
            <circle className="circuit-terminal" cx={trace.x} cy={trace.y} r="4" vectorEffect="non-scaling-stroke" />
            {motionEnabled && <g className="circuit-powered">
              <path className="circuit-current" d={trace.path} pathLength="100" strokeDasharray="8 200" strokeDashoffset="8" vectorEffect="non-scaling-stroke">
                <animate attributeName="stroke-dashoffset" from="8" to="-92" dur={duration} begin={begin} repeatCount="indefinite" />
              </path>
              <circle className="circuit-spark" r="3">
                <animateMotion path={trace.path} dur={duration} begin={begin} repeatCount="indefinite" calcMode="paced" />
              </circle>
            </g>}
          </g>;
        })}
    </svg>)}
  </div>;
}

export function MotionToggle() {
  const paused = useMotionPaused();
  return <button className="motion-toggle" type="button" onClick={() => setMotionPaused(!paused)} aria-label={paused ? 'Resume decorative animation' : 'Pause decorative animation'}>
    {paused ? <Play size={13} aria-hidden="true" /> : <Pause size={13} aria-hidden="true" />}
    <span>{paused ? 'Resume motion' : 'Pause motion'}</span>
  </button>;
}
