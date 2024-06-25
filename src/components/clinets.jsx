import React, { useEffect } from 'react';
import $ from 'jquery';
import * as THREE from 'three';

const clinets = () => {
  useEffect(() => {
    const serviceLine = document.getElementById('bigheadingclient');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('viewh');
                } else {
                    entry.target.classList.remove('viewh');
                }
            });
        });

        observer.observe(serviceLine);
    } else {
        // Fallback for browsers that don't support Intersection Observer
        const onScroll = () => {
            const rect = serviceLine.getBoundingClientRect();
            const inView = (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );

            if (inView) {
                serviceLine.classList.add('view');
            } else {
                serviceLine.classList.remove('view');
            }
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    } 
  }, []);

  useEffect(() => {
    const animateAddClients = () => {
        const headingElement = document.querySelector('#Clients .heading h3');
        gsap.to(headingElement, {
          background: 'linear-gradient(to right, #000000 10%, #DADADA 100%)',
          ease: 'none',
          scrollTrigger: {
            trigger: '#Clients',
            start: '+=70%',
            end: '+=120%',
            scrub: true,
            onUpdate: self => {
              const scrollProgress = self.progress.toFixed(3);
              headingElement.style.background = `linear-gradient(to right, #fff ${scrollProgress * 100}%, #000 ${scrollProgress * 100}%)`;
            },
          },
        });
      };
      
      // Call the animateAddClients function
      animateAddClients();
      
  }, []);

  const logos = [
    { id: 1, blackIcon: "img/office-black-icon.png", greenIcon: "img/office-green-icon.png" },
    { id: 2, blackIcon: "img/google-black-icon.png", greenIcon: "img/google-green-icon.png" },
    { id: 3, blackIcon: "img/office-black-icon.png", greenIcon: "img/office-green-icon.png" },
    { id: 4, blackIcon: "img/google-black-icon.png", greenIcon: "img/google-green-icon.png" },
    { id: 5, blackIcon: "img/office-black-icon.png", greenIcon: "img/office-green-icon.png" },
    { id: 6, blackIcon: "img/google-black-icon.png", greenIcon: "img/google-green-icon.png" },
    { id: 7, blackIcon: "img/office-black-icon.png", greenIcon: "img/office-green-icon.png" },
    { id: 8, blackIcon: "img/google-black-icon.png", greenIcon: "img/google-green-icon.png" },
    { id: 9, blackIcon: "img/office-black-icon.png", greenIcon: "img/office-green-icon.png" },
    { id: 10, blackIcon: "img/google-black-icon.png", greenIcon: "img/google-green-icon.png" },
    { id: 11, blackIcon: "img/office-black-icon.png", greenIcon: "img/office-green-icon.png" },
    { id: 12, blackIcon: "img/google-black-icon.png", greenIcon: "img/google-green-icon.png" },
    { id: 13, blackIcon: "img/office-black-icon.png", greenIcon: "img/office-green-icon.png" },
    { id: 14, blackIcon: "img/google-black-icon.png", greenIcon: "img/google-green-icon.png" },
    { id: 15, blackIcon: "img/office-black-icon.png", greenIcon: "img/office-green-icon.png" },
    { id: 16, blackIcon: "img/google-black-icon.png", greenIcon: "img/google-green-icon.png" },
    { id: 17, blackIcon: "img/office-black-icon.png", greenIcon: "img/office-green-icon.png" },
    { id: 18, blackIcon: "img/google-black-icon.png", greenIcon: "img/google-green-icon.png" },
    { id: 19, blackIcon: "img/office-black-icon.png", greenIcon: "img/office-green-icon.png" },
    { id: 20, blackIcon: "img/google-black-icon.png", greenIcon: "img/google-green-icon.png" },
  ];


  return (
    <section id='Clients'>
      <div className="container-fluid">
        <div className="col-lg-11 mx-auto">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                    <div className="smallheading">
                    <h3>Clientss</h3>
                    </div>
                    <div className="bigheading" id='bigheadingclient'>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={957}
                            height={190}
                            viewBox="0 0 957 190"
                            fill="none"
                            >
                            <g opacity="0.5" clipPath="url(#clip0_293_687)">
                                <path
                                d="M69.89 51.4834C80.55 47.0897 92.94 44.8979 107.04 44.8979C118.39 44.8979 128.2 46.2791 136.45 49.0314C144.71 51.7837 151.46 55.7871 156.7 61.0415C161.94 66.2959 165.69 72.5312 167.92 79.7673H201.98C200.6 66.1658 195.96 54.586 188.05 45.038C180.14 35.48 169.34 28.1238 155.67 22.9594C142 17.7951 125.78 15.2129 107.03 15.2129C91.38 15.2129 77.06 17.0644 64.07 20.7676C51.08 24.4707 39.9 29.9853 30.53 37.2915C21.15 44.6076 13.89 53.6853 8.72999 64.5344C3.56999 75.3836 0.98999 88.0342 0.98999 102.496C0.98999 116.959 3.56999 129.569 8.72999 140.328C13.89 151.087 21.16 160.085 30.53 167.311C39.9 174.537 51.08 179.962 64.07 183.575C77.06 187.188 91.38 188.999 107.03 188.999C125.78 188.999 141.95 186.497 155.54 181.513C169.13 176.519 179.88 169.293 187.79 159.825C195.7 150.357 200.43 138.907 201.98 125.476H167.92C165.51 132.362 161.68 138.387 156.44 143.551C151.19 148.715 144.48 152.679 136.31 155.431C128.14 158.183 118.38 159.564 107.03 159.564C92.92 159.564 80.54 157.373 69.88 152.979C59.21 148.585 50.96 142.18 45.11 133.743C39.26 125.306 36.34 114.897 36.34 102.496C36.34 90.096 39.26 79.3869 45.11 70.8598C50.96 62.3426 59.21 55.8871 69.88 51.4934L69.89 51.4834Z"
                                stroke="white"
                                strokeWidth={2}
                                />
                                <path
                                d="M267.27 5.64453H233.73V185.636H267.27V5.64453Z"
                                stroke="white"
                                strokeWidth={2}
                                />
                                <path
                                d="M336.68 57.2983H303.14V185.636H336.68V57.2983Z"
                                stroke="white"
                                strokeWidth={2}
                                />
                                <path
                                d="M339.52 1.00098H300.56V30.4358H339.52V1.00098Z"
                                stroke="white"
                                strokeWidth={2}
                                />
                                <path
                                d="M488.39 62.4628C477.21 57.1283 463.19 54.4561 446.33 54.4561C429.47 54.4561 415.41 57.1283 403.11 62.4628C390.81 67.7973 381.22 75.5038 374.34 85.5723C367.46 95.6407 364.02 107.741 364.02 121.853C364.02 135.965 367.54 148.025 374.6 158.003C381.65 167.992 391.46 175.608 404.01 180.852C416.56 186.107 431.01 188.729 447.36 188.729C461.98 188.729 474.36 186.747 484.51 182.784C494.66 178.821 502.7 173.406 508.63 166.51C514.56 159.625 518.22 151.788 519.6 143.011H487.09C485.03 148.866 480.42 153.64 473.29 157.343C466.15 161.046 457.25 162.897 446.59 162.897C436.95 162.897 428.66 161.346 421.69 158.253C414.72 155.161 409.22 150.937 405.18 145.603C401.14 140.268 398.69 134.333 397.83 127.788H520.13C520.99 111.094 518.71 97.3622 513.29 86.6031C507.87 75.8441 499.57 67.7973 488.39 62.4628ZM399.63 108.171C401.86 100.255 406.85 93.579 414.59 88.1544C422.33 82.7299 432.39 80.0176 444.78 80.0176C457.17 80.0176 467.27 82.5597 474.58 87.634C481.89 92.7183 485.97 99.554 486.84 108.161H399.63V108.171Z"
                                stroke="white"
                                strokeWidth={2}
                                />
                                <path
                                d="M677.77 67.1065C672.78 62.8028 666.93 59.6202 660.22 57.5484C653.51 55.4867 646.2 54.4458 638.29 54.4458C629.17 54.4458 621 55.827 613.78 58.5793C606.56 61.3316 600.32 65.0848 595.07 69.8087C589.82 74.5427 585.65 79.7471 582.56 85.4319C580.98 88.3343 579.69 91.2868 578.69 94.2894V57.2882H545.15V185.626H578.69V109.312C580.01 106.059 581.98 102.877 584.62 99.764C589.09 94.5195 594.94 90.1659 602.17 86.723C609.39 83.2801 617.48 81.5586 626.42 81.5586C638.29 81.5586 646.84 84.1008 652.09 89.175C657.34 94.2593 659.96 102.216 659.96 113.065V185.626H693.5V107.12C693.5 97.9925 692.12 90.1258 689.37 83.4903C686.62 76.8647 682.75 71.4001 677.76 67.0965L677.77 67.1065Z"
                                stroke="white"
                                strokeWidth={2}
                                />
                                <path
                                d="M781.49 22.1787H747.95V57.2983H714.93V83.3802H747.95V185.636H781.49V83.3802H814.52V57.2983H781.49V22.1787Z"
                                stroke="white"
                                strokeWidth={2}
                                />
                                <path
                                d="M951.66 133.603C948.82 129.209 944.99 125.686 940.18 123.014C935.36 120.342 929.9 118.15 923.8 116.428C917.69 114.707 911.29 113.155 904.58 111.784C896.67 110.403 890.09 109.122 884.84 107.911C879.59 106.71 875.64 105.119 872.97 103.137C870.3 101.155 868.97 98.363 868.97 94.74C868.97 90.2662 871.12 86.7332 875.42 84.1511C879.72 81.5689 886.08 80.2778 894.51 80.2778C902.94 80.2778 909.47 81.699 913.6 84.5414C917.73 87.3838 920.48 91.9877 921.86 98.353H951.53C951.53 89.7458 949.42 82.1294 945.21 75.5038C940.99 68.8782 934.67 63.7138 926.25 60.0107C917.82 56.3076 907.24 54.4561 894.51 54.4561C886.08 54.4561 878.21 55.3168 870.9 57.0382C863.59 58.7597 857.23 61.2618 851.81 64.5245C846.39 67.7973 842.17 71.8407 839.17 76.6648C836.16 81.4888 834.66 86.9935 834.66 93.1887C834.66 99.3839 836.16 104.939 839.17 109.322C842.18 113.716 846.27 117.329 851.43 120.171C856.59 123.014 862.52 125.296 869.23 127.017C875.94 128.739 882.9 130.2 890.13 131.411C897.35 132.442 903.29 133.563 907.93 134.764C912.57 135.975 916.01 137.566 918.25 139.538C920.48 141.519 921.6 144.312 921.6 147.935C921.6 150.867 920.91 153.489 919.54 155.811C918.16 158.133 915.67 159.905 912.06 161.106C908.45 162.317 903.37 162.917 896.84 162.917C887.21 162.917 879.42 161.066 873.49 157.363C867.56 153.66 863.64 148.886 861.75 143.031H830.79C830.44 145.443 830.79 148.545 831.82 152.328C832.85 156.122 834.79 160.125 837.63 164.339C840.47 168.562 844.47 172.515 849.63 176.219C854.79 179.922 861.28 182.934 869.11 185.256C876.94 187.578 886.27 188.739 897.1 188.739C909.31 188.739 919.81 187.228 928.58 184.215C937.35 181.203 944.1 176.859 948.83 171.174C953.56 165.49 955.93 158.524 955.93 150.257C955.93 143.541 954.51 137.986 951.67 133.603H951.66Z"
                                stroke="white"
                                strokeWidth={2}
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_293_687">
                                <rect width="956.91" height={190} fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
              </div>
            </div>
          </div>

          <div className="row" id='logo'>
                <div className="col-lg-12">
                    {logos.map(logo => (
                    <div key={logo.id} className="client-logo">
                        <img src={logo.blackIcon} className="imgfluid bl-icon" alt="Black Icon" />
                        <img src={logo.greenIcon} className="imgfluid bl-green" alt="Green Icon" />
                    </div>
                    ))}
                </div>
            </div>


        </div>
      </div>
    </section>
  )
}

export default clinets