export const Link = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M14 10.5L10 14.5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M16 13.5L18 11.5C19.3807 10.1193 19.3807 7.88071 18 6.5V6.5C16.6193 5.11929 14.3807 5.11929 13 6.5L11 8.5M8 11.5L6 13.5C4.61929 14.8807 4.61929 17.1193 6 18.5V18.5C7.38071 19.8807 9.61929 19.8807 11 18.5L13 16.5" stroke="#6366F1" strokeWidth="2" strokeLinecap="round"/>
</svg>
)

export const ButtonArrow = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
  <path d="M20.0001 12.4998L4.00012 12.4998" stroke="url(#paint0_linear_4077_117)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.0003 17.5001C15.0003 17.5001 20.0002 13.8176 20.0002 12.5C20.0003 11.1824 15.0002 7.50006 15.0002 7.50006" stroke="url(#paint1_linear_4077_117)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_4077_117" x1="18.062" y1="13.4998" x2="17.6223" y2="10.5098" gradientUnits="userSpaceOnUse">
      <stop stopColor="#3353F9"/>
      <stop offset="1" stopColor="#6A3BFF"/>
    </linearGradient>
    <linearGradient id="paint1_linear_4077_117" x1="19.3946" y1="17.5001" x2="13.1843" y2="16.1805" gradientUnits="userSpaceOnUse">
      <stop stopColor="#3353F9"/>
      <stop offset="1" stopColor="#6A3BFF"/>
    </linearGradient>
  </defs>
</svg>
)


export const ArrowDown = ({hover}: {hover: boolean}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
  <path d="M7.89506 10.2695L5.84724 7.81215C5.41302 7.29109 5.78355 6.5 6.46182 6.5L9.71242 6.5C10.3907 6.5 10.7612 7.29109 10.327 7.81215L8.27917 10.2695C8.17922 10.3895 7.99501 10.3895 7.89506 10.2695Z" fill={`${hover ? "#fff" : "#3459FF"}`}/>
</svg>
)

export const Star = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
  <g opacity="0.92" clipPath="url(#clip0_1369_3189)">
    <path d="M12.6666 17.75L6.49458 20.995L7.67358 14.122L2.67358 9.25495L9.57358 8.25495L12.6596 2.00195L15.7456 8.25495L22.6456 9.25495L17.6456 14.122L18.8246 20.995L12.6666 17.75Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12.6666 17.75L6.49458 20.995L7.67358 14.122L2.67358 9.25495L9.57358 8.25495L12.6596 2.00195L15.7456 8.25495L22.6456 9.25495L17.6456 14.122L18.8246 20.995L12.6666 17.75Z" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_1369_3189">
      <rect width="24" height="24" fill="white" transform="translate(0.666626)"/>
    </clipPath>
  </defs>
</svg>

)
