import React from "react";

const PrivacyPolicy = ({ visible, setVisible }) => {
  return visible ? (
    <div className="w-full h-full fixed top-0 flex justify-center z-50">
      <div className="lg:w-3/5 w-4/5 h-4/6 self-center text-justify p-5 pt-0 bg-white text-black rounded-xl shadow-lg overflow-y-scroll ">
        <div className="c4">
          <div className="sticky top-0 pt-2 shadow-sm bg-white">
            <div className="flex justify-between items-center">
              <p className="c0">
                <span className="text-lg font-medium">
                  Privacy Policy - Rogan
                </span>
              </p>
              <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:shadow-outline"
                onClick={() => setVisible(false)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <hr />
          </div>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              This privacy policy (this &ldquo;Policy&rdquo;) explains how
              personal information is collected, used, and disclosed by Rogan
              Holdings, Inc. with its registered office in the State of and all
              its designated agents, employees and subsidiaries
              (&ldquo;Rogan&rdquo; or &ldquo;we&rdquo;).
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              This Policy applies to consumer users (individually referred to as
              &ldquo;you&rdquo;) of Rogan&rsquo;s websites, applications, and
              other online services (collectively, our &ldquo;Sites&rdquo;).
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              Other third parties, such as small and medium businesses
              (&ldquo;SMBs&rdquo;) at which you make reservations through our
              Sites, issuers of Merchant Gift Cards you purchase through our
              Sites, and social networks that you use in connection with our
              Sites, may also collect, use, and share information about you.
              This Policy does not cover such third parties or their services.
              For information about third-party privacy practices, please
              consult with them directly.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="font-medium">
              Part I - Information We Collect.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              We collect information about you in various ways when you use our
              Sites. We use this information to, among other things, provide the
              functionality and improve the quality of our Sites and personalize
              your experience. For example, we may collect your name, email
              address, postal address, phone number (including your mobile phone
              number), billing information, survey responses, demographics,
              current and prior appointments details, favourite SMBs, special
              SMB requests, passwords, contact information of people you add to,
              or notify of, your appointments through our Sites, names and email
              addresses of recipients of Rogan Gift Cards (as this term is
              defined in the Rogan Terms of Use) and Merchant Gift Cards, and
              other information you provide on our Sites. If you use our mobile
              application, either to book an appointment or to pay, we may also
              collect your mobile device ID, your precise location data, and the
              SMB search locations you select. For certain services on our
              Sites, credit or debit card account information may be required,
              as further described in the section called &ldquo;Payment Card
              Information&rdquo; below. We may also obtain information from
              other sources, such as third-party websites, applications, and
              services (each, a &ldquo;Third-Party Platform&rdquo;), through
              which you connect with our Sites and combine that with information
              we collect on our Sites.
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              When you visit our Sites, some information is automatically
              collected. For example, when you visit our Sites, we may
              automatically collect your location, computer operating system,
              Internet Protocol (IP) address, access times, browser type and
              language, and the website you visited before our Sites. We also
              collect information about your usage and activity on our Sites
              using certain technologies, such as:
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              1. Cookies. We may automatically collect information using
              &ldquo;cookies&rdquo; and similar technology. Cookies are small
              data files that may have unique identifiers and reside, among
              other places, on your computer or mobile device, in emails we send
              to you, and on our web pages. Among other things, cookies help us
              improve our Sites and your experience. We use cookies to see which
              areas and features of our Sites are popular and to count visits to
              our Sites. We may access information contained in cookies placed
              on your device by a Third-Party Platform as permitted by the terms
              of your agreement and privacy settings with such Third-Party
              Platform. We may share this information with the Third-Party
              Platform for its use as permitted by the terms of your agreement
              and privacy settings with such Third-Party Platform.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              2. Web Beacons. We may collect information using web beacons. Web
              beacons are electronic images that may be used on our Sites or in
              our emails. We use web beacons to deliver cookies, count visits,
              understand usage and campaign effectiveness, and tell whether you
              open an email and act upon it
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              3. Do Not Track Signals. We currently do not employ technology
              that recognizes &ldquo;do-not-track&rdquo; signals from your
              browser. We may engage third parties, such as marketing or
              analytics partners, who may collect information about your online
              activities over time and across different websites when you use
              our Sites.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="font-medium">
              Part Il - How We Use Information We Collect.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              We use personal information collected through our Sites for the
              purposes described in this Policy or disclosed to you on our Sites
              or otherwise in connection with our services. For example, we may
              use your information to:
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              1. Make and change your appointments made through our Sites;
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              2. Offer you, or provide you with, products and services, such as
              Rogan Gift Cards and Merchant Gift Cards and the option to pay
              your bill at a SMB through our Sites
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              3. Email Rogan Gift Cards and Merchant Gift Cards to designated
              recipients;
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              4. Operate and improve our Sites, products, and services;
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              5. Understand you and your preferences to enhance, personalize,
              and customize your experience and enjoyment using our Sites,
              products, and services, such as understanding your appointment
              history to make recommendations about other SMBs you may like;
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              6. Process and deliver contest entries and rewards;
            </span>
          </p>
          <p className="c0">
            <span className="c1">7. Display relevant advertising;</span>
          </p>
          <p className="c0">
            <span className="c1">
              8. Respond to your comments and questions and provide customer
              service:
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              9. Send you information relating to our products and services,
              including reservation confirmations, receipts, technical notices,
              updates, security alerts, and support and administrative messages;
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              10. Communicate with you about contests, offers, promotions,
              rewards, upcoming events, and other news about products and
              services offered by Rogan, our subsidiaries, and affiliates;
              select SMBs; and our other selected partners;
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              11. Link or combine with other personal information we get from
              third parties to help understand your needs and provide you with
              better service;
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              12. Authenticate your credit or debit card account information;
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              13. Protect, investigate, and deter against fraudulent,
              unauthorized, or illegal activity. By providing your mobile phone
              number, you expressly consent to receive direct dial calls,
              autodialled and pre-recorded message calls, and text messages from
              us relating to our product and services at that number. Rogan may
              store and process personal information in the United States and
              other countries.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="font-medium">
              Part Ill - How We Share Information.
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              When you use a credit or debit card to secure a reservation
              through our Sites, we provide your credit or debit card account
              information (including card number and expiration date, but
              excluding the CVV number) to our third-party payment service
              providers.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              If you purchase Rogan Gift Cards or Merchant Gift Cards from us,
              we collect the credit or debit card account information from you.
              We share this information with our third-party payment service
              providers in order to process your payments. These third parties
              may also store your credit or debit card information, other than
              your CVV number, for your future use on our Sites. Your CVV number
              will not be stored and must be re-entered for each order.
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              For information about the security of your credit or debit card
              account information, see Section called &ldquo;Security of Your
              Personal Information&rdquo; below. Information You Share Socially.
              Our Sites may allow you to connect and share your actions,
              comments, content, and information publicly or with friends on
              Third-Party Platforms such as Facebook or Instagram. Our Sites may
              also allow you to connect with us on, share on, and use
              Third-Party Platforms, including those on which Rogan has a
              presence.
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              Please be mindful of your personal privacy needs and the privacy
              needs of others as you choose whom to connect with and what to
              share and make public. We cannot control the privacy or security
              of information you choose to make public or share with others.
              Rogan also does not control the privacy practices of Third-Party
              Platforms. Please contact those sites and services directly if you
              want to learn about their privacy practices.
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              Sharing with Others. We do not share your personal information
              with third parties other than as described above and as
              follows&rsquo;
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              We may share personal information when you authorize us to share
              your information with other third parties (such as the SMBs at
              which you make appointments through our Sites) for their own
              marketing purposes, which are subject to the separate privacy
              policies of such third parties.
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              We may share personal information with affiliates, third-party
              vendors, consultants, and other service providers who work for us.
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              We may share your credit or debit card account information with
              third parties as described in the section called &ldquo;Payment
              Card Information&rdquo; above
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              We may share aggregate statistical data for the improvement of
              services offered by our Sites.
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              We share personal information with third parties who provide
              services to us, such as data collection, reporting, ad response
              measurement, and site analytics, as well as assistance with
              delivery of relevant marketing messages and advertisements. These
              third parties may view, edit, or set their own cookies. We and our
              third-party service providers, advertisers, and/or partners may
              also place web beacons for these third parties. The use of these
              technologies by these third parties is subject to their own
              privacy policies and is not covered by this Policy.
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              We may disclose your personal information (i) to comply with laws
              and to respond to lawful requests and legal process, (ii) to
              protect the rights and property of Rogan, our agents and
              customers, and others, including to enforce our agreements,
              policies, and terms of use, and (iil) In an emergency to protect
              the personal safety of Rogan, its customers, or any person.
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              We may disclose or transfer your personal information to a third
              party if we sell, transfer, divest, or disclose all or a portion
              of our business or assets to another company in connection with or
              during negotiation of any merger, financing, acquisition,
              bankruptcy, dissolution, transaction, or proceeding
            </span>
          </p>
          <p className="c0">
            <span className="c1">
              We may also share aggregated or de-identified information with
              third parties in our discretion.
            </span>
          </p>
          <p className="c0">
            <span className="font-medium">
              Part IV - Security of Your Personal Information.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              Rogan takes reasonable steps to help protect your personal
              information in an effort to prevent loss, misuse, unauthorized
              access, disclosure, alteration, and destruction. When your credit
              or debit card account information is being transmitted tour Sites
              or through our Sites, it will be protected by encryption
              technology, such as Secure Sockets Layer (SSL).
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              To be clear, Rogan does not itself store your credit or debit card
              account information, and we do not have direct control over or
              responsibility for your credit or debit card account information.
              Our contracts with third parties that receive your credit or debit
              card account information require them to keep it secure and
              confidential
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              Nonetheless, we cannot guarantee that transmissions of your credit
              or debit card account information or personal information will
              always be secure or that unauthorized third parties will never be
              able to defeat the security measures taken by Rogan or our
              third-party service providers. We assume no liability or
              responsibility for disclosure of your information due to errors in
              transmission, unauthorized third-party access, or other causes
              beyond our control. You play an important role in keeping your
              personal information secure. You should not share your
              user&rsquo;s name, password, or other security information for
              your Rogan account with anyone. If we receive instructions using
              your user&rsquo;s name and password, we will consider that you
              have authorized the instructions.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="font-medium">
              Part V - Your Information Choices and Changes.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              You may opt out of receiving promotional emails from Rogan by
              following the instructions in those emails. If you opt out, we may
              still send you non-promotional emails, such as emails about your
              Rogan account or our ongoing business relations. You may also send
              requests about your contact preferences or changes to your
              information, including requests to opt out of sharing your
              personal information with third parties, to our contact
              information below.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              1. Cookie choices. Most web browsers are set to accept cookies by
              default. If you prefer, you can usually choose to set your browser
              to remove cookies and to reject cookies. If you choose to remove
              cookies or reject cookies, this could affect certain features or
              services of our Sites.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              2. Application location choices. Most mobile devices allow you to
              turn off location services. For more information about how to do
              this, please contact your mobile service cartier or your device
              manufacturer. If you choose to turn off location services, this
              could affect certain features or services of our Sites
            </span>
          </p>
          <p className="c0">
            <span className="font-medium">
              Part VI - Changes to This Policy.
            </span>
          </p>
          <p className="c0">
            <span className="c1">&nbsp;</span>
          </p>
          <p className="c0">
            <span className="c1">
              Rogan may update or revise this Policy from time to time. You
              agree that you will review this Policy periodically. If we make
              any changes to this Policy, we will change the &ldquo;Last
              Updated&rdquo; date above. You are free to decide whether or not
              to accept a modified version of this Policy, but accepting this
              Policy, as modified, is required for you to continue using our
              Sites. If you do not agree to the terms of this Policy or any
              modified version of this Policy, your sole recourse is to
              terminate your use of our site.
            </span>
          </p>
          <p className="c0 c5">
            <span className="c1"></span>
          </p>
          <p className="c5 c6">
            <span className="c1"></span>
          </p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default PrivacyPolicy;
