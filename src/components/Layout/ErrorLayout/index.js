import React from "react";

function DefaultLayout({ children }) {
  return (
    <div>
      <h1>Trang error</h1>
      <div className="content">{children}</div>
    </div>
  );
}

export default DefaultLayout;
