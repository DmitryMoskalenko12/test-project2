import classes from './main-section.module.scss';
import { useRouter } from 'next/router';

const MainSection = () => {

  const router = useRouter()
  const res = router.query.app_offer_link ? router.query.app_offer_link : 'https://www.google.com/';
  
  return (
      <section id='main' className={classes.main}>
          <div className="container">
            <h1 className={classes.title}>The Name Of <br  className={classes.br}/> The Product</h1>
            <div className={classes.descr}>Practice solving your puzzle as fast as possible with random shuffling and a timer with full statistics</div>
            <a className={classes.mainLink} href={res}>
              <svg xmlns="http://www.w3.org/2000/svg" width="224" height="53" viewBox="0 0 224 53" fill="none">
                  <path d="M211.061 6.48499e-05H12.9397C5.79341 6.48499e-05 0 4.5388 0 10.1396V42.6535C0 48.2543 5.79341 52.7947 12.9397 52.7947H211.061C218.206 52.7947 224 48.2543 224 42.6535V10.1396C224 4.5388 218.206 6.48499e-05 211.061 6.48499e-05Z" fill="#F35D5D"/>
                  <path d="M50.6474 20.6965L44.6179 26.6848L26.9172 8.66397C27.8051 8.13011 28.962 8.04527 29.9856 8.64121L50.6474 20.6965Z" fill="white"/>
                  <path d="M50.7949 34.9246L29.9854 47.0668C28.7409 47.7931 27.2991 47.5096 26.3841 46.6364L44.617 28.6155L50.7949 34.9246Z" fill="white"/>
                  <path d="M57.7729 30.4531L51.807 33.9336L51.7598 33.9604L45.5823 27.6514L51.6118 21.661L51.6586 21.69L57.7729 25.2573C59.7621 26.4161 59.7621 29.2923 57.7729 30.4531Z" fill="white"/>
                  <path d="M25.4194 45.6719C25.4068 45.6595 25.3942 45.647 25.3816 45.6346C24.8436 45.1049 24.4974 44.3641 24.4974 43.5033V12.2043C24.4974 11.089 25.0794 10.1744 25.9065 9.65708C25.9218 9.64673 25.9369 9.63846 25.9522 9.62811L43.653 27.651L25.4194 45.6719Z" fill="white"/>
                  <path d="M92.3647 32.1165H89.9548H83.7091V34.5147H89.7781C89.0516 37.184 86.61 39.1477 83.7091 39.1477C80.2353 39.1477 77.4193 36.3335 77.4193 32.8593C77.4193 29.3851 80.2353 26.5689 83.7091 26.5689C85.351 26.5689 86.8458 27.1979 87.9659 28.2284L89.6627 26.5337C88.1076 25.0687 86.0132 24.1707 83.7091 24.1707C78.911 24.1707 75.0215 28.0608 75.0215 32.8593C75.0215 37.6578 78.911 41.5459 83.7091 41.5459C88.507 41.5459 92.3965 37.6578 92.3965 32.8593C92.3965 32.6089 92.3854 32.3606 92.3647 32.1165Z" fill="white"/>
                  <path d="M99.2018 39.2822C97.5226 39.2822 96.1613 37.813 96.1613 36.0004C96.1613 34.1877 97.5226 32.7165 99.2018 32.7165C100.881 32.7165 102.243 34.1877 102.243 36.0004C102.243 37.813 100.881 39.2822 99.2018 39.2822ZM99.2018 30.3204C96.1336 30.3204 93.6464 32.8241 93.6464 35.9114C93.6464 39.0008 96.1336 41.5024 99.2018 41.5024C102.27 41.5024 104.757 39.0008 104.757 35.9114C104.757 32.8241 102.27 30.3204 99.2018 30.3204Z" fill="white"/>
                  <path d="M111.563 39.2822C109.883 39.2822 108.522 37.813 108.522 36.0004C108.522 34.1877 109.883 32.7165 111.563 32.7165C113.242 32.7165 114.603 34.1877 114.603 36.0004C114.603 37.813 113.242 39.2822 111.563 39.2822ZM111.563 30.3204C108.494 30.3204 106.007 32.8241 106.007 35.9114C106.007 39.0008 108.494 41.5024 111.563 41.5024C114.631 41.5024 117.118 39.0008 117.118 35.9114C117.118 32.8241 114.631 30.3204 111.563 30.3204Z" fill="white"/>
                  <path d="M132.302 24.1708V41.7261H129.904V24.1708H132.302Z" fill="white"/>
                  <path d="M141.408 33.4782L135.96 35.6116C135.992 35.266 136.08 34.9267 136.222 34.6018C136.572 33.801 137.213 33.1844 138.027 32.8657C138.415 32.7126 138.818 32.6402 139.217 32.6402C140.019 32.6402 140.803 32.934 141.408 33.4782ZM142.16 37.3477C141.8 38.0864 141.179 38.6575 140.413 38.9575C139.6 39.2783 138.71 39.2596 137.909 38.9099C137.4 38.6865 136.964 38.3471 136.633 37.9188L144.779 34.728L144.653 34.3038C144.607 34.1466 144.554 33.9935 144.496 33.8465C143.944 32.4374 142.876 31.3262 141.49 30.72C140.103 30.1137 138.563 30.0847 137.154 30.6351C135.745 31.1876 134.635 32.2553 134.029 33.6417C133.423 35.0281 133.393 36.5676 133.944 37.9788C134.496 39.3879 135.564 40.497 136.951 41.1033C137.678 41.422 138.448 41.5813 139.219 41.5813C139.917 41.5813 140.616 41.4489 141.286 41.1881C142.636 40.6584 143.72 39.6466 144.34 38.3368L144.552 37.8898L142.363 36.9318L142.16 37.3477Z" fill="white"/>
                  <path d="M123.402 39.2821C121.88 39.2821 120.647 37.813 120.647 36.0003C120.647 34.1877 121.88 32.7165 123.402 32.7165C124.924 32.7165 126.158 34.1877 126.158 36.0003C126.158 37.813 124.924 39.2821 123.402 39.2821ZM126.256 30.3203V31.3053C125.445 30.6845 124.462 30.3203 123.402 30.3203C120.622 30.3203 118.368 32.8241 118.368 35.9114C118.368 39.0007 120.622 41.5024 123.402 41.5024C124.462 41.5024 125.445 41.1403 126.256 40.5174V41.7259C126.256 42.4149 125.759 44.3331 123.497 44.3331C121.234 44.3331 120.597 42.3115 120.597 42.3115L118.424 43.3233C118.424 43.3233 119.241 46.5161 123.712 46.5161C126.134 46.5161 127.382 45.109 128.018 43.822C128.448 42.9488 128.654 41.9825 128.654 41.0078V30.3203H126.256Z" fill="white"/>
                  <path d="M155.485 24.1708V41.7261H153.087V24.1708H155.485Z" fill="white"/>
                  <path d="M158.842 24.1706V26.5688C160.521 26.5688 161.882 28.038 161.882 29.8527C161.882 31.6653 160.521 33.1345 158.842 33.1345V35.3547C161.911 35.3547 164.398 32.851 164.398 29.7637C164.398 26.6744 161.911 24.1706 158.842 24.1706Z" fill="white"/>
                  <path d="M154.814 26.5688H158.842V24.1706H154.814V26.5688Z" fill="white"/>
                  <path d="M154.814 35.3547H158.842V33.1345H154.814V35.3547Z" fill="white"/>
                  <path d="M168.044 24.1708V41.7261H165.646V24.1708H168.044Z" fill="white"/>
                  <path d="M174.624 39.545C174.262 39.7664 173.861 39.8761 173.43 39.8761C172.913 39.8761 172.499 39.7395 172.201 39.4705C171.897 39.1953 171.742 38.8187 171.742 38.3469C171.742 38.0717 171.796 37.8234 171.901 37.6082C172.009 37.3889 172.178 37.2006 172.406 37.0495C172.627 36.9005 172.915 36.7888 173.261 36.7184C173.596 36.6481 174.003 36.6108 174.473 36.6108H175.731V38.5704L175.69 38.618C175.332 39.0215 174.974 39.3339 174.624 39.545ZM175.88 40.1927L176.174 39.8761V41.5542H178.194V34.3099C178.194 33.6374 178.111 33.0476 177.951 32.5614C177.796 32.0854 177.546 31.6923 177.207 31.3943C176.865 31.0901 176.42 30.8625 175.886 30.7156C175.34 30.5666 174.67 30.4901 173.896 30.4901C173.461 30.4901 173.035 30.5253 172.625 30.5956C172.216 30.666 171.833 30.757 171.487 30.8667C171.187 30.9619 170.916 31.0674 170.682 31.1771L170.811 33.0745C170.958 33 171.125 32.9214 171.309 32.8407C171.603 32.7083 171.945 32.5883 172.325 32.4807C172.712 32.371 173.157 32.3151 173.645 32.3151C174.024 32.3151 174.349 32.3565 174.61 32.4351C174.883 32.52 175.106 32.6545 175.274 32.8345C175.439 33.0125 175.559 33.2359 175.63 33.5008C175.698 33.7532 175.731 34.0471 175.731 34.3781V35.1603H174.577C173.691 35.1603 172.905 35.2286 172.24 35.361C171.582 35.4935 171.028 35.6962 170.589 35.9673C170.161 36.2342 169.834 36.5757 169.619 36.9812C169.401 37.3889 169.292 37.8772 169.292 38.438C169.292 38.9553 169.379 39.4126 169.55 39.7974C169.72 40.1782 169.962 40.503 170.268 40.7617C170.579 41.0224 170.953 41.2211 171.378 41.3535C171.81 41.488 172.29 41.5542 172.807 41.5542C173.428 41.5542 174.001 41.4342 174.51 41.1962C175.019 40.9583 175.481 40.6189 175.88 40.1927Z" fill="white"/>
                  <path d="M187.714 30.5086L185.961 34.5601L184.885 37.0514L184.155 35.365L182.055 30.5086H179.441L182.849 38.384L183.609 40.1408L181.631 44.9724H184.244L185.963 40.6022L187.269 37.5812L190.327 30.5086H187.714Z" fill="white"/>
                  <path d="M89.5732 17.6341C89.5732 17.6941 89.5687 17.7438 89.5598 17.7893C89.5506 17.8348 89.5362 17.8721 89.5161 17.9031C89.4958 17.9341 89.4724 17.959 89.4455 17.9735C89.4186 17.99 89.3895 17.9983 89.3582 17.9983H85.2881C85.2076 17.9983 85.1246 17.9673 85.0395 17.9072C84.9545 17.8472 84.9119 17.7355 84.9119 17.5741V9.72968C84.9119 9.56828 84.9545 9.45862 85.0395 9.39654C85.1246 9.33653 85.2076 9.30756 85.2881 9.30756H89.2978C89.329 9.30756 89.3582 9.31377 89.3851 9.33033C89.412 9.34688 89.4344 9.36964 89.4521 9.40068C89.4702 9.43172 89.4834 9.47103 89.4925 9.51862C89.5014 9.56621 89.506 9.62002 89.506 9.68209C89.506 9.74003 89.5014 9.79176 89.4925 9.83728C89.4834 9.88281 89.4702 9.92005 89.4521 9.94902C89.4344 9.97799 89.412 9.99868 89.3851 10.0152C89.3582 10.0318 89.329 10.038 89.2978 10.038H85.7313V13.0942H88.8074C88.8434 13.0942 88.8746 13.1025 88.9015 13.1191C88.9284 13.1336 88.9508 13.1563 88.9686 13.1853C88.9864 13.2142 88.9998 13.2536 89.0089 13.2991C89.0178 13.3467 89.0224 13.4005 89.0224 13.4646C89.0224 13.5226 89.0178 13.5722 89.0089 13.6157C88.9998 13.6571 88.9864 13.6922 88.9686 13.7191C88.9508 13.746 88.9284 13.7667 88.9015 13.7792C88.8746 13.7936 88.8434 13.7998 88.8074 13.7998H85.7313V17.2658H89.3582C89.3895 17.2658 89.4186 17.2741 89.4455 17.2885C89.4724 17.3051 89.4958 17.3279 89.5161 17.3568C89.5362 17.3858 89.5506 17.423 89.5598 17.4706C89.5687 17.5182 89.5732 17.572 89.5732 17.6341Z" fill="white"/>
                  <path d="M96.9006 9.68209C96.9006 9.74003 96.896 9.79176 96.8871 9.83728C96.8783 9.8828 96.8648 9.92005 96.8468 9.94902C96.829 9.97798 96.8066 9.99868 96.7797 10.0152C96.7528 10.0318 96.7237 10.038 96.6924 10.038H94.0999V17.8638C94.0999 17.8907 94.0931 17.9155 94.0796 17.9383C94.0664 17.959 94.0438 17.9776 94.0126 17.99C93.9811 18.0045 93.9387 18.0148 93.8849 18.0252C93.8313 18.0335 93.7663 18.0376 93.6902 18.0376C93.6141 18.0376 93.5491 18.0335 93.4955 18.0252C93.4417 18.0148 93.3991 18.0045 93.3678 17.99C93.3364 17.9776 93.314 17.959 93.3006 17.9383C93.2871 17.9155 93.2805 17.8907 93.2805 17.8638V10.038H90.688C90.652 10.038 90.6217 10.0318 90.5973 10.0152C90.5727 9.99868 90.5512 9.97798 90.5334 9.94902C90.5156 9.92005 90.5022 9.8828 90.4933 9.83728C90.4842 9.79176 90.4798 9.74003 90.4798 9.68209C90.4798 9.62001 90.4842 9.56621 90.4933 9.51862C90.5022 9.47102 90.5156 9.43171 90.5334 9.40067C90.5512 9.36963 90.5727 9.34687 90.5973 9.33032C90.6217 9.31377 90.652 9.30756 90.688 9.30756H96.6924C96.7237 9.30756 96.7528 9.31377 96.7797 9.33032C96.8066 9.34687 96.829 9.36963 96.8468 9.40067C96.8648 9.43171 96.8783 9.47102 96.8871 9.51862C96.896 9.56621 96.9006 9.62001 96.9006 9.68209Z" fill="white"/>
                  <path d="M102.213 17.8638C102.213 17.8907 102.207 17.9155 102.193 17.9383C102.18 17.959 102.157 17.9776 102.126 17.99C102.095 18.0045 102.053 18.0148 102.002 18.0252C101.95 18.0335 101.884 18.0376 101.804 18.0376C101.728 18.0376 101.663 18.0335 101.609 18.0252C101.555 18.0148 101.513 18.0045 101.481 17.99C101.45 17.9776 101.428 17.959 101.414 17.9383C101.401 17.9155 101.394 17.8907 101.394 17.8638V9.43998C101.394 9.41515 101.402 9.39032 101.418 9.36756C101.433 9.3448 101.458 9.32618 101.491 9.31376C101.525 9.29928 101.568 9.28893 101.619 9.28065C101.67 9.27031 101.732 9.26617 101.804 9.26617C101.884 9.26617 101.95 9.27031 102.002 9.28065C102.053 9.28893 102.095 9.29928 102.126 9.31376C102.157 9.32618 102.18 9.3448 102.193 9.36756C102.207 9.39032 102.213 9.41515 102.213 9.43998V17.8638Z" fill="white"/>
                  <path d="M110.018 9.68209C110.018 9.74003 110.013 9.79176 110.004 9.83728C109.995 9.8828 109.982 9.92005 109.964 9.94902C109.946 9.97798 109.924 9.99868 109.897 10.0152C109.87 10.0318 109.841 10.038 109.81 10.038H107.217V17.8638C107.217 17.8907 107.21 17.9155 107.197 17.9383C107.183 17.959 107.161 17.9776 107.13 17.99C107.098 18.0045 107.056 18.0148 107.002 18.0252C106.948 18.0335 106.883 18.0376 106.807 18.0376C106.731 18.0376 106.666 18.0335 106.612 18.0252C106.559 18.0148 106.516 18.0045 106.485 17.99C106.454 17.9776 106.431 17.959 106.418 17.9383C106.404 17.9155 106.398 17.8907 106.398 17.8638V10.038H103.805C103.769 10.038 103.739 10.0318 103.714 10.0152C103.69 9.99868 103.668 9.97798 103.651 9.94902C103.633 9.92005 103.619 9.8828 103.61 9.83728C103.601 9.79176 103.597 9.74003 103.597 9.68209C103.597 9.62001 103.601 9.56621 103.61 9.51862C103.619 9.47102 103.633 9.43171 103.651 9.40067C103.668 9.36963 103.69 9.34687 103.714 9.33032C103.739 9.31377 103.769 9.30756 103.805 9.30756H109.81C109.841 9.30756 109.87 9.31377 109.897 9.33032C109.924 9.34687 109.946 9.36963 109.964 9.40067C109.982 9.43171 109.995 9.47102 110.004 9.51862C110.013 9.56621 110.018 9.62001 110.018 9.68209Z" fill="white"/>
                  <path d="M120.63 13.626C120.63 13.1108 120.582 12.6286 120.486 12.1775C120.389 11.7285 120.23 11.3354 120.009 11.0022C119.787 10.6691 119.493 10.4063 119.125 10.2159C118.758 10.0255 118.304 9.93036 117.762 9.93036C117.225 9.93036 116.771 10.0318 116.402 10.2304C116.033 10.429 115.733 10.696 115.502 11.0333C115.271 11.3685 115.106 11.7596 115.005 12.2086C114.904 12.6555 114.854 13.1273 114.854 13.626C114.854 14.1536 114.9 14.6461 114.992 15.0993C115.083 15.5545 115.239 15.9497 115.458 16.2849C115.677 16.6202 115.971 16.8829 116.338 17.0733C116.705 17.2637 117.164 17.3589 117.715 17.3589C118.261 17.3589 118.72 17.2575 119.092 17.0547C119.464 16.8498 119.764 16.5767 119.992 16.2353C120.22 15.8918 120.384 15.4966 120.482 15.0455C120.58 14.5965 120.63 14.1226 120.63 13.626ZM121.503 13.5515C121.503 14.2447 121.423 14.8737 121.265 15.4345C121.106 15.9973 120.867 16.4774 120.549 16.8726C120.231 17.2699 119.831 17.5741 119.347 17.7893C118.863 18.0045 118.299 18.1121 117.655 18.1121C117.01 18.1121 116.456 18.0107 115.992 17.8058C115.529 17.603 115.148 17.3113 114.85 16.9326C114.553 16.5539 114.333 16.0925 114.192 15.5462C114.051 15 113.981 14.3833 113.981 13.6984C113.981 13.0176 114.059 12.401 114.216 11.8465C114.372 11.2898 114.611 10.816 114.931 10.4249C115.251 10.0338 115.652 9.72965 116.133 9.51445C116.614 9.29925 117.18 9.19165 117.829 9.19165C118.461 9.19165 119.007 9.29304 119.468 9.49375C119.929 9.69654 120.311 9.98416 120.613 10.3608C120.915 10.7374 121.139 11.1947 121.285 11.7306C121.43 12.2686 121.503 12.8749 121.503 13.5515Z" fill="white"/>
                  <path d="M129.751 17.601C129.751 17.6817 129.738 17.75 129.714 17.8038C129.689 17.8576 129.658 17.901 129.62 17.9341C129.582 17.9672 129.539 17.99 129.492 18.0045C129.445 18.0169 129.401 18.0252 129.361 18.0252H129.193C129.104 18.0252 129.022 18.0128 128.948 17.99C128.874 17.9693 128.803 17.93 128.733 17.8741C128.664 17.8183 128.594 17.7417 128.525 17.6486C128.455 17.5555 128.378 17.4334 128.293 17.2865L125.231 11.8589C125.078 11.594 124.925 11.323 124.771 11.0436C124.616 10.7622 124.469 10.4911 124.331 10.2263H124.324C124.328 10.5532 124.331 10.8884 124.331 11.2319C124.331 11.5734 124.331 11.9086 124.331 12.2355V17.8638C124.331 17.8907 124.324 17.9155 124.31 17.9383C124.297 17.959 124.275 17.9776 124.243 17.99C124.212 18.0045 124.17 18.0148 124.119 18.0252C124.067 18.0335 124.001 18.0376 123.921 18.0376C123.845 18.0376 123.78 18.0335 123.726 18.0252C123.672 18.0148 123.63 18.0045 123.599 17.99C123.567 17.9776 123.545 17.959 123.531 17.9383C123.518 17.9155 123.511 17.8907 123.511 17.8638V9.72967C123.511 9.56828 123.554 9.45861 123.639 9.39653C123.724 9.33652 123.807 9.30756 123.887 9.30756H124.223C124.331 9.30756 124.42 9.31583 124.492 9.33446C124.563 9.35101 124.628 9.38205 124.687 9.42343C124.745 9.46689 124.802 9.52689 124.858 9.60552C124.914 9.68415 124.975 9.78348 125.042 9.90349L127.386 14.0626C127.534 14.3213 127.674 14.5717 127.806 14.8117C127.938 15.0496 128.067 15.2855 128.192 15.5152C128.318 15.747 128.442 15.9746 128.565 16.1981C128.688 16.4215 128.811 16.6471 128.931 16.8768H128.938C128.934 16.5002 128.931 16.1091 128.931 15.7014C128.931 15.2938 128.931 14.9007 128.931 14.5261V9.46688C128.931 9.43998 128.938 9.41722 128.951 9.39446C128.965 9.3717 128.987 9.35308 129.019 9.33652C129.05 9.32204 129.091 9.30963 129.143 9.30342C129.194 9.29721 129.26 9.29307 129.341 9.29307C129.413 9.29307 129.475 9.29721 129.529 9.30342C129.583 9.30963 129.625 9.32204 129.657 9.33652C129.688 9.35308 129.711 9.3717 129.727 9.39446C129.743 9.41722 129.751 9.43998 129.751 9.46688V17.601Z" fill="white"/>
                  <path d="M75.0215 13.6445C75.0215 15.991 76.9289 17.8967 79.2735 17.8967C81.6182 17.8967 83.5258 15.991 83.5258 13.6445C83.5258 13.5865 83.5243 13.5265 83.5218 13.4645H79.4745V14.2921H82.6474L82.5783 14.5467C82.174 16.0324 80.8151 17.0711 79.2735 17.0711C77.3852 17.0711 75.8488 15.5337 75.8488 13.6445C75.8488 11.7573 77.3852 10.2199 79.2735 10.2199C80.0702 10.2199 80.8343 10.4951 81.446 10.9979L82.0332 10.4103C81.2639 9.75227 80.2918 9.39223 79.2735 9.39223C76.9289 9.39223 75.0215 11.3001 75.0215 13.6445Z" fill="white"/>
              </svg>
            </a>
        </div> 
      </section>
  )
}

export default MainSection;