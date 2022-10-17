import Link from "next/link"
import { ArrowLongRightIcon } from "@heroicons/react/24/outline"

const FooterCTA = () => {
  return (
    <div className="bg-neutral-800 w-full text-white">
      <div className="content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative">
        <div className="w-full">
          <h3 className="text-xl-semi">Sign up for our newsletter</h3>
          <div className="my-6">
            <form
              method="post"
              action="/contact#contact_form"
              id="contact_form"
              acceptCharset="UTF-8"
              className="contact-form"
              autoComplete="off"
            >
              <div className="relative focus:opacity-100 hover:opacity-80 opacity-60">
                <span className="absolute right-0 inset-y-0 flex items-center pl-2">
                  <ArrowLongRightIcon className="w-5 h-5"></ArrowLongRightIcon>
                </span>
                <input
                  type="email"
                  value=""
                  onChange={console.log}
                  placeholder="Enter your email"
                  name="contact[email]"
                  id="Email"
                  aria-label="Enter your email"
                  autoCorrect="off"
                  autoCapitalize="off"
                  className="mt-1 px-3 py-2 border-b focus:border-b outline-none bg-transparent shadow-sm border-slate-300 block w-full sm:text-sm"
                />
              </div>
            </form>
          </div>
          <div className="">
            <p className="text-xs italic font-light opacity-60">
              Join the Appwrite newsletter and stay updated on new releases and
              features, guides, and case studies. You can at any time withdraw
              your consent by unsubscribing directly in the newsletter. Read our{" "}
              <Link href="https://appwrite.io/policy/privacy">
                <a className="underline">privacy policy</a>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterCTA
