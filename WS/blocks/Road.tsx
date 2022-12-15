import { storyblokEditable } from "@storyblok/react";
import { Blok } from "../types/Types";

type RoadProps = {
  blok: Blok;
};

const Road = ({ blok }: RoadProps) => (
  <div className="realative fill-primary w-full" {...storyblokEditable(blok)}>
    <svg viewBox="0 0 1512 406" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M1511.79 52.8007C1270.99 167.589 1149.59 187.429 808.292 84.8006C466.993 -17.8277 290.322 -25.829 2.79195 52.8007C-267.878 126.82 -28.951 200.166 -4.57764e-05 208.513V352.5C240.798 237.711 362.201 217.872 703.5 320.5C1044.8 423.128 1221.47 431.13 1509 352.5C1779.67 278.481 1540.74 205.135 1511.79 196.788V188.76C1508.37 190.383 1504.98 191.988 1501.61 193.574C1497.61 195.454 1492.84 193.736 1490.96 189.738C1489.08 185.74 1490.8 180.974 1494.8 179.094C1499.34 176.958 1503.93 174.787 1508.56 172.579L1511.79 179.364V52.8007ZM1150.02 270.392C1160.15 270.567 1170.1 270.495 1179.91 270.179C1184.33 270.037 1188.02 273.502 1188.16 277.918C1188.31 282.334 1184.84 286.029 1180.42 286.171C1170.34 286.495 1160.13 286.569 1149.74 286.39C1145.33 286.313 1141.81 282.67 1141.88 278.253C1141.96 273.835 1145.6 270.316 1150.02 270.392ZM1067.19 272.105C1066.59 276.482 1062.55 279.537 1058.17 278.929C1048.27 277.556 1038.19 275.994 1027.88 274.241C1023.52 273.5 1020.59 269.369 1021.33 265.013C1022.07 260.657 1026.21 257.727 1030.56 258.468C1040.72 260.194 1050.64 261.732 1060.37 263.081C1064.74 263.689 1067.8 267.729 1067.19 272.105ZM1262.63 269.562C1261.79 265.225 1264.63 261.027 1268.96 260.185C1278.71 258.295 1288.43 256.149 1298.17 253.748C1302.46 252.691 1306.8 255.312 1307.85 259.602C1308.91 263.892 1306.29 268.227 1302 269.283C1292.01 271.746 1282.02 273.95 1272.01 275.892C1267.67 276.734 1263.48 273.9 1262.63 269.562ZM948.048 249.749C947.016 254.046 942.697 256.691 938.401 255.659C928.745 253.34 918.898 250.887 908.847 248.299C904.568 247.197 901.993 242.836 903.094 238.557C904.196 234.278 908.557 231.703 912.836 232.804C922.809 235.372 932.572 237.804 942.138 240.102C946.434 241.134 949.08 245.453 948.048 249.749ZM1379.37 237.009C1377.81 232.874 1379.9 228.261 1384.04 226.705C1393.23 223.248 1402.54 219.59 1412 215.735C1416.09 214.067 1420.76 216.031 1422.43 220.123C1424.1 224.214 1422.13 228.883 1418.04 230.551C1408.46 234.457 1399.01 238.168 1389.67 241.681C1385.54 243.237 1380.92 241.145 1379.37 237.009ZM830.873 218.455C829.62 222.692 825.169 225.11 820.932 223.857C816.065 222.418 811.154 220.953 806.196 219.462C800.664 217.798 795.176 216.16 789.731 214.547C785.494 213.292 783.078 208.84 784.333 204.604C785.588 200.367 790.04 197.951 794.276 199.206C799.743 200.826 805.252 202.47 810.804 204.14C815.739 205.624 820.627 207.082 825.47 208.514C829.707 209.767 832.126 214.218 830.873 218.455ZM0.889763 172.084C6.47498 170.557 12.0192 169.062 17.5244 167.599C21.7946 166.465 26.1759 169.007 27.3103 173.277C28.4447 177.547 25.9026 181.928 21.6324 183.063C16.1659 184.515 10.6592 186 5.11023 187.517L0.889763 172.084ZM701.107 181.246C699.986 185.52 695.613 188.076 691.34 186.955C680.185 184.03 669.208 181.231 658.397 178.556C654.108 177.495 651.491 173.158 652.552 168.869C653.613 164.58 657.95 161.964 662.239 163.024C673.126 165.718 684.175 168.536 695.398 171.479C699.672 172.599 702.228 176.972 701.107 181.246ZM111.434 153.245C110.542 148.918 113.327 144.687 117.654 143.795C129.007 141.455 140.229 139.278 151.342 137.266C155.689 136.479 159.852 139.365 160.639 143.713C161.426 148.061 158.54 152.223 154.192 153.01C143.212 154.998 132.116 157.15 120.884 159.465C116.557 160.357 112.326 157.572 111.434 153.245ZM568.035 150.232C567.212 154.573 563.026 157.425 558.685 156.602C547.396 154.462 536.264 152.482 525.271 150.663C520.912 149.941 517.964 145.823 518.685 141.464C519.407 137.105 523.525 134.156 527.884 134.877C539.005 136.718 550.259 138.719 561.666 140.882C566.006 141.705 568.858 145.891 568.035 150.232ZM246.313 131.892C245.912 127.491 249.154 123.6 253.554 123.199C265.037 122.153 276.472 121.301 287.888 120.645C292.299 120.392 296.08 123.762 296.333 128.173C296.587 132.584 293.216 136.365 288.805 136.619C277.571 137.264 266.314 138.103 255.006 139.133C250.606 139.534 246.714 136.292 246.313 131.892ZM432.843 130.81C432.496 135.214 428.644 138.504 424.239 138.157C412.883 137.263 401.616 136.559 390.412 136.045C385.998 135.843 382.584 132.101 382.786 127.687C382.989 123.274 386.731 119.86 391.145 120.062C402.527 120.584 413.968 121.299 425.495 122.206C429.9 122.553 433.19 126.405 432.843 130.81ZM635.091 160.311C635.091 165.453 631.526 169.621 627.129 169.621C626.876 169.621 626.626 169.608 626.379 169.581L635.544 185.042L642.5 183L632 191.5L625.575 179.398L621.316 199.881L623 221.5L613.354 254L618 224L615.444 209.483L607.255 229.5L596 211L605 221.5L607.255 199.881L612.033 179.398L603.533 181L605 191.5L598.5 179.398L615.444 168.225L622.932 168.225C620.672 166.582 619.167 163.652 619.167 160.311C619.167 155.169 622.732 151 627.129 151C631.526 151 635.091 155.169 635.091 160.311Z"
      />
    </svg>
  </div>
);

export default Road;