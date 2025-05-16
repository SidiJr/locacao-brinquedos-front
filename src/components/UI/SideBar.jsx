import { navTreeSections } from "../../lib/utils";
import ArrowRightIcon from "../Icons/ArrowRightIcon";
import SideBarCollapsible from "./Collapsibles/SideBarCollapsible";

function SideBar() {
  const path = window.location.pathname;

  return (
    <nav>
      <div className="bg-gradient-to-b from-sky-200 to-fuchsia-200 h-full w-60">
        <section className="border-b-2 border-gray-500/25">
          <a href="/">
            <img className="w-60 object-cover" src="/images/logo.png" />
          </a>
        </section>
        {navTreeSections.map(({ title, pages }, sectionIndex) => (
          <section
            key={title}
            className="border-b-2 border-gray-500/25 min-h-10 p-2"
          >
            <>
              {sectionIndex == 0 && (
                <>
                  <h1 className="text-xl underline text-center pb-2 pt-4 pb-4">
                    {title.toUpperCase()}
                  </h1>
                  <ul className="pl-5">
                    {pages.map((page) => (
                      <li key={page.link} className="flex gap-2 items-center">
                        <ArrowRightIcon />
                        <a href={page.link} className="hover:underline">
                          {page.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
              {sectionIndex > 0 && (
                <>
                  <SideBarCollapsible
                    title={title.toUpperCase()}
                    startOpen={pages.some((page) => page.link === path)}
                  >
                    <ul className="pl-5">
                      {pages.map((page) => (
                        <li key={page.link} className="flex gap-2 items-center">
                          <ArrowRightIcon />
                          <a href={page.link} className="hover:underline">
                            {page.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </SideBarCollapsible>
                </>
              )}
            </>
          </section>
        ))}
      </div>
    </nav>
  );
}

export default SideBar;
