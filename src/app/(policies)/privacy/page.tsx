export default function Privacy() {
    return (
        <section className="flex flex-col gap-10 justify-center items-center">
            <h1 className="text-3xl leading-[1.1] sm:text-3xl md:text-6xl font-bold">
                Privacy Policy
            </h1>
            <h3>
                <strong>Last Updated:</strong> September 16, 2023
            </h3>

            <div className="flex flex-col gap-5 max-w-5xl leading-normal sm:text-xl sm:leading-8 text-justify">
                <h2 className="font-bold">1. Introduction</h2>
                <p>
                    Welcome to LeetTrack&apos;s Privacy Policy. This Privacy
                    Policy explains how your personal information is collected,
                    used, and disclosed when you use our Service.
                </p>

                <h2 className="font-bold">2. Information We Collect</h2>
                <p>
                    LeetTrack collects information provided by users during the
                    GitHub OAuth authentication process. This information may
                    include your GitHub username and email address. We do not
                    collect any additional personal information.
                </p>

                <h2 className="font-bold">3. Use of Your Information</h2>
                <p>
                    The information collected is used solely for the purpose of
                    enabling the functionality of the LeetTrack app. We do not
                    use your information for any other purpose.
                </p>

                <h2 className="font-bold">4. Data Storage</h2>
                <p>
                    Your personal information, including but not limited to your
                    GitHub username and email address, is securely stored on the
                    servers of our database provider, Planetscale. We take data
                    security seriously and have implemented measures to protect
                    your information from unauthorized access or disclosure.
                </p>

                <h2 className="font-bold">5. Disclosure of Your Information</h2>
                <p>
                    We do not disclose your personal information to any third
                    parties, except as required by law.
                </p>

                <h2 className="font-bold">6. Security</h2>
                <p>
                    We take the security of your personal information seriously.
                    We use industry-standard security measures to protect your
                    data from unauthorized access or disclosure.
                </p>

                <h2 className="font-bold">7. Changes to this Privacy Policy</h2>
                <p>
                    We may update our Privacy Policy from time to time. Any
                    changes will be posted on this page with a new effective
                    date.
                </p>

                <h2 className="font-bold">8. Contact Us</h2>
                <p>
                    If you have any questions or concerns about this Privacy
                    Policy or our data practices, please contact us at [Contact
                    Email Address].
                </p>
            </div>
        </section>
    );
}
