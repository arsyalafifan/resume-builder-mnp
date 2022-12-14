export default function LoadingSvg(){
    return(
        <svg 
        style={{
            height: '100vh',
            width: '100vw',
            margin: 'auto',
            background: 'rgb(241, 242, 243)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            shapeRendering: 'auto',
        }}
        width="80px" 
        height="60px" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid">
        <rect x="17.5" y="30" width="15" height="40" fill="#5300FF">
        <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="18;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
        <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="64;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.2s"></animate>
        </rect>
        <rect x="42.5" y="30" width="15" height="40" fill="#A787E8">
        <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
        <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1" begin="-0.1s"></animate>
        </rect>
        <rect x="67.5" y="30" width="15" height="40" fill="#DCCBFF">
        <animate attributeName="y" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="20.999999999999996;30;30" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
        <animate attributeName="height" repeatCount="indefinite" dur="1s" calcMode="spline" keyTimes="0;0.5;1" values="58.00000000000001;40;40" keySplines="0 0.5 0.5 1;0 0.5 0.5 1"></animate>
        </rect>
        </svg>
    )
}