import { Link } from "@remix-run/react";

export default function OtherIndex() {
  return (
    <div>
      <Link to="/myapp">
        <span style={{ color: "red" }}>Go back to `/myapp`</span>
      </Link>
    </div>
  );
}
