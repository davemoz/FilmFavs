import './Star.scss';

type StarProps = {
  percentage?: number;
};

const Star = ({ percentage }: StarProps) => {
  return (
    <svg
      className='star'
      viewBox={`0 0 50 50`}
      preserveAspectRatio='xMinYMin meet'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      {/* <defs>
          <mask id="half-star-mask">
            <rect x="0" y="0" width="26" height="50" fill="blue"></rect>
          </mask>
        </defs> */}
      <defs>
        <linearGradient id={`starGrad${percentage}`}>
          <stop offset='0%' stopColor='#FFA91B' id='starColor' />
          {percentage && percentage < 100 && (
            <>
              <stop
                offset={`${percentage}%`}
                stopColor='#FFA91B'
                id='starColor'
              />
              <stop
                offset={`${percentage && percentage + 0.1}%`}
                stopColor='transparent'
                id='starTrans'
              />
            </>
          )}
          <stop
            offset='100%'
            stopColor={
              percentage && percentage < 100 ? 'transparent' : '#FFA91B'
            }
            id='starTrans'
          />
        </linearGradient>
      </defs>
      <g>
        <path
          fill={`url(#starGrad${percentage})`}
          d='m0,18.1l19.1,0l5.9,-18.1l5.9,18.1l19.1,0l-15.4,11.2l5.9,18.1l-15.4,-11.2l-15.4,11.2l5.9,-18.1l-15.4,-11.2l0,0z'
        />
      </g>
    </svg>
  );
};

export default Star;
