import FontAwesomeIcon from "../../components/icons/FontAwesomeIcon";

const Footer = () => (
  <nav id="footer" className="bg-gray-100">
    {/* <!-- start container --> */}
    <div className="container mx-auto pt-8 pb-4">
      <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/3 pb-6">
          {/* <!-- Column 1 Content --> */}
          <a href="#" aria-label="Home">
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              alt="Logo"
            />
          </a>
          <div>
            <p className="lg:pt-5 text-gray-700 text-xs tracking-wide">
              Making the world a better place through <br /> constructing
              elegant hierarchies
            </p>
          </div>
          <div className="flex place-content-start lg:my-5">
            <FontAwesomeIcon
              icon="twitter"
              className="my-1 ml-1 mr-3 text-twitter cursor-pointer"
            />
            <FontAwesomeIcon
              icon="facebook"
              className="my-1 mr-3 text-facebook cursor-pointer"
            />
            <FontAwesomeIcon
              icon="facebook-messenger"
              className="my-1 mr-3 text-messenger cursor-pointer"
            />
            <FontAwesomeIcon
              icon="instagram"
              className="my-1 mr-3 text-instagram cursor-pointer"
            />
            <FontAwesomeIcon
              icon="linkedin"
              className="my-1 mr-3 text-linkedin cursor-pointer"
            />
            <FontAwesomeIcon
              icon="app-store"
              className="my-1 mr-3 text-appstore cursor-pointer"
            />
            <FontAwesomeIcon
              icon="google-play"
              className="my-1 mr-3 text-playstore cursor-pointer"
            />
          </div>
        </div>

        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/6 pb-6">
          {/* <!-- Column 2 Content --> */}

          <h4 className="text-gray-900 text-lg font-semibold tracking-wide">
            Solutions
          </h4>
          <ul className="nav navbar-nav">
            <li id="navi-2" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-1"
              >
                Marketing
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-2"
              >
                Analytics
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-2"
              >
                Commerce
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-2"
              >
                Insights
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/6 pb-6">
          {/* <!-- Column 3 Content --> */}
          <h4 className="text-gray-900 text-lg font-semibold tracking-wide">
            Support
          </h4>
          <ul className="">
            <li id="navi-2" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-1"
              >
                Pricing
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-2"
              >
                Documentation
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-2"
              >
                Guides
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-2"
              >
                API Status
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/6 pb-6">
          {/* <!-- Column 4 Content --> */}

          <h4 className="text-gray-900 text-lg font-semibold tracking-wide">
            Company
          </h4>
          <ul className="">
            <li id="navi-2" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-1"
              >
                About
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-2"
              >
                Blog
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-2"
              >
                Jobs
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-2"
              >
                Press
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm">
              <a
                className="text-gray-700 text-small tracking-wide"
                href="/page-2"
              >
                Partners
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full overflow-hidden sm:my-1 sm:px-1 sm:w-1/2 md:my-px md:px-px md:w-1/2 lg:my-2 lg:px-2 lg:w-1/4 xl:my-2 xl:px-2 xl:w-1/6 pb-6">
          {/* <!-- Column 4 Content --> */}

          <h4 className="text-gray-900 text-lg font-semibold tracking-wide">
            Legal
          </h4>
          <ul className="">
            <li id="navi-2" className="leading-7 text-sm tracking-wide">
              <a className="text-gray-700 text-small" href="/page-1">
                Claim
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm tracking-wide">
              <a className="text-gray-700 text-small" href="/page-2">
                Privacy
              </a>
            </li>
            <li id="navi-1" className="leading-7 text-sm tracking-wide">
              <a className="text-gray-700 text-small" href="/page-2">
                Terms
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* <!-- Start footer bottom --> */}

      <div
        className="pt-4 md:flex md:items-center md:justify-center divide-y-2"
        style={{ borderTop: "1px solid white" }}
      >
        <ul className="">
          <li
            className="md:mx-2 md:inline leading-7 text-sm tracking-wide"
            id="footer-navi-2"
          >
            <a
              className="text-gray-700 text-small tracking-wide"
              href="/disclaimer"
            >
              Disclaimer
            </a>
          </li>
          <li
            className="md:mx-2 md:inline leading-7 text-sm tracking-wide"
            id="footer-navi-2"
          >
            <a
              className="text-gray-700 text-small tracking-wide"
              href="/cookie"
            >
              Cookie policy
            </a>
          </li>
          <li
            className="md:mx-2 md:inline leading-7 text-sm tracking-wide"
            id="footer-navi-2"
          >
            <a
              className="text-gray-700 text-small tracking-wide"
              href="/privacy"
            >
              Privacy
            </a>
          </li>
        </ul>
      </div>

      <div className="pt-4 md:flex md:items-center md:justify-center divide-y-2">
        <p className="text-gray-900 text-xs tracking-wide">
          © Copyright 2020 Workflow, Inc. All Rights Reserved
        </p>
      </div>

      {/* <!-- end container --> */}
    </div>
  </nav>
);

export default Footer;
