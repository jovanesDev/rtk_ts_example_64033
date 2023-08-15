import React from "react"

type Props = {}

const CustomSpinner = (props: Props) => {
  return (
    <div
      style={{ minWidth: "100vw", minHeight: "100vh" }}
      className="d-flex justify-content-center align-items-center"
    >
      <div className="">
        <div
          className="spinner-border text-info"
          style={{ width: "7rem", height: "7rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  )
}

export default CustomSpinner
