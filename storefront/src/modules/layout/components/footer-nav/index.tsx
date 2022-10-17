import clsx from "clsx"
import { useCollections } from "medusa-react"
import Link from "next/link"
import CountrySelect from "../country-select"

const FooterNav = () => {
  const { collections } = useCollections()

  return (
    <div className="flex flex-col gap-y-8 pt-16 pb-8 bg-black text-white">
      <div className="content-container">
        <div className="flex flex-col gap-y-6 gap-x-12 xsmall:flex-row items-start justify-between">
          <div className="flex-1">
            <h4 className="font-bold mb-6">About</h4>
            <p className="text-sm">
              Appwrite is a self-hosted solution that provides developers with a
              set of easy-to-use and integrate REST APIs to manage their core
              backend needs.
            </p>
          </div>
          <div className="text-small-regular flex-1 grid grid-cols-1">
            <div className="flex flex-col gap-y-2">
              <span className="text-base-semi">Navigation</span>
              <ul
                className={clsx("grid grid-cols-1 gap-y-2", {
                  "grid-cols-2": (collections?.length || 0) > 4,
                })}
              >
                {collections?.map((c) => (
                  <li key={c.handle}>
                    <Link href={`/collections/${c.handle}`}>
                      <a className="underline">{c.title}</a>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between">
          <span className="text-xsmall-regular">
            Copyright © 2022 <a href="/">Appwrite Swag Store</a>
          </span>
          <div className="min-w-[316px] flex xsmall:justify-end">
            <CountrySelect />
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="footer">
      <div className="footer-item footer-text ">
        <h4>About</h4>
        <div className="rte">
          <p>
            Appwrite is a self-hosted solution that provides developers with a
            set of easy-to-use and integrate REST APIs to manage their core
            backend needs.
          </p>
          <p>
            <br />
          </p>
        </div>
      </div>
      <div className="footer-item footer-menus">
        <div>
          <h4>Navigation</h4>
          <div className="footer-links body-size-lesser-than-normal">
            <span>
              <a href="/">Home</a>
            </span>
            {collections?.map((c) => (
              <span key={c.id}>
                <Link href={`/collections/${c.id}`}>
                  <a>{c.title}</a>
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-item footer-info localization-form-holder">
        <div className="footer-icons">
          <svg
            viewBox="0 0 38 24"
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="24"
            role="img"
            aria-labelledby="pi-paypal"
          >
            <title id="pi-paypal">PayPal</title>
            <path
              opacity=".07"
              d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z"
            ></path>
            <path
              fill="#fff"
              d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32"
            ></path>
            <path
              fill="#003087"
              d="M23.9 8.3c.2-1 0-1.7-.6-2.3-.6-.7-1.7-1-3.1-1h-4.1c-.3 0-.5.2-.6.5L14 15.6c0 .2.1.4.3.4H17l.4-3.4 1.8-2.2 4.7-2.1z"
            ></path>
            <path
              fill="#3086C8"
              d="M23.9 8.3l-.2.2c-.5 2.8-2.2 3.8-4.6 3.8H18c-.3 0-.5.2-.6.5l-.6 3.9-.2 1c0 .2.1.4.3.4H19c.3 0 .5-.2.5-.4v-.1l.4-2.4v-.1c0-.2.3-.4.5-.4h.3c2.1 0 3.7-.8 4.1-3.2.2-1 .1-1.8-.4-2.4-.1-.5-.3-.7-.5-.8z"
            ></path>
            <path
              fill="#012169"
              d="M23.3 8.1c-.1-.1-.2-.1-.3-.1-.1 0-.2 0-.3-.1-.3-.1-.7-.1-1.1-.1h-3c-.1 0-.2 0-.2.1-.2.1-.3.2-.3.4l-.7 4.4v.1c0-.3.3-.5.6-.5h1.3c2.5 0 4.1-1 4.6-3.8v-.2c-.1-.1-.3-.2-.5-.2h-.1z"
            ></path>
          </svg>
        </div>
        <div className="footer-copyright body-size-lesser-than-normal">
          <span>
            Copyright © 2022 <a href="/">Appwrite Swag Store</a>
            <span className="powered-by-shopify">.</span>
          </span>
        </div>
      </div>
    </div>
  )
}

export default FooterNav
