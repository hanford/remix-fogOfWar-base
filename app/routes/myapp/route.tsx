import { Link, Outlet } from "@remix-run/react";

export default function Index() {
  return (
    <div>
      <Link to="/myapp/other">
        <span style={{ color: "blue" }}>
          Hello, click here to `/myapp/other`
        </span>
      </Link>

      <Outlet />
    </div>
  );
}
