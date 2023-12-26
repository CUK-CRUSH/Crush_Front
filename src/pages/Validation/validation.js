import { debounce } from "lodash";

const Validation = () => {
  const onChange = debounce((e) => {
    console.log(e.target.value);
  }, 500);
  return (
    <div className="w-full h-full relative bg-white flex flex-col justify-center align-middle items-center">
      <div className="text-center text-black text-xl font-semibold font-['Noto Sans']">
        Welcome to My List!
        <br />
        Please write your username
      </div>
      <div className={"h-[61px]"}></div>
      <div className="flex flex-row justify-center align-middle items-center w-full ml-3 mr-3 h-[58px] bg-white rounded-[30px] border border-zinc-300">
        <input
          type="text"
          onChange={(e) => onChange(e)}
          placeholder={"user name"}
          className=" w-[200px] text-center text-zinc-300 text-xl font-medium font-['Noto Sans'] border-none outline-none "
        ></input>
        <div className="w-[22px] h-[22px]">
          <div className="w-[22px] h-[22px] bg-green-600 rounded-full" />
        </div>
      </div>
      <div className={"h-[20px]"}></div>
      <div className="w-[131px] h-[58px]">
        <div className="flex flex-row justify-center align-middle items-center h-[58px] bg-black rounded-[30px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="44"
            height="15"
            viewBox="0 0 44 15"
            fill="none"
          >
            <path
              d="M12.0711 14.28H9.45107L2.23107 2.74H2.15107C2.16441 3.00667 2.17774 3.29333 2.19107 3.6C2.21774 3.90667 2.23774 4.23333 2.25107 4.58C2.26441 4.91333 2.27774 5.26 2.29107 5.62C2.30441 5.96667 2.31107 6.32 2.31107 6.68V14.28H0.351074V0H2.95107L10.1511 11.48H10.2111C10.1977 11.28 10.1844 11.0333 10.1711 10.74C10.1577 10.4333 10.1444 10.1067 10.1311 9.76C10.1311 9.41333 10.1244 9.06 10.1111 8.7C10.0977 8.34 10.0844 8 10.0711 7.68V0H12.0711V14.28Z"
              fill="white"
            />
            <path
              d="M19.8784 3.3C20.8251 3.3 21.6384 3.5 22.3184 3.9C22.9984 4.28667 23.5184 4.84667 23.8784 5.58C24.2518 6.31333 24.4384 7.18 24.4384 8.18V9.34H17.1984C17.2251 10.4467 17.5118 11.2933 18.0584 11.88C18.6184 12.4667 19.3984 12.76 20.3984 12.76C21.0918 12.76 21.7051 12.7 22.2384 12.58C22.7851 12.4467 23.3451 12.2533 23.9184 12V13.76C23.3851 14 22.8384 14.18 22.2784 14.3C21.7318 14.42 21.0784 14.48 20.3184 14.48C19.2784 14.48 18.3584 14.2733 17.5584 13.86C16.7584 13.4467 16.1318 12.8333 15.6784 12.02C15.2384 11.1933 15.0184 10.18 15.0184 8.98C15.0184 7.76667 15.2184 6.74 15.6184 5.9C16.0318 5.06 16.5984 4.42 17.3184 3.98C18.0518 3.52667 18.9051 3.3 19.8784 3.3ZM19.8784 4.94C19.1184 4.94 18.5051 5.18667 18.0384 5.68C17.5851 6.17333 17.3184 6.87333 17.2384 7.78H22.3184C22.3184 7.22 22.2318 6.72667 22.0584 6.3C21.8851 5.87333 21.6184 5.54 21.2584 5.3C20.8984 5.06 20.4384 4.94 19.8784 4.94Z"
              fill="white"
            />
            <path
              d="M29.1531 8.78L25.4931 3.5H27.9131L30.4731 7.38L33.0331 3.5H35.4331L31.7731 8.78L35.6131 14.28H33.2131L30.4731 10.16L27.7131 14.28H25.3131L29.1531 8.78Z"
              fill="white"
            />
            <path
              d="M41.4325 12.76C41.7125 12.76 41.9991 12.7333 42.2925 12.68C42.5858 12.6267 42.8391 12.5667 43.0525 12.5V14.1C42.8258 14.2067 42.5191 14.2933 42.1325 14.36C41.7458 14.44 41.3591 14.48 40.9725 14.48C40.3858 14.48 39.8458 14.38 39.3525 14.18C38.8725 13.98 38.4858 13.6333 38.1925 13.14C37.8991 12.6467 37.7525 11.96 37.7525 11.08V5.12H36.2525V4.16L37.8325 3.36L38.5725 1.08H39.8725V3.5H42.9525V5.12H39.8725V11.04C39.8725 11.6267 40.0125 12.06 40.2925 12.34C40.5858 12.62 40.9658 12.76 41.4325 12.76Z"
              fill="white"
            />
          </svg>
          <div className={"w-[15px]"}></div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="20"
            viewBox="0 0 24 20"
            fill="none"
          >
            <path
              d="M13.2921 19.7067C13.1991 19.6139 13.1253 19.5036 13.075 19.3822C13.0247 19.2608 12.9988 19.1307 12.9988 18.9993C12.9988 18.8679 13.0247 18.7378 13.075 18.6164C13.1253 18.495 13.1991 18.3847 13.2921 18.2918L20.5856 10.9998L0.999965 10.9998C0.734756 10.9998 0.480411 10.8945 0.292882 10.7069C0.105352 10.5194 -4.48701e-07 10.2651 -4.37109e-07 9.99988C-4.25517e-07 9.73469 0.105352 9.48035 0.292883 9.29283C0.480411 9.1053 0.734756 8.99995 0.999965 8.99995L20.5856 8.99995L13.2921 1.70794C13.1044 1.52031 12.999 1.26583 12.999 1.00049C12.999 0.735142 13.1044 0.480664 13.2921 0.293036C13.4797 0.105408 13.7342 -4.46756e-07 13.9995 -4.37134e-07C14.2649 -4.27512e-07 14.5194 0.105408 14.707 0.293036L23.7067 9.29243C23.7997 9.3853 23.8735 9.49558 23.9238 9.61697C23.9741 9.73836 24 9.86848 24 9.99989C24 10.1313 23.9741 10.2614 23.9238 10.3828C23.8735 10.5042 23.7997 10.6145 23.7067 10.7073L14.707 19.7067C14.6141 19.7997 14.5039 19.8735 14.3825 19.9238C14.2611 19.9741 14.1309 20 13.9995 20C13.8681 20 13.738 19.9741 13.6166 19.9238C13.4952 19.8735 13.3849 19.7997 13.2921 19.7067Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Validation;
