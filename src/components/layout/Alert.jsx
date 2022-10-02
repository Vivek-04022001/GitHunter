import { startTransition, useContext } from "react";
import AlertContext from "../../context/alert/AlertContext";

function Alert() {
  const { alert } = useContext(AlertContext);
  return (
    alert !== null && (
      <p className="flex items-start mb-4 space-x-2">
        {alert.type === "error" && (
          <svg
            fill="none"
            viewBox="0 0 24 24"
            className="w-26 h-6 flex-none mt-0.5"
          >
            {" "}
            <circle cx="12" cy="12" r="12" fill="#fecdd3"></circle>
            <path
              //   strokeLinecap="round"
              //   strokeLinejoin="round"
              strokeWidth="2"
              d="M8 8l8 8M16 8l-8 8"
              stroke="#B91C1C"
            ></path>
          </svg>
        )}
        <p className="flex-1 text-base font-semibold leading-7 text-white">
          <strong>{alert.msg}</strong>
        </p>
      </p>
    )
  );
}

export default Alert;
