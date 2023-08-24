//domain.com/news
import Link from "next/link";
import { Fragment } from "react";
function NewsPage() {
  return (
    <Fragment>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="news/link1">Link1</Link>
        </li>

        <li>
          <Link href="news/link2">Link2</Link>
        </li>
      </ul>
    </Fragment>
  );
}
export default NewsPage;
